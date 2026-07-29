// START: GIP wage calculator formula, state management, and interactive output rendering.
class WageCalculator {
    static SCHEDULES = {
        normal: {
            dailyRate: 500,
            paidHours: 8,
            workDays: [1, 2, 3, 4, 5],
            limits: { amIn: 8 * 60, amOut: 12 * 60, pmIn: 13 * 60, pmOut: 17 * 60 },
            label: 'Normal Work',
            hoursLabel: 'Mon-Fri | 8:00 AM - 5:00 PM'
        },
        compressed: {
            dailyRate: 625,
            paidHours: 10,
            workDays: [1, 2, 3, 4],
            limits: { amIn: 7 * 60, amOut: 12 * 60, pmIn: 13 * 60, pmOut: 18 * 60 },
            label: 'Compressed Work',
            hoursLabel: 'Mon-Thu | 7:00 AM - 6:00 PM'
        }
    };
    static HOURLY_RATE = WageCalculator.SCHEDULES.normal.dailyRate / WageCalculator.SCHEDULES.normal.paidHours;
    static MINUTE_RATE = WageCalculator.HOURLY_RATE / 60;
    static PERIOD_WORK_DAYS = {
        semimonthly: { normal: 10, compressed: 8 },
        monthly: { normal: 20, compressed: 16 },
        annually: { normal: 260, compressed: 208 }
    };

