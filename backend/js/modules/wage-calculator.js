// START: GIP wage calculator formula, state management, and interactive output rendering.
class WageCalculator {
    static DAILY_RATES = { normal: 500, compressed: 625 };
    static REGULAR_HOURS = 8;
    static PERIOD_WORK_DAYS = {
        semimonthly: { normal: 10, compressed: 8 },
        monthly: { normal: 20, compressed: 16 },
        annually: { normal: 260, compressed: 208 }
    };

    constructor(root) {
        this.root = root;
        this.currency = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });
        this.fields = {
            period: root.querySelector('#wage-period'), workDays: root.querySelector('#wage-work-days'),
            absentDays: root.querySelector('#wage-absent-days'), lateMinutes: root.querySelector('#wage-late-minutes'),
            schedules: root.querySelectorAll('input[name="work-schedule"]')
        };
        this.outputs = {
            salary: root.querySelector('#wage-net-salary'), periodLabel: root.querySelector('#wage-output-period'),
            gross: root.querySelector('#wage-gross-pay'), absence: root.querySelector('#wage-absence-deduction'),
            late: root.querySelector('#wage-late-deduction'), deductions: root.querySelector('#wage-total-deductions'),
            paidDays: root.querySelector('#wage-paid-days'), schedule: root.querySelector('#wage-schedule-label'),
            scheduleHours: root.querySelector('#wage-schedule-hours'),
            dailyRate: root.querySelector('#wage-daily-rate'),
            headerDailyRate: root.querySelector('#wage-header-daily-rate')
        };
    }

    init() {
        this.fields.period.addEventListener('change', () => this.applyWorkDayPreset());
        [this.fields.workDays, this.fields.absentDays, this.fields.lateMinutes].forEach((field) => {
            field.addEventListener('input', () => this.calculate());
            field.addEventListener('change', () => this.calculate());
        });
        this.fields.schedules.forEach((field) => {
            field.addEventListener('change', () => this.applyWorkDayPreset());
        });
        this.root.querySelector('#wage-reset').addEventListener('click', () => this.reset());
        this.calculate();
    }

    getSchedule() {
        return this.root.querySelector('input[name="work-schedule"]:checked')?.value || 'normal';
    }

    applyWorkDayPreset() {
        const period = this.fields.period.value;
        this.fields.workDays.value = WageCalculator.PERIOD_WORK_DAYS[period][this.getSchedule()];
        this.fields.absentDays.value = Math.min(this.getNumber(this.fields.absentDays), Number(this.fields.workDays.value));
        this.calculate();
    }

    getNumber(field, maximum = Number.POSITIVE_INFINITY) {
        const parsed = Number.parseFloat(field.value);
        return Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), maximum) : 0;
    }

    calculate() {
        const workDays = this.getNumber(this.fields.workDays, 366);
        const absentDays = this.getNumber(this.fields.absentDays, workDays);
        const lateMinutes = this.getNumber(this.fields.lateMinutes, 100000);
        const schedule = this.getSchedule();
        const dailyRate = WageCalculator.DAILY_RATES[schedule];
        const paidDays = Math.max(workDays - absentDays, 0);
        const lateRate = 62.5 / 60;
        const grossPay = workDays * dailyRate;
        const absenceDeduction = absentDays * dailyRate;
        const lateDeduction = Math.min(lateMinutes * lateRate, paidDays * dailyRate);
        const totalDeductions = Math.min(absenceDeduction + lateDeduction, grossPay);
        const netSalary = Math.max(grossPay - totalDeductions, 0);
        const isCompressed = schedule === 'compressed';

        this.fields.absentDays.max = workDays;
        if (Number(this.fields.absentDays.value) > workDays) this.fields.absentDays.value = workDays;
        this.outputs.salary.textContent = this.currency.format(netSalary);
        this.outputs.periodLabel.textContent = this.fields.period.options[this.fields.period.selectedIndex].text;
        this.outputs.gross.textContent = this.currency.format(grossPay);
        this.outputs.absence.textContent = `- ${this.currency.format(absenceDeduction)}`;
        this.outputs.late.textContent = `- ${this.currency.format(lateDeduction)}`;
        this.outputs.deductions.textContent = `- ${this.currency.format(totalDeductions)}`;
        this.outputs.paidDays.textContent = `${paidDays.toLocaleString('en-PH')} day${paidDays === 1 ? '' : 's'}`;
        this.outputs.schedule.textContent = isCompressed ? 'Compressed Work' : 'Normal Work';
        this.outputs.scheduleHours.textContent = isCompressed ? 'Mon-Thu | 7:00 AM - 6:00 PM' : 'Mon-Fri | 8:00 AM - 5:00 PM';
        this.outputs.dailyRate.textContent = this.currency.format(dailyRate);
        this.outputs.headerDailyRate.textContent = `${this.currency.format(dailyRate)} Daily Rate`;
    }

    reset() {
        this.fields.period.value = 'semimonthly';
        this.fields.absentDays.value = 0; this.fields.lateMinutes.value = 0;
        this.root.querySelector('input[name="work-schedule"][value="normal"]').checked = true;
        this.applyWorkDayPreset();
    }
}

export function initWageCalculator() {
    const root = document.getElementById('wage-calculator');
    if (!root) return;
    new WageCalculator(root).init();
}
// END: GIP wage calculator formula, state management, and interactive output rendering.