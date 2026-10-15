# 🚀 HSE 2026 Platform - Complete Setup Guide

## الدليل الكامل لإعداد منصة HSE 2026

---

## ✅ Step 1: System Requirements

### Windows Requirements
- Windows 10 or 11
- Administrator access (for npm installation)
- At least 500MB free disk space

### Software Required
1. **Node.js** (version 16 or higher)
   - Download: https://nodejs.org/
   - Choose LTS version
   - Includes npm automatically

2. **Text Editor/IDE** (optional)
   - VS Code: https://code.visualstudio.com/
   - Or any text editor

## 🔧 Step 2: Installation

### 2.1 Install Node.js

1. Download Node.js LTS from https://nodejs.org/
2. Run the installer
3. Follow the installation wizard
4. Accept default settings
5. Restart your computer

### 2.2 Verify Installation

Open **Command Prompt** or **PowerShell** and run:

```bash
node --version
npm --version
```

You should see version numbers like:
- v18.17.0
- 9.6.7

### 2.3 Install Project Dependencies

1. Open **PowerShell** as Administrator
2. Navigate to project folder:
   ```bash
   cd C:\Users\Hisham\Downloads\HSE_2026_Duqm_Platform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

This will download all required packages (~500MB).

## ▶️ Step 3: Run the Application

### Start Development Server

In PowerShell, from project folder:

```bash
npm start
```

Or:

```bash
npm run dev
```

You should see:
```
  VITE v4.4.0  ready in 345 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Open in Browser

- Automatically opens at http://localhost:3000
- If not, manually open browser and go to http://localhost:3000

## 📱 Step 4: Navigate the Platform

### Dashboard Tab 📊
- View overall HSE 2026 progress
- See completion percentage
- Review recent items

### HSE Items Tab 📋
- Browse all action items
- Filter by status or theme
- Search by ID or action name
- Click items for details

### Evidence Tab 📁
- See all 42+ evidence folders
- Expand to view linked items
- Reference folder paths

### Reports Tab 📈 (Manager/Viewer only)
- Generate summary reports
- View detailed item list
- Export to CSV

### Team Tab 👥 (Manager only)
- View all team members
- See roles and permissions
- Check assigned items

## 🔑 Login Information

Default user logged in as:
- **Name**: Hisham
- **Role**: Manager
- **Email**: ibn.ibra2@gmail.com

To view as different user:
1. Modify `currentUser` in App.jsx (development only)
2. Change to different team member for testing

## 📊 Data Files Overview

### hse_items.json
Contains all 10+ HSE 2026 action items:
- IDs like LA1.1, LA2.1, RA1.1, etc.
- Status (Completed, InProgress, Planned)
- Progress percentages
- Linked evidence folders

### team_config.json
Defines 5 team members:
- Hisham (Manager)
- HSE Advisor (Updater)
- Area Manager (Updater)
- General Manager (Viewer)
- CEO (Viewer)

### evidence_mapping.json
Maps 42 evidence categories:
- HSE MS Plan, Induction, Gate Meetings, etc.
- Links to HSE items
- File counts and update dates

## 🛠️ Common Tasks

### Update HSE Item Progress
1. Go to HSE Items tab
2. Click on item card
3. Click "Edit" button (if Manager)
4. Update progress percentage
5. Click "Done Editing"

### Add Evidence to Item
1. Open item detail
2. Scroll to "Linked Evidence"
3. See current evidence folders
4. (Backend: Link new folders)

### Generate Report
1. Go to Reports tab
2. Choose Summary or Detailed
3. Click "Export to CSV"
4. File downloads as HSE_2026_Report.csv

### Change Team Member View
1. Edit `src/App.jsx` (development)
2. Change line: `const [currentUser, setCurrentUser] = useState(teamConfig.team[0]);`
3. Replace `[0]` with `[1]`, `[2]`, etc.
4. Save and view updates

## 🌐 Next: Cloud Deployment

### Option 1: Azure (Microsoft Cloud)
1. Create Azure account
2. Create App Service
3. Deploy from GitHub
4. Add authentication (Active Directory)

### Option 2: Vercel (Recommended for React)
1. Create Vercel account
2. Connect GitHub repository
3. Auto-deploys on push
4. Free tier available

### Option 3: GitHub Pages
1. Create GitHub repository
2. Push project
3. Enable GitHub Pages
4. Static site hosted free

### Option 4: SharePoint
1. Build as SharePoint Web Part
2. Deploy to company SharePoint
3. Access from Teams
4. Integrated with OneDrive

## 🔐 Security Checklist (Before Cloud)

- [ ] Add authentication (OAuth, Azure AD)
- [ ] Move data to secure database
- [ ] Add HTTPS/SSL certificate
- [ ] Implement role-based access
- [ ] Add audit logging
- [ ] Encrypt sensitive data
- [ ] Set up backup/recovery

## 📈 Scaling the Platform

### Phase 1 (Current) ✅
- Local React app
- JSON data files
- Team collaboration features
- Evidence linking

### Phase 2 (Cloud)
- Azure/AWS backend
- Database (SQL Server/PostgreSQL)
- Cloud authentication
- Real-time updates

### Phase 3 (Integration)
- Teams bot integration
- SharePoint sync
- OneDrive integration
- Mobile app

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution**: Node.js not installed properly
- Reinstall Node.js from https://nodejs.org/
- Restart computer
- Verify with `node --version`

### Issue: Port 3000 already in use
**Solution**: Port is occupied by another app
- Close other applications using port 3000
- Or change port in vite.config.js (port: 3001)

### Issue: Blank white page in browser
**Solution**: Try these steps:
1. Press F12 to open Developer Tools
2. Check Console tab for errors
3. Hard refresh: Ctrl+Shift+Delete
4. Stop npm (Ctrl+C) and restart: npm start

### Issue: Changes not showing
**Solution**: 
1. Save file (Ctrl+S)
2. Check browser console (F12)
3. Hard refresh browser (Ctrl+F5)

## 📚 Additional Resources

### React Learning
- Official Docs: https://react.dev/
- Beginner Tutorial: https://react.dev/learn

### Vite Setup
- Official Docs: https://vitejs.dev/
- React Plugin: https://github.com/vitejs/vite-plugin-react

### Node.js/npm
- Official Docs: https://nodejs.org/en/docs/
- npm Scripts: https://docs.npmjs.com/cli/v8/commands/npm-run

## 💬 Support

**For technical issues**:
- Email: ibn.ibra2@gmail.com
- Check console errors (F12 → Console tab)
- Review README.md for features overview

**For feature requests**:
- Update data files directly
- Modify components in src/components/
- Rebuild and redeploy

---

## ✨ You're Ready!

The HSE 2026 Duqm Platform is now installed and ready to use.

**Next steps**:
1. ✅ Start server: `npm start`
2. ✅ Open browser: http://localhost:3000
3. ✅ Explore features
4. ✅ Plan cloud deployment
5. ✅ Share with team

**Current Status**: 🟢 Ready for Production

---

**Version**: 1.0.0  
**Last Updated**: 2026-10-15  
**Support**: ibn.ibra2@gmail.com
