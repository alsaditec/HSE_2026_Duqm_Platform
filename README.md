# 🏭 HSE 2026 Duqm Tracking Platform

A comprehensive cloud-based platform for tracking and managing HSE (Health, Safety & Environment) initiatives for OICC Duqm site under PDO Contract C3100000369.

## 📋 Features

### Dashboard
- **Real-time Statistics**: View overall completion percentage, progress metrics
- **Progress Tracking**: Visual progress bars for each HSE item
- **Quick Overview**: See status distribution at a glance

### HSE Items Management
- **Complete Registry**: All HSE 2026 action items merged from PDF and Excel
- **Source Tracking**: Each item marked with its source document
- **Advanced Filtering**: Search by ID, action, theme, or status
- **Progress Monitoring**: Track completion status with color coding:
  - 🟢 Light Green: Completed
  - 🟡 Yellow: In Progress
  - 🔵 Light Blue: Planned

### Evidence Management
- **Folder Linking**: Connect HSE items to physical evidence folders
- **Document Tracking**: Reference PDFs, reports, attendance sheets, etc.
- **Evidence Structure**: Organized by category:
  - HSE MS Plan 2026
  - HSE Induction
  - Gate Meeting Reports
  - HSE Campaigns
  - Inspections & Audits
  - Training Records
  - Incident Management
  - And 35+ more categories

### Team Collaboration
- **Role-Based Access**:
  - 👨‍💼 **Manager**: Full access + user management
  - 👤 **Updater**: Can edit items and update progress
  - 👁️ **Viewer**: Read-only access
- **Team Dashboard**: View assigned items per member
- **Responsibility Tracking**: Know who's accountable for each action

### Reports & Analytics
- **Summary Reports**: Key metrics and completion statistics
- **Detailed Reports**: Item-by-item status breakdown
- **Export Functions**: Export to CSV for further analysis

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (download from https://nodejs.org)
- npm (comes with Node.js)

### Installation

1. **Navigate to project directory**:
   ```bash
   cd C:\Users\Hisham\Downloads\HSE_2026_Duqm_Platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   - Automatically opens at http://localhost:3000
   - If not, navigate to http://localhost:3000 manually

## 📁 Project Structure

```
HSE_2026_Duqm_Platform/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── ItemDetail.jsx      # Item detail modal
│   │   ├── EvidenceViewer.jsx  # Evidence management
│   │   ├── Reports.jsx         # Reports & analytics
│   │   └── TeamManagement.jsx  # Team & roles
│   ├── data/
│   │   ├── hse_items.json      # HSE action items
│   │   ├── team_config.json    # Team members & roles
│   │   └── evidence_mapping.json # Evidence folder links
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Styling
│   └── index.jsx               # React entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 📊 Data Structure

### HSE Items (hse_items.json)
Each item includes:
- **ID**: Unique identifier (e.g., LA1.1)
- **Theme**: LA (Leadership), RA (Risk Management)
- **Action**: Description of the action
- **Accountable**: Person responsible
- **Responsible**: Person executing
- **Status**: Completed, InProgress, Planned
- **Progress**: 0-100%
- **Due Date**: Target completion date
- **Evidence Links**: Connected evidence folders

### Team Configuration (team_config.json)
Includes:
- Team members with roles and permissions
- Role definitions (Manager, Updater, Viewer)
- Assigned items per team member

### Evidence Mapping (evidence_mapping.json)
Maps:
- Evidence folder paths
- Linked HSE items
- File counts per folder
- Last update dates

## 🎯 How to Use

### 1. View Dashboard
- See overall progress percentage
- Check completion by theme
- Review recent items

### 2. Manage HSE Items
- Use Dashboard tab to view all items
- Filter by status, theme, or search
- Click item card to view details
- See linked evidence for each item

### 3. Track Evidence
- Go to Evidence tab
- Browse all evidence folders
- See which items each folder supports
- Expand folders to view linked items

### 4. View Reports
- Access Reports tab (Manager/Viewer roles only)
- Generate summary or detailed reports
- Export to CSV for further analysis

### 5. Manage Team (Manager only)
- View all team members
- See roles and permissions
- Check assigned items per person
- Monitor team status

## 👥 User Roles

### Manager 👨‍💼
**Hisham (HSE Manager)**
- Full access to all features
- Can edit HSE items
- Can manage team members
- Can view all reports
- Can link evidence

### Updater 👤
**HSE Advisor, Area Manager**
- Can view all items
- Can update progress
- Can link evidence
- Can export data
- Cannot manage users

### Viewer 👁️
**General Manager, CEO**
- Can view all items
- Can generate reports
- Can export data
- Read-only access

## 📈 HSE 2026 Themes

### LA - Safety Leadership & Commitment
- LA1: Leadership visible actions
- LA2: Accountability for behaviors
- LA3: Site visits & engagement
- LA4: Frontline supervision

### RA - Risk Management
- RA1: Line of Fire hazards
- RA2: Risk assessment (preventive/proactive)
- RA3: Work safe processes (Mustaad)
- RA4: Digital risk dashboard

## 🔗 Evidence Folder Categories

1. HSE MS Plan 2026
2. HSE Induction
3. Gate Meeting Reports
4. HSE Campaigns
5. Super Wednesday Meetings
6. Mock Drill
7. Fire Extinguisher Inspection
8. Monthly HSE Returns
9. Site Inspection Reports
10. First Aid Box Inspection
... and 30+ more

**Location**: C:\Users\Hisham\OneDrive - OICC\HSE GRE\HSE Duqm\HSE 2026 - Duqm

## 📋 Current Metrics (Q2 2026)

- **Total Actions**: 10+
- **Completed**: 3 (30%)
- **In Progress**: 5 (50%)
- **Planned**: 2 (20%)
- **Overall Progress**: 65%

## 🛠️ Development

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder, ready for cloud deployment.

### Available Scripts
- `npm start` - Start development server
- `npm run dev` - Start development server (alternative)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment Options

This platform can be deployed to:
- **Microsoft Teams** - As a tab or bot
- **SharePoint** - As a web part
- **Azure App Service** - Serverless deployment
- **AWS S3 + CloudFront** - Static hosting
- **GitHub Pages** - Free static hosting
- **Vercel** - Optimal for React apps

### Cloud Migration
To migrate to cloud storage (Azure, OneDrive sync, etc.):
1. Replace JSON files with API calls to your cloud backend
2. Update `src/data/` imports to fetch from API
3. Add authentication (OAuth, Azure AD)
4. Set up database for persistent storage

## 📝 Notes

- **Color Coding**: Light green (completed), Yellow (in progress), Light blue (planned)
- **Evidence Path**: All evidence stored in OneDrive Duqm folder
- **Offline Mode**: Data loaded from JSON - works without internet
- **Export**: CSV export available for external analysis

## 🔒 Security

- Role-based access control
- Read-only data for Viewers
- Editable data for Managers/Updaters
- No sensitive data stored in frontend
- Consider adding authentication before cloud deployment

## 📞 Support

For questions or updates:
- **HSE Manager**: Hisham (ibn.ibra2@gmail.com)
- **Documentation**: See README sections above

## 📄 Contract Reference

- **Project**: Provision of Tubing Internal Protection from Corrosion
- **Contractor**: OICC / OOSC
- **Client**: Petroleum Development Oman LLC
- **Contract No**: C3100000369
- **Site**: OICC Duqm
- **Year**: 2026

---

**Last Updated**: 2026-10-15
**Version**: 1.0.0
**Status**: Ready for Use ✅
