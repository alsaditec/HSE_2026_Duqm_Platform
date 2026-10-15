# ⚡ HSE 2026 Platform - Quick Start (5 Minutes)

## Start Here! 🚀

---

## 1️⃣ Install Dependencies (2 minutes)

Open **PowerShell** and run:

```bash
cd C:\Users\Hisham\Downloads\HSE_2026_Duqm_Platform
npm install
```

Wait for "added X packages" message.

---

## 2️⃣ Start the Server (1 minute)

```bash
npm start
```

Browser opens automatically at: **http://localhost:3000**

---

## 3️⃣ Explore the Platform (2 minutes)

### 📊 Dashboard Tab
- See progress percentage: **~65%**
- View 10+ HSE action items
- Check recent items status

### 📋 HSE Items Tab
- **Search**: Type "Mustaad" or "LA1"
- **Filter**: Status = "Completed"
- **Click**: Any item to see full details

### 📁 Evidence Tab
- Browse 42 evidence folders
- Click folder to expand
- See linked HSE items

### 📈 Reports Tab
- Generate summary reports
- Export to CSV
- Share with team

### 👥 Team Tab (Manager only)
- View 5 team members
- See roles: Manager, Updater, Viewer
- Check assigned items

---

## 🎯 Key Features

✅ **Dashboard**: Real-time HSE progress  
✅ **10+ Items**: All HSE 2026 actions tracked  
✅ **42 Evidence Folders**: Connected to items  
✅ **5 Team Members**: With different roles  
✅ **Color Coding**: Green (done), Yellow (in progress)  
✅ **Export**: CSV reports for analysis  

---

## 🔑 Default Login

Already logged in as:
- **Name**: Hisham
- **Role**: Manager (**full access**)
- **Email**: ibn.ibra2@gmail.com

---

## 📋 What's Inside

### Data Files (JSON)
```
hse_items.json         ← 10+ HSE action items
team_config.json       ← 5 team members + roles
evidence_mapping.json  ← 42 evidence folders
```

### React Components
```
Dashboard.jsx          ← Main dashboard
ItemDetail.jsx         ← Item detail modal
EvidenceViewer.jsx     ← Evidence management
Reports.jsx            ← Reports & export
TeamManagement.jsx     ← Team & roles
```

### Supporting Files
```
App.jsx                ← Main app
App.css                ← All styling
vite.config.js         ← Build config
package.json           ← Dependencies
```

---

## 💡 Common Tasks

### View Specific Item
1. Go to **HSE Items** tab
2. Type item ID in search (e.g., "LA1.1")
3. Click item card
4. See full details + linked evidence

### Find Evidence
1. Go to **Evidence** tab
2. Click folder name to expand
3. See which items use this evidence
4. Note folder location

### Generate Report
1. Go to **Reports** tab
2. Click "Summary" or "Detailed"
3. Click "Export to CSV"
4. File downloads (HSE_2026_Report.csv)

### Change User Role
Development only:
1. Edit `src/App.jsx`
2. Find: `setCurrentUser(teamConfig.team[0])`
3. Change `[0]` → `[1]` (different user)
4. Save, auto-refreshes

---

## 🎨 Understanding Colors

### Item Status
- 🟢 **Green**: Completed (100%)
- 🟡 **Yellow**: In Progress (50-99%)
- 🔵 **Blue**: Planned (0-49%)

### User Roles
- 🔴 **Red**: Manager (Hisham)
- 🟠 **Orange**: Updater (HSE Advisor, Area Manager)
- 🟢 **Green**: Viewer (GM, CEO)

---

## 📊 Current Status

| Metric | Value |
|--------|-------|
| Total Items | 10+ |
| Completed | 30% |
| In Progress | 50% |
| Planned | 20% |
| Team Members | 5 |
| Evidence Folders | 42 |

---

## 🛑 Stop the Server

Press: `Ctrl + C` in PowerShell

---

## 🐛 Troubleshooting

**Issue**: Blank white page
- Press F12 → Check Console
- Hard refresh: Ctrl+Shift+Delete

**Issue**: npm command not found
- Reinstall Node.js: https://nodejs.org/
- Restart computer

**Issue**: Port 3000 already in use
- Close other apps using port 3000
- Or change vite.config.js line: `port: 3001`

---

## 📚 Full Documentation

- **README.md** - Complete feature overview
- **SETUP_GUIDE.md** - Detailed installation
- **FEATURES_GUIDE.md** - All features explained
- **QUICK_START.md** - This file (5-min overview)

---

## 🌐 Next Steps

### Cloud Deployment
1. Add authentication (OAuth)
2. Connect to database
3. Deploy to Azure/Vercel
4. Share team link

### Team Access
1. Email link to team
2. Set up roles
3. Start tracking HSE
4. Share reports weekly

### Customization
1. Edit hse_items.json to add items
2. Update team_config.json with real users
3. Modify colors in App.css
4. Add new features

---

## 📞 Support

**Questions?**  
Email: ibn.ibra2@gmail.com

**Need Help?**  
1. Check SETUP_GUIDE.md
2. Check FEATURES_GUIDE.md
3. Review README.md

---

## ✅ You're Ready!

1. ✅ npm install (installed dependencies)
2. ✅ npm start (running on localhost:3000)
3. ✅ Exploring features
4. ✅ Ready to use!

**Status**: 🟢 Ready for Production

---

**Version**: 1.0.0  
**Last Updated**: 2026-10-15  
**Platform**: React + Vite
