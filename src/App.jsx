import React, { useState, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import ItemDetail from './components/ItemDetail';
import TeamManagement from './components/TeamManagement';
import EvidenceViewer from './components/EvidenceViewer';
import Reports from './components/Reports';
import hseItems from './data/hse_items.json';
import teamConfig from './data/team_config.json';
import evidenceMapping from './data/evidence_mapping.json';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(teamConfig.team[0]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterTheme, setFilterTheme] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return hseItems.items.filter(item => {
      const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
      const matchesTheme = filterTheme === 'All' || item.theme.includes(filterTheme);
      const matchesSearch = searchTerm === '' ||
        item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.includes(searchTerm);
      return matchesStatus && matchesTheme && matchesSearch;
    });
  }, [filterStatus, filterTheme, searchTerm]);

  const canEdit = currentUser.permissions.includes('edit_items');
  const canManageUsers = currentUser.permissions.includes('manage_users');
  const canGenerateReports = currentUser.permissions.includes('generate_reports');

  const stats = {
    total: hseItems.items.length,
    completed: hseItems.items.filter(i => i.status === 'Completed').length,
    inProgress: hseItems.items.filter(i => i.status === 'InProgress').length,
    planned: hseItems.items.filter(i => i.status === 'Planned').length,
    completionPercentage: Math.round(
      (hseItems.items.filter(i => i.status === 'Completed').length / hseItems.items.length) * 100
    )
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <h1>🏭 HSE 2026 Duqm Platform</h1>
            <p className="site-info">OICC Duqm - HSE Management System Tracking</p>
          </div>
          <div className="user-section">
            <div className="user-info">
              <span className="user-name">{currentUser.name}</span>
              <span className={`role-badge role-${currentUser.role.toLowerCase()}`}>
                {currentUser.role}
              </span>
            </div>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`nav-btn ${activeTab === 'items' ? 'active' : ''}`}
          onClick={() => setActiveTab('items')}
        >
          📋 HSE Items
        </button>
        <button
          className={`nav-btn ${activeTab === 'evidence' ? 'active' : ''}`}
          onClick={() => setActiveTab('evidence')}
        >
          📁 Evidence
        </button>
        {canGenerateReports && (
          <button
            className={`nav-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            📈 Reports
          </button>
        )}
        {canManageUsers && (
          <button
            className={`nav-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            👥 Team
          </button>
        )}
      </nav>

      <main className="app-main">
        {activeTab === 'dashboard' && (
          <Dashboard
            stats={stats}
            items={hseItems.items}
            currentUser={currentUser}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'items' && (
          <div className="items-section">
            <div className="items-filter">
              <input
                type="text"
                placeholder="Search by action or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>InProgress</option>
                <option>Planned</option>
              </select>
              <select
                value={filterTheme}
                onChange={(e) => setFilterTheme(e.target.value)}
                className="filter-select"
              >
                <option>All Themes</option>
                <option>LA</option>
                <option>RA</option>
              </select>
            </div>
            <div className="items-grid">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="item-card"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="item-header">
                    <span className="item-id">{item.id}</span>
                    <span className={`status-badge status-${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3>{item.action}</h3>
                  <div className="item-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${item.progress}%`}}></div>
                    </div>
                    <span className="progress-text">{item.progress}%</span>
                  </div>
                  <div className="item-meta">
                    <small>👤 {item.responsible}</small>
                    <small>📅 {new Date(item.dueDate).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'evidence' && (
          <EvidenceViewer
            evidenceMapping={evidenceMapping}
            items={hseItems.items}
          />
        )}

        {activeTab === 'reports' && canGenerateReports && (
          <Reports
            items={hseItems.items}
            stats={stats}
            currentUser={currentUser}
          />
        )}

        {activeTab === 'team' && canManageUsers && (
          <TeamManagement
            team={teamConfig.team}
            roles={teamConfig.roles}
            currentUser={currentUser}
          />
        )}

        {selectedItem && (
          <ItemDetail
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            canEdit={canEdit}
            evidenceMapping={evidenceMapping}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>HSE 2026 Tracking Platform | Contract C3100000369 | Last Updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default App;
