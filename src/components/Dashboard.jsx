import React from 'react';

function Dashboard({ stats, items, currentUser, onSelectItem }) {
  const getCompletionByTheme = () => {
    const themes = {};
    items.forEach(item => {
      const themeKey = item.theme.split(' - ')[0];
      if (!themes[themeKey]) {
        themes[themeKey] = { completed: 0, total: 0 };
      }
      themes[themeKey].total++;
      if (item.status === 'Completed') {
        themes[themeKey].completed++;
      }
    });
    return themes;
  };

  const themeStats = getCompletionByTheme();

  return (
    <div className="dashboard">
      <h2>📊 HSE 2026 Tracking Dashboard</h2>

      <div className="stats-grid" style={{ marginTop: '1.5rem' }}>
        <div className="stat-card total">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total Actions</div>
        </div>

        <div className="stat-card completed">
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">Completed</div>
          <div className="stat-percent">✓ {stats.completionPercentage}%</div>
        </div>

        <div className="stat-card in-progress">
          <div className="stat-number">{stats.inProgress}</div>
          <div className="stat-label">In Progress</div>
        </div>

        <div className="stat-card planned">
          <div className="stat-number">{stats.planned}</div>
          <div className="stat-label">Planned</div>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>Progress by Theme</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {Object.entries(themeStats).map(([theme, data]) => {
            const percentage = Math.round((data.completed / data.total) * 100);
            return (
              <div key={theme} style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600 }}>{theme}</span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {data.completed}/{data.total}
                  </span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#f0f0f0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: 'linear-gradient(90deg, #4caf50, #45a049)',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>Recent Items</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {items.slice(0, 5).map(item => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              style={{
                background: 'white',
                padding: '1.25rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderLeft: '4px solid #2a5298',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ fontWeight: 700, color: '#2a5298', fontSize: '0.85rem' }}>{item.id}</span>
                  <span style={{ marginLeft: '1rem', padding: '0.3rem 0.6rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600, background: item.status === 'Completed' ? '#c8e6c9' : item.status === 'InProgress' ? '#fff9c4' : '#bbdefb', color: '#333' }}>
                    {item.status}
                  </span>
                </div>
              </div>
              <p style={{ color: '#333', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{item.action}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666' }}>
                <span>👤 {item.responsible}</span>
                <span>{item.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