    constructor(root) {
        this.root = root;
        this.currency = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });
        this.dtrAttendance = null;
        this.calculatorState = null;
        this.csvUploadTarget = 'calculator';
        this.fields = {
            period: root.querySelector('#wage-period'), workDays: root.querySelector('#wage-work-days'),
            absentDays: root.querySelector('#wage-absent-days'), lateMinutes: root.querySelector('#wage-late-minutes'),
            schedules: root.querySelectorAll('input[name="work-schedule"]'),
            csvInput: root.querySelector('#wage-csv-input'), csvButton: root.querySelector('#wage-csv-button'),
            calculatorView: root.querySelector('#wage-calculator-view'), dtrView: root.querySelector('#wage-dtr-view'),
            showDtr: root.querySelector('#wage-show-dtr'), showCalculator: root.querySelector('#wage-show-calculator'),
            dtrEmployee: root.querySelector('#dtr-employee-name'),
            dtrMonth: root.querySelector('#dtr-month'), dtrCutoff: root.querySelector('#dtr-cutoff'),
            dtrRows: root.querySelector('#dtr-rows'), dtrReset: root.querySelector('#dtr-reset'),
            dtrCsvButton: root.querySelector('#dtr-csv-button'), dtrSelectAll: root.querySelector('#dtr-select-all'),
            dtrSetRegular: root.querySelector('#dtr-set-regular'), dtrSetCompressed: root.querySelector('#dtr-set-compressed')
        };
        this.outputs = {
            salary: root.querySelector('#wage-net-salary'), periodLabel: root.querySelector('#wage-output-period'),
            gross: root.querySelector('#wage-gross-pay'), absence: root.querySelector('#wage-absence-deduction'),
            late: root.querySelector('#wage-late-deduction'), deductions: root.querySelector('#wage-total-deductions'),
            paidDays: root.querySelector('#wage-paid-days'), schedule: root.querySelector('#wage-schedule-label'),
            scheduleHours: root.querySelector('#wage-schedule-hours'),
            dailyRate: root.querySelector('#wage-daily-rate'),
            headerDailyRate: root.ownerDocument.getElementById('wage-header-daily-rate'),
            csvStatus: root.querySelector('#wage-csv-status'),
            dtrDays: root.querySelector('#dtr-total-days'), dtrAbsent: root.querySelector('#dtr-total-absent'),
            dtrLate: root.querySelector('#dtr-total-late'), dtrNet: root.querySelector('#dtr-net-salary'),
            dtrCsvStatus: root.querySelector('#dtr-csv-status'), dtrActionStatus: root.querySelector('#dtr-action-status'),
            dtrEstimatedNet: root.querySelector('#dtr-estimated-net'), dtrEstimatedGross: root.querySelector('#dtr-estimated-gross'),
            dtrEstimatedAbsence: root.querySelector('#dtr-estimated-absence'), dtrEstimatedLate: root.querySelector('#dtr-estimated-late'),
            dtrEstimatedDeductions: root.querySelector('#dtr-estimated-deductions'), dtrEstimatedPaidDays: root.querySelector('#dtr-estimated-paid-days'),
            dtrEstimatedSchedule: root.querySelector('#dtr-estimated-schedule'), dtrEstimatedScheduleDetail: root.querySelector('#dtr-estimated-schedule-detail')
        };
    }

    init() {
        this.fields.period.addEventListener('change', () => this.applyWorkDayPreset());
        [this.fields.workDays, this.fields.absentDays, this.fields.lateMinutes].forEach((field) => {
            const calculateManualValues = () => {
                this.dtrAttendance = null;
                this.calculate();
            };
            field.addEventListener('input', calculateManualValues);
            field.addEventListener('change', calculateManualValues);
        });
        this.fields.schedules.forEach((field) => {
            field.addEventListener('change', () => this.applyWorkDayPreset());
        });
        this.fields.csvButton.addEventListener('click', () => {
            this.csvUploadTarget = 'calculator';
            this.fields.csvInput.click();
        });
        this.fields.dtrCsvButton.addEventListener('click', () => {
            this.csvUploadTarget = 'dtr';
            this.fields.csvInput.click();
        });
        this.fields.csvInput.addEventListener('change', (event) => this.uploadCsv(event));
        this.fields.showDtr.addEventListener('click', () => this.setView('dtr'));
        this.fields.showCalculator.addEventListener('click', () => this.setView('calculator'));
        this.fields.dtrMonth.addEventListener('change', () => this.refreshDtrPeriod());
        this.fields.dtrCutoff.addEventListener('change', () => this.refreshDtrPeriod());
        this.fields.dtrRows.addEventListener('input', (event) => this.handleDtrInput(event));
        this.fields.dtrRows.addEventListener('change', (event) => this.handleDtrInput(event));
        this.fields.dtrSelectAll.addEventListener('change', () => this.selectAllDtrRows());
        this.fields.dtrSetRegular.addEventListener('click', () => this.applyDtrSchedule('normal'));
        this.fields.dtrSetCompressed.addEventListener('click', () => this.applyDtrSchedule('compressed'));
        this.fields.dtrReset.addEventListener('click', () => this.resetDtr());
        this.root.querySelector('#wage-reset').addEventListener('click', () => this.reset());
        this.initializeDtr();
        this.calculate();
    }

    parseCsv(text) {
        const rows = [];
        let row = [];
        let value = '';
        let quoted = false;

        for (let index = 0; index < text.length; index += 1) {
            const character = text[index];
            if (character === '"') {
                if (quoted && text[index + 1] === '"') {
                    value += '"';
                    index += 1;
                } else {
                    quoted = !quoted;
                }
            } else if (character === ',' && !quoted) {
                row.push(value);
                value = '';
            } else if ((character === '\n' || character === '\r') && !quoted) {
                if (character === '\r' && text[index + 1] === '\n') index += 1;
                row.push(value);
                rows.push(row);
                row = [];
                value = '';
            } else {
                value += character;
            }
        }

        if (quoted) throw new Error('The CSV contains an unclosed quoted value.');
        if (value !== '' || row.length > 0) {
            row.push(value);
            rows.push(row);
        }
        return rows;
    }

    async uploadCsv(event) {
        const file = event.target.files?.[0];
        if (!file) return;

        const target = this.csvUploadTarget;
        this.fields.csvInput.value = '';
        if (!file.name.toLowerCase().endsWith('.csv')) {
            this.setCsvStatus('Please select a valid .csv file.', true, target);
            return;
        }

        this.fields.csvButton.disabled = true;
        this.fields.dtrCsvButton.disabled = true;
        this.fields.csvButton.setAttribute('aria-busy', 'true');
        this.fields.dtrCsvButton.setAttribute('aria-busy', 'true');
        this.setCsvStatus('Processing CSV...', false, target);

        try {
            const text = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(String(reader.result || ''));
                reader.onerror = () => reject(new Error('The CSV file could not be read.'));
                reader.readAsText(file);
            });
            const rows = this.parseCsv(text);
            if (!rows.some((row) => row.some((cell) => cell.trim() !== ''))) {
                throw new Error('The CSV file is empty.');
            }

            if (target === 'dtr') {
                const importedRows = this.populateDtrFromCsv(rows);
                this.calculateDtr();
                this.setCsvStatus(`${file.name}: ${importedRows} DTR row${importedRows === 1 ? '' : 's'} populated.`, false, target);
            } else {
                const attendance = this.extractCsvAttendance(rows);
                this.dtrAttendance = null;
                const appliedAbsentDays = Math.min(attendance.absentDays, this.getNumber(this.fields.workDays, 366));
                this.fields.absentDays.value = appliedAbsentDays;
                this.fields.lateMinutes.value = attendance.lateMinutes;
                this.calculate();
                this.setCsvStatus(`${file.name}: ${attendance.absentDays} absent, ${attendance.lateMinutes.toLocaleString('en-PH')} late minute${attendance.lateMinutes === 1 ? '' : 's'}.`, false, target);
            }
        } catch (error) {
            this.setCsvStatus(error instanceof Error ? error.message : 'The CSV could not be processed.', true, target);
        } finally {
            this.fields.csvButton.disabled = false;
            this.fields.dtrCsvButton.disabled = false;
            this.fields.csvButton.removeAttribute('aria-busy');
            this.fields.dtrCsvButton.removeAttribute('aria-busy');
        }
    }

    extractCsvAttendance(rows) {
        const source = this.getRawTimesheetSource(rows);
        if (source) return this.calculateRawTimesheet(rows, source.dataRows, source.columns);

        const preparedHeader = rows.findIndex((row) => {
            const headers = row.map((cell) => this.normalizeCsvHeader(cell));
            return headers.includes('HOURS') && headers.includes('MINUTES');
        });
        if (preparedHeader !== -1) return this.readPreparedAttendance(rows, preparedHeader);

        throw new Error('The CSV must contain day and AM/PM time columns from the timesheet.');
    }

    getRawTimesheetSource(rows) {
        const splitDtr = this.findSplitDtrSources(rows);
        if (splitDtr) {
            return {
                dataRows: rows.slice(splitDtr.rowIndex + 1),
                columns: splitDtr.sources[0],
                isCorrection: false
            };
        }

        const fixedRows = rows.slice(12, 43);
        const hasFixedTimesheet = fixedRows.some((row) => /^\d{1,2}$/.test(String(row[2] ?? '').trim()));
        if (hasFixedTimesheet) return { dataRows: fixedRows, columns: { day: 2, amIn: 3, amOut: 4, pmIn: 5, pmOut: 6 }, isCorrection: false };

        const rawHeader = this.findRawTimesheetHeader(rows);
        return rawHeader ? { dataRows: rows.slice(rawHeader.rowIndex + 1), columns: rawHeader.columns, isCorrection: false } : null;
    }

    findSplitDtrSources(rows) {
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
            const headers = rows[rowIndex].map((cell) => this.normalizeCsvHeader(cell));
            const sources = [];
            headers.forEach((header, dayIndex) => {
                if (header !== 'DAY' && header !== 'DATE') return;
                const timeHeaders = headers.slice(dayIndex + 1, dayIndex + 5);
                if (timeHeaders.join('|') !== 'ARRIVAL|DEPARTURE|ARRIVAL|DEPARTURE') return;
                sources.push({ day: dayIndex, amIn: dayIndex + 1, amOut: dayIndex + 2, pmIn: dayIndex + 3, pmOut: dayIndex + 4 });
            });
            if (sources.length) return { rowIndex, sources };
        }
        return null;
    }

    populateDtrFromCsv(rows) {
        const source = this.getRawTimesheetSource(rows);
        if (!source) throw new Error('The CSV must contain day and AM/PM time columns to populate the DTR form.');
        const { monthIndex, year } = this.getTimesheetMonthYear(rows, source.dataRows, source.columns.day);
        const records = source.dataRows.map((row) => this.createDtrRecord(row, source.columns, monthIndex, year)).filter(Boolean);
        if (!records.length) throw new Error('No valid dated DTR rows were found in the CSV.');

        this.fields.dtrMonth.value = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
        this.fields.dtrEmployee.value = this.getTimesheetEmployeeName(rows);
        const currentFirstCutoff = this.fields.dtrCutoff.value === 'first';
        const hasCurrentCutoffRows = records.some((record) => currentFirstCutoff ? record.day <= 15 : record.day >= 16);
        if (!hasCurrentCutoffRows) this.fields.dtrCutoff.value = records[0].day <= 15 ? 'first' : 'second';
        this.renderDtrDays(true);

        let importedRows = 0;
        this.fields.dtrRows.querySelectorAll('[data-dtr-row]').forEach((formRow) => {
            if (formRow.classList.contains('hidden')) return;
            const record = records.find((item) => item.day === Number.parseInt(formRow.dataset.day, 10));
            if (!record) return;
            Object.entries(record.times).forEach(([name, value]) => {
                const field = formRow.querySelector(`[data-dtr-time="${name}"]`);
                if (field) field.value = value;
            });
            formRow.querySelector('[data-dtr-status]').value = record.status;
            importedRows += 1;
        });
        this.updateDtrBulkState();
        return importedRows;
    }

    getTimesheetEmployeeName(rows) {
        for (const row of rows) {
            for (const cell of row) {
                const value = String(cell ?? '').trim().replace(/\s+/g, ' ');
                if (/^[A-Z][A-Z .'-]+,\s*[A-Z][A-Z .'-]+$/i.test(value)) return value;
            }
        }
        return '';
    }

    createDtrRecord(row, columns, monthIndex, year) {
        const dayText = String(row[columns.day] ?? '').trim();
        if (!dayText) return null;
        let date;
        if (/^\d{1,2}$/.test(dayText)) {
            const day = Number.parseInt(dayText, 10);
            date = new Date(year, monthIndex, day);
            if (date.getMonth() !== monthIndex || date.getDate() !== day) return null;
        } else {
            date = new Date(dayText);
            if (Number.isNaN(date.getTime())) return null;
        }

        const rawTimes = {
            amIn: String(row[columns.amIn] ?? '').trim(),
            amOut: String(row[columns.amOut] ?? '').trim(),
            pmIn: String(row[columns.pmIn] ?? '').trim(),
            pmOut: String(row[columns.pmOut] ?? '').trim()
        };
        const rowText = Object.values(rawTimes).join(' ').toUpperCase();
        const status = /HOLIDAY|MEMORANDUM|\bMEMO\b/.test(rowText)
            ? 'skip'
            : rowText.includes('ABSENT') || Object.values(rawTimes).every((value) => value === '') ? 'absent' : 'work';
        return {
            day: date.getDate(),
            status,
            times: {
                amIn: this.formatTimeForInput(rawTimes.amIn, false),
                amOut: this.formatTimeForInput(rawTimes.amOut, false),
                pmIn: this.formatTimeForInput(rawTimes.pmIn, true),
                pmOut: this.formatTimeForInput(rawTimes.pmOut, true)
            }
        };
    }

    formatTimeForInput(value, isPmColumn) {
        const minutes = this.timeToMinutes(value, isPmColumn);
        if (minutes === null) return '';
        return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
    }

    findRawTimesheetHeader(rows) {
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
            const headers = rows[rowIndex].map((cell) => this.normalizeCsvHeader(cell));
            const words = headers.map((header) => header.split(' '));
            const columns = {
                day: headers.findIndex((header) => header === 'DAY' || header === 'DATE'),
                amIn: words.findIndex((parts) => parts.includes('AM') && parts.includes('IN')),
                amOut: words.findIndex((parts) => parts.includes('AM') && parts.includes('OUT')),
                pmIn: words.findIndex((parts) => parts.includes('PM') && parts.includes('IN')),
                pmOut: words.findIndex((parts) => parts.includes('PM') && parts.includes('OUT'))
            };
            if (Object.values(columns).every((index) => index !== -1)) return { rowIndex, columns };
        }
        return null;
    }

    calculateRawTimesheet(allRows, dataRows, columns) {
        const schedule = this.getSchedule();
        const { monthIndex, year } = this.getTimesheetMonthYear(allRows, dataRows, columns.day);

        let absentDays = 0;
        let lateMinutes = 0;

        dataRows.forEach((row) => {
            const dayText = String(row[columns.day] ?? '').trim();
            if (!dayText) return;

            let date;
            if (/^\d{1,2}$/.test(dayText)) {
                const day = Number.parseInt(dayText, 10);
                date = new Date(year, monthIndex, day);
                if (date.getFullYear() !== year || date.getMonth() !== monthIndex || date.getDate() !== day) return;
            } else {
                date = new Date(dayText);
                if (Number.isNaN(date.getTime())) return;
            }

            const dayOfWeek = date.getDay();
            const isNonWorkingDay = schedule === 'compressed'
                ? dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6
                : dayOfWeek === 0 || dayOfWeek === 6;
            if (isNonWorkingDay) return;

            const times = {
                amIn: String(row[columns.amIn] ?? '').trim(),
                amOut: String(row[columns.amOut] ?? '').trim(),
                pmIn: String(row[columns.pmIn] ?? '').trim(),
                pmOut: String(row[columns.pmOut] ?? '').trim()
            };
            const rowText = Object.values(times).join(' ').toUpperCase();
            if (/HOLIDAY|MEMORANDUM|\bMEMO\b/.test(rowText)) return;

            if (rowText.includes('ABSENT') || Object.values(times).every((value) => value === '')) {
                absentDays += 1;
                return;
            }

            lateMinutes += this.calculateRowLateMinutes(times, schedule);
        });

        return { absentDays, lateMinutes };
    }

    getTimesheetMonthYear(rows, dataRows, dayColumn) {
        const monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        const fixedMonth = String(rows[6]?.[3] ?? '').trim().toUpperCase();
        const fixedYear = String(rows[6]?.[4] ?? '').match(/\b\d{4}\b/)?.[0];
        let monthIndex = monthNames.indexOf(fixedMonth);
        let year = fixedYear ? Number.parseInt(fixedYear, 10) : null;

        if (monthIndex === -1 || year === null) {
            const metadata = rows.slice(0, 12).flat().join(' ').toUpperCase();
            if (monthIndex === -1) monthIndex = monthNames.findIndex((month) => metadata.includes(month));
            const yearMatch = metadata.match(/\b(?:19|20)\d{2}\b/);
            if (year === null && yearMatch) year = Number.parseInt(yearMatch[0], 10);
        }

        if (monthIndex === -1 || year === null) {
            const datedCell = dataRows.map((row) => String(row[dayColumn] ?? '').trim()).find((value) => /[A-Z]{3,}|[-/]/i.test(value) && Number.isFinite(Date.parse(value)));
            if (datedCell) {
                const date = new Date(datedCell);
                monthIndex = date.getMonth();
                year = date.getFullYear();
            }
        }

        if (monthIndex === -1 || year === null) {
            throw new Error('The CSV month and year could not be identified.');
        }
        return { monthIndex, year };
    }

    timeToMinutes(value, isPmColumn) {
        if (!value) return null;
        const match = value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
        if (!match) return null;

        let hours = Number.parseInt(match[1], 10);
        const minutes = Number.parseInt(match[2], 10);
        const period = match[3]?.toUpperCase();
        if (hours > 23 || minutes > 59 || (period && hours > 12)) return null;
        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        if (!period && isPmColumn && hours >= 1 && hours < 12) hours += 12;
        return (hours * 60) + minutes;
    }

    readPreparedAttendance(rows, headerRowIndex) {
        const headers = rows[headerRowIndex].map((cell) => this.normalizeCsvHeader(cell));
        const hoursIndex = headers.indexOf('HOURS');
        const minutesIndex = headers.indexOf('MINUTES');
        let lateMinutes = 0;
        let absentDays = 0;

        rows.slice(headerRowIndex + 1).forEach((row, rowIndex) => {
            const rowText = row.map((cell) => String(cell ?? '').trim().toUpperCase());
            if (rowText.some((cell) => /HOLIDAY|MEMORANDUM|\bMEMO\b/.test(cell))) return;
            if (rowText.some((cell) => cell === 'ABSENT')) absentDays += 1;
            const hours = this.getCsvNumber(row[hoursIndex], 'HOURS', rowIndex + headerRowIndex + 2);
            const minutes = this.getCsvNumber(row[minutesIndex], 'MINUTES', rowIndex + headerRowIndex + 2);
            lateMinutes += (hours * 60) + minutes;
        });
        return { absentDays, lateMinutes };
    }

    normalizeCsvHeader(value) {
        return String(value ?? '').replace(/^\uFEFF/, '').trim().toUpperCase().replace(/[^A-Z0-9]+/g, ' ').trim();
    }

    getCsvNumber(value, column, rowNumber) {
        const normalized = String(value ?? '').trim();
        if (normalized === '' || normalized.toUpperCase() === 'ABSENT') return 0;
        const number = Number(normalized);
        if (!Number.isFinite(number) || number < 0) {
            throw new Error(`Invalid ${column} value on CSV row ${rowNumber}.`);
        }
        return number;
    }

    setCsvStatus(message, isError = false, target = 'calculator') {
        const output = target === 'dtr' ? this.outputs.dtrCsvStatus : this.outputs.csvStatus;
        output.textContent = message;
        output.classList.toggle('text-philippine-red', isError);
        output.classList.toggle('dark:text-red-400', isError);
        output.classList.toggle('text-slate-500', !isError);
        output.classList.toggle('dark:text-slate-400', !isError);
    }

    initializeDtr() {
        const today = new Date();
        this.fields.dtrMonth.value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
        this.renderDtrDays(true);
    }

    setView(view) {
        const showDtr = view === 'dtr';
        if (showDtr) {
            this.calculatorState = {
                period: this.fields.period.value,
                workDays: this.fields.workDays.value,
                absentDays: this.fields.absentDays.value,
                lateMinutes: this.fields.lateMinutes.value,
                schedule: this.getSchedule()
            };
        }

        this.fields.calculatorView.classList.toggle('hidden', showDtr);
        this.fields.dtrView.classList.toggle('hidden', !showDtr);
        this.fields.showDtr.classList.toggle('hidden', showDtr);
        this.fields.showDtr.classList.toggle('inline-flex', !showDtr);
        this.fields.showCalculator.classList.toggle('hidden', !showDtr);
        this.fields.showCalculator.classList.toggle('inline-flex', showDtr);

        if (showDtr) {
            this.calculateDtr();
        } else if (this.calculatorState) {
            this.fields.period.value = this.calculatorState.period;
            this.fields.workDays.value = this.calculatorState.workDays;
            this.fields.absentDays.value = this.calculatorState.absentDays;
            this.fields.lateMinutes.value = this.calculatorState.lateMinutes;
            const schedule = this.root.querySelector(`input[name="work-schedule"][value="${this.calculatorState.schedule}"]`);
            if (schedule) schedule.checked = true;
            this.dtrAttendance = null;
            this.calculate();
        }
    }

    refreshDtrPeriod() {
        this.renderDtrDays(true);
        this.calculateDtr();
    }

    getDtrPeriod() {
        const match = this.fields.dtrMonth.value.match(/^(\d{4})-(\d{2})$/);
        if (!match) return null;
        const year = Number.parseInt(match[1], 10);
        const monthIndex = Number.parseInt(match[2], 10) - 1;
        const lastDay = new Date(year, monthIndex + 1, 0).getDate();
        const firstCutoff = this.fields.dtrCutoff.value === 'first';
        return { year, monthIndex, startDay: firstCutoff ? 1 : 16, endDay: firstCutoff ? Math.min(15, lastDay) : lastDay };
    }

    renderDtrDays(clearValues = false) {
        const period = this.getDtrPeriod();
        if (!period) return;
        const defaultSchedule = this.getSchedule();

        this.fields.dtrRows.querySelectorAll('[data-dtr-row]').forEach((row, index) => {
            const day = period.startDay + index;
            const visible = day <= period.endDay;
            row.classList.toggle('hidden', !visible);
            row.dataset.day = visible ? String(day) : '';
            row.querySelector('[data-dtr-day]').textContent = visible ? day : '';

            if (clearValues) {
                row.querySelectorAll('[data-dtr-time]').forEach((field) => { field.value = ''; });
                row.querySelector('[data-dtr-status]').value = '';
                const defaultRadio = row.querySelector(`[data-dtr-schedule][value="${defaultSchedule}"]`);
                if (defaultRadio) defaultRadio.checked = true;
            }
            const selection = row.querySelector('[data-dtr-select]');
            if (selection) selection.checked = false;
            this.setDtrRowResult(row, null);
        });
        this.fields.dtrSelectAll.checked = false;
        this.fields.dtrSelectAll.indeterminate = false;
        this.updateDtrBulkState();
    }

    handleDtrInput(event) {
        const row = event.target.closest('[data-dtr-row]');
        if (!row) return;
        if (event.target.matches('[data-dtr-select]')) {
            this.updateDtrBulkState();
            return;
        }
        if (event.target.matches('[data-dtr-time]') && event.target.value) {
            const status = row.querySelector('[data-dtr-status]');
            if (!status.value) status.value = 'work';
        }
        this.calculateDtr();
    }

    selectAllDtrRows() {
        const checked = this.fields.dtrSelectAll.checked;
        this.getVisibleDtrRows().forEach((row) => {
            row.querySelector('[data-dtr-select]').checked = checked;
        });
        this.updateDtrBulkState();
    }

    applyDtrSchedule(schedule) {
        const selectedRows = this.getVisibleDtrRows().filter((row) => row.querySelector('[data-dtr-select]').checked);
        if (!selectedRows.length) {
            this.outputs.dtrActionStatus.textContent = 'Select at least one DTR row first.';
            return;
        }
        selectedRows.forEach((row) => {
            const radio = row.querySelector(`[data-dtr-schedule][value="${schedule}"]`);
            if (radio) radio.checked = true;
        });
        this.outputs.dtrActionStatus.textContent = `${selectedRows.length} row${selectedRows.length === 1 ? '' : 's'} set to ${schedule === 'compressed' ? 'Compressed' : 'Regular'} Work.`;
        this.calculateDtr();
    }

    getVisibleDtrRows() {
        return Array.from(this.fields.dtrRows.querySelectorAll('[data-dtr-row]')).filter((row) => !row.classList.contains('hidden'));
    }

    updateDtrBulkState() {
        const visibleRows = this.getVisibleDtrRows();
        const selectedRows = visibleRows.filter((row) => row.querySelector('[data-dtr-select]').checked);
        const hasSelection = selectedRows.length > 0;
        this.fields.dtrSetRegular.disabled = !hasSelection;
        this.fields.dtrSetCompressed.disabled = !hasSelection;
        this.fields.dtrSelectAll.checked = visibleRows.length > 0 && selectedRows.length === visibleRows.length;
        this.fields.dtrSelectAll.indeterminate = hasSelection && selectedRows.length < visibleRows.length;
        if (!hasSelection) this.outputs.dtrActionStatus.textContent = 'Select rows using the first column.';
    }

    calculateDtr() {
        const period = this.getDtrPeriod();
        if (!period) return;
        const summary = { normalDays: 0, compressedDays: 0, normalAbsences: 0, compressedAbsences: 0, lateMinutes: 0 };

        this.fields.dtrRows.querySelectorAll('[data-dtr-row]').forEach((row) => {
            if (row.classList.contains('hidden') || !row.dataset.day) return;
            const status = row.querySelector('[data-dtr-status]').value;
            const schedule = row.querySelector('[data-dtr-schedule]:checked')?.value || 'normal';
            const times = Object.fromEntries(Array.from(row.querySelectorAll('[data-dtr-time]')).map((field) => [field.dataset.dtrTime, field.value]));
            const hasTimes = Object.values(times).some(Boolean);
            if (!status && !hasTimes) {
                this.setDtrRowResult(row, null);
                return;
            }

            const date = new Date(period.year, period.monthIndex, Number.parseInt(row.dataset.day, 10));
            if (this.isNonWorkingDate(date, schedule)) {
                this.setDtrRowResult(row, null, 'REST');
                return;
            }
            if (status === 'skip') {
                this.setDtrRowResult(row, null, 'EXCL.');
                return;
            }

            summary[`${schedule}Days`] += 1;
            if (status === 'absent') {
                summary[`${schedule}Absences`] += 1;
                this.setDtrRowResult(row, null, 'ABSENT');
                return;
            }

            const rowLateMinutes = this.calculateRowLateMinutes(times, schedule);
            summary.lateMinutes += rowLateMinutes;
            this.setDtrRowResult(row, rowLateMinutes);
        });

        const totalDays = summary.normalDays + summary.compressedDays;
        const totalAbsences = summary.normalAbsences + summary.compressedAbsences;
        this.dtrAttendance = summary;
        this.fields.workDays.value = totalDays;
        this.fields.absentDays.value = totalAbsences;
        this.fields.lateMinutes.value = summary.lateMinutes;
        this.calculate();
    }

    calculateRowLateMinutes(times, schedule) {
        const limits = WageCalculator.SCHEDULES[schedule].limits;
        const amIn = this.timeToMinutes(times.amIn, false);
        const amOut = this.timeToMinutes(times.amOut, false);
        const pmIn = this.timeToMinutes(times.pmIn, true);
        const pmOut = this.timeToMinutes(times.pmOut, true);
        let lateMinutes = 0;

        if (amIn !== null && amIn > limits.amIn) lateMinutes += amIn - limits.amIn;
        if (amOut !== null && amOut < limits.amOut) lateMinutes += limits.amOut - amOut;
        if (pmIn !== null && pmIn > limits.pmIn) lateMinutes += pmIn - limits.pmIn;
        if (pmOut !== null) {
            if (pmOut < limits.pmOut) lateMinutes += limits.pmOut - pmOut;
            if (schedule === 'compressed' && pmOut > limits.pmOut) lateMinutes -= pmOut - limits.pmOut;
        }
        return Math.max(0, lateMinutes);
    }

    isNonWorkingDate(date, schedule) {
        return !WageCalculator.SCHEDULES[schedule].workDays.includes(date.getDay());
    }

    setDtrRowResult(row, lateMinutes, label = '') {
        const hoursOutput = row.querySelector('[data-dtr-hours]');
        const minutesOutput = row.querySelector('[data-dtr-minutes]');
        if (label) {
            hoursOutput.textContent = '—';
            minutesOutput.textContent = label;
            return;
        }
        if (lateMinutes === null) {
            hoursOutput.textContent = '—';
            minutesOutput.textContent = '—';
            return;
        }
        hoursOutput.textContent = lateMinutes >= 60 ? Math.floor(lateMinutes / 60) : '—';
        minutesOutput.textContent = lateMinutes > 0 ? lateMinutes % 60 : '0';
    }

    resetDtr() {
        this.fields.dtrEmployee.value = '';
        this.renderDtrDays(true);
        this.calculateDtr();
    }

    getSchedule() {
        return this.root.querySelector('input[name="work-schedule"]:checked')?.value || 'normal';
    }

    applyWorkDayPreset() {
        const period = this.fields.period.value;
        this.dtrAttendance = null;
        this.fields.workDays.value = WageCalculator.PERIOD_WORK_DAYS[period][this.getSchedule()];
        this.fields.absentDays.value = Math.min(this.getNumber(this.fields.absentDays), Number(this.fields.workDays.value));
        this.calculate();
    }

    getNumber(field, maximum = Number.POSITIVE_INFINITY) {
        const parsed = Number.parseFloat(field.value);
        return Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), maximum) : 0;
    }

    calculatePayroll(summary) {
        const normalDays = Math.max(summary.normalDays || 0, 0);
        const compressedDays = Math.max(summary.compressedDays || 0, 0);
        const normalAbsences = Math.min(Math.max(summary.normalAbsences || 0, 0), normalDays);
        const compressedAbsences = Math.min(Math.max(summary.compressedAbsences || 0, 0), compressedDays);
        const lateMinutes = Math.max(summary.lateMinutes || 0, 0);
        const workDays = normalDays + compressedDays;
        const absentDays = normalAbsences + compressedAbsences;
        const paidDays = Math.max(workDays - absentDays, 0);
        const grossPay = (normalDays * WageCalculator.SCHEDULES.normal.dailyRate)
            + (compressedDays * WageCalculator.SCHEDULES.compressed.dailyRate);
        const absenceDeduction = (normalAbsences * WageCalculator.SCHEDULES.normal.dailyRate)
            + (compressedAbsences * WageCalculator.SCHEDULES.compressed.dailyRate);
        const payableGross = grossPay - absenceDeduction;
        const lateDeduction = Math.min(lateMinutes * WageCalculator.MINUTE_RATE, Math.max(payableGross, 0));
        const totalDeductions = Math.min(absenceDeduction + lateDeduction, grossPay);
        const netSalary = Math.max(grossPay - totalDeductions, 0);

        return {
            workDays, absentDays, lateMinutes, paidDays, grossPay,
            absenceDeduction, lateDeduction, totalDeductions, netSalary
        };
    }

    calculate() {
        const schedule = this.getSchedule();
        const isHybrid = this.dtrAttendance !== null;
        let payrollSummary;

        if (isHybrid) {
            payrollSummary = this.dtrAttendance;
        } else {
            const workDays = this.getNumber(this.fields.workDays, 366);
            const absentDays = this.getNumber(this.fields.absentDays, workDays);
            payrollSummary = {
                normalDays: schedule === 'normal' ? workDays : 0,
                compressedDays: schedule === 'compressed' ? workDays : 0,
                normalAbsences: schedule === 'normal' ? absentDays : 0,
                compressedAbsences: schedule === 'compressed' ? absentDays : 0,
                lateMinutes: this.getNumber(this.fields.lateMinutes, 100000)
            };
        }

        const {
            workDays, absentDays, lateMinutes, paidDays, grossPay,
            absenceDeduction, lateDeduction, totalDeductions, netSalary
        } = this.calculatePayroll(payrollSummary);

        this.fields.absentDays.max = workDays;
        if (Number(this.fields.absentDays.value) > workDays) this.fields.absentDays.value = workDays;
        this.outputs.salary.textContent = this.currency.format(netSalary);
        this.outputs.periodLabel.textContent = isHybrid ? 'Hybrid DTR' : this.fields.period.options[this.fields.period.selectedIndex].text;
        this.outputs.gross.textContent = this.currency.format(grossPay);
        this.outputs.absence.textContent = `- ${this.currency.format(absenceDeduction)}`;
        this.outputs.late.textContent = `- ${this.currency.format(lateDeduction)}`;
        this.outputs.deductions.textContent = `- ${this.currency.format(totalDeductions)}`;
        this.outputs.paidDays.textContent = `${paidDays.toLocaleString('en-PH')} day${paidDays === 1 ? '' : 's'}`;

        if (isHybrid) {
            const dtr = this.dtrAttendance;
            this.outputs.schedule.textContent = 'Hybrid DTR';
            this.outputs.scheduleHours.textContent = `${dtr.normalDays} regular • ${dtr.compressedDays} compressed`;
            this.outputs.dailyRate.textContent = `${this.currency.format(WageCalculator.SCHEDULES.normal.dailyRate)} / ${this.currency.format(WageCalculator.SCHEDULES.compressed.dailyRate)}`;
            this.outputs.headerDailyRate.textContent = 'Hybrid Daily Rates';
            this.outputs.dtrDays.textContent = workDays.toLocaleString('en-PH');
            this.outputs.dtrAbsent.textContent = absentDays.toLocaleString('en-PH');
            this.outputs.dtrLate.textContent = `${lateMinutes.toLocaleString('en-PH')}m`;
            this.outputs.dtrNet.textContent = this.currency.format(netSalary);
            this.outputs.dtrEstimatedNet.textContent = this.currency.format(netSalary);
            this.outputs.dtrEstimatedGross.textContent = this.currency.format(grossPay);
            this.outputs.dtrEstimatedAbsence.textContent = `- ${this.currency.format(absenceDeduction)}`;
            this.outputs.dtrEstimatedLate.textContent = `- ${this.currency.format(lateDeduction)}`;
            this.outputs.dtrEstimatedDeductions.textContent = `- ${this.currency.format(totalDeductions)}`;
            this.outputs.dtrEstimatedPaidDays.textContent = `${paidDays.toLocaleString('en-PH')} day${paidDays === 1 ? '' : 's'}`;
            this.outputs.dtrEstimatedSchedule.textContent = `${dtr.normalDays} Regular`;
            this.outputs.dtrEstimatedScheduleDetail.textContent = `${dtr.compressedDays} Compressed`;
        } else {
            const dailyRate = WageCalculator.SCHEDULES[schedule].dailyRate;
            const scheduleRule = WageCalculator.SCHEDULES[schedule];
            this.outputs.schedule.textContent = scheduleRule.label;
            this.outputs.scheduleHours.textContent = scheduleRule.hoursLabel;
            this.outputs.dailyRate.textContent = this.currency.format(dailyRate);
            this.outputs.headerDailyRate.textContent = `${this.currency.format(dailyRate)} Daily Rate`;
        }
    }

    reset() {
        this.dtrAttendance = null;
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