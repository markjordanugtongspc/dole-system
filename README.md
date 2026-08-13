# 🏢 DOLE-GIP System

An automated management portal and bulk import platform for the **Department of Labor and Employment (DOLE) Government Internship Program (GIP)**. Built with modern web technologies, Supabase PostgreSQL, PHP, TailwindCSS v4, and Flowbite UI.

---

## 📌 Quick Navigation

- [📖 For End Users](#-for-end-users)
  - [Overview](#overview)
  - [Managing Beneficiaries](#managing-beneficiaries)
  - [CSV Bulk Import Tool](#csv-bulk-import-tool)
- [💻 For Contributor Developers](#-for-contributor-developers)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Environment Configuration](#environment-configuration)
  - [Development Commands](#development-commands)
- [🛠️ Database Maintenance & CLI Tools](#-database-maintenance--cli-tools)
  - [Listing Active Beneficiaries](#1-listing-active-beneficiaries)
  - [Automated Duplicate Cleanup](#2-automated-duplicate-cleanup)
  - [Manual Cleanup, Renaming & Sequence Reset](#3-manual-cleanup-renaming--sequence-reset)

---

<a id="-for-end-users"></a>
## 📖 For End Users

### Overview
The **DOLE-GIP System** streamlines the management of interns and beneficiaries, tracking contract periods, assigned offices, contact information, and generated **ROX GIP IDs** (formatted as `ROX-RD-ESIG-YYYY-NNNN`).

### Managing Beneficiaries
- **View Records**: Browse active beneficiaries, search by name or office, and filter by status.
- **Add Beneficiary**: Use the system modal to add single beneficiaries with automatic age calculation and format validation.
- **Duplicate Protection**: System automatically verifies beneficiary full names to prevent duplicate entries.

### CSV Bulk Import Tool
The CSV Bulk Import Tool enables importing bulk beneficiary lists directly into Supabase with automatic field mapping and normalization.

#### Required CSV Header Layout (11 Columns):
```text
A1: NO.
B1: NAME OF ASSURED
C1: ASSIGNMENT / OFFICE
D1: DATE OF BIRTH
E1: AGE
F1: ADDRESS
G1: DESIGNATED BENEFICIARY
H1: RELATIONSHIP TO ASSURED
I1: PERIOD OF EMPLOYMENT
J1: CONTACT NUMBER
K1: REMARKS
```

#### Automatic Data Transformations:
- **Name Format**: Converts `LASTNAME, FIRSTNAME MI` into **`FIRSTNAME MI. LASTNAME`** (e.g. `ALEGA, ANGELYN A` $\rightarrow$ `ANGELYN A. ALEGA`).
- **Age Calculation**: Automatically calculated from `DATE OF BIRTH`.
- **Employment Period**: Automatically split into start and end dates (e.g. `JUNE 16, 2026 - DECEMBER 15, 2026`).
- **Duplicate Skipping**: Pre-scans and skips duplicate beneficiaries before insertion.

---

<a id="-for-developers"></a>
## 💻 For Contributor Developers

### Prerequisites
- **PHP**: PHP 8.2+ with PDO and `pdo_pgsql` / `pdo_mysql` extensions
- **Node.js**: Node.js v18+ and npm
- **Database**: Supabase PostgreSQL database instance

### Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/markjordanugtongspc/dole-system.git
   cd dole-system
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` or configure `config/.env`:
   ```bash
   cp config/.env.example config/.env
   ```

### Environment Configuration

Key environment parameters in `config/.env`:

```ini
# Environment Profile
APP_ENV=development
ENV_KEY=production

# Database Connection (Supabase PostgreSQL)
DB_CONNECTION=pgsql
USE_SUPABASE=true
DB_HOST=aws-1-ap-southeast-1.pooler.supabase.com
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres.llnddycvbcetztzwbdpx
DB_PASSWORD=your_password
DATABASE_URL=postgresql://postgres.llnddycvbcetztzwbdpx:your_password@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=require
```

### Development Commands

- **Run Frontend Dev Server** (Vite + TailwindCSS v4):
  ```bash
  npm run dev
  ```

- **Build Production Assets**:
  ```bash
  npm run build
  ```

- **Run Local PHP Backend Server**:
  ```bash
  php -S localhost:8000
  ```

---

<a id="-database-maintenance--cli-tools"></a>
## 🛠️ Database Maintenance & CLI Tools

The system provides three command-line maintenance tools in the project root for database cleanup, audit, and sequence management.

### 1. Listing Active Beneficiaries
Displays all non-archived beneficiaries sorted **alphabetically A to Z by Full Name** along with their Database ID, ROX GIP ID, and Creation Date.

```bash
php list_beneficiaries.php
```

#### Output Preview:
```text
ID     | ROX GIP ID               | FULL NAME                                     | CREATED AT
---------------------------------------------------------------------------------------------------------
10     | ROX-RD-ESIG-2026-0010    | MAYA NIÑA D. CORDERO                         | 2026-05-06 03:42:15
45     | ROX-RD-ESIG-2026-0044    | MARK JORDAN C. UGTONG                         | 2026-05-06 03:42:15
```

---

### 2. Automated Duplicate Cleanup
Scans the database for duplicate names (ignoring dots, extra spaces, and case), preserves the oldest record, removes newer duplicate entries, re-sequences ROX IDs (`ROX-RD-ESIG-YYYY-NNNN`), and resets primary key auto-increment sequences.

```bash
php clean_duplicates.php
```

---

### 3. Manual Cleanup, Renaming & Sequence Reset
Allows developer control to manually specify record IDs to preserve, delete, or rename, then automatically re-sequences remaining ROX IDs sequentially and resets PostgreSQL sequence counters.

#### Usage Syntax:
```bash
php manual_clean_duplicates.php --preserve=32,26,24 --delete=90,84,82 --rename="35:JALILAH O. OMAR;36:LOVELY GRACE L. OYOG"
```

#### Arguments:
- `--preserve=ID1,ID2`: Database IDs of records to keep.
- `--delete=ID3,ID4`: Database IDs of duplicate records to remove.
- `--rename="ID:NEW_NAME;ID2:NEW_NAME2"`: Renames specific records before re-sequencing.

---

## 📜 License
Internal project for the **Department of Labor and Employment (DOLE)**.
