import React, { useState } from 'react';

function Reports({ items, stats, currentUser }) {
  const [reportType, setReportType] = useState('summary');

  const generateCSV = () => {
    const headers = ['ID', 'Action', 'Status', 'Progress', 'Responsible', 'Due Date', 'Completion Date'];
    const rows = items.map(item => [
      item.id,
      item.action,
      item.status,
      item.progress + '%',
      item.responsible,
      new Date(item.dueDate).toLocaleDateString(),
      item.completionDate ? new Date(item.completionDate).toLocaleDateString() : 'N/A'
    ]);

    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
      csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', 'HSE_2026_Report.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generatePDF = () => {
    alert('PDF export feature - in production, integrate with jsPDF library');
  };

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>📈 Reports & Analytics</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setReportType('summary')}
          style={{
            padding: '1rem',
            border: 'none',
            background: reportType === 'summary' ? '#2a5298' : '#f0f0f0',
            color: reportType === 'summary' ? 'white' : '#333',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
        >
          📊 Summary Report
        </button>
        <button
          onClick={() => setReportType('detailed')}
          style={{
            padding: '1rem',
            border: 'none',
            background: reportType === 'detailed' ? '#2a5298' : '#f0f0f0',
            color: reportType === 'detailed' ? 'white' : '#333',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
        >
          📋 Detailed Report
        </button>
      </div>

      {reportType === 'summary' && (
        <div>
          <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>HSE 2026 Summary Report</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Generated: {new Date().toLocaleString()} | Prepared by: {currentUser.name}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem',
              padding: '1rem',
              background: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <div>
                <label style={{ fontSize: '0.9rem', color: '#666' }}>Total Actions</label>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e3c72', margin: '0.5rem 0 0 0' }}>
                  {stats.total}
                </p>
              </div>
              <div>
                <label style={{ fontSize: '0.9rem', color: '#666' }}>Overall Completion</label>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#4caf50', margin: '0.5rem 0 0 0' }}>
                  {stats.completionPercentage}%
                </p>
              </div>
              <div>
                <label style={{ fontSize: '0.9rem', color: '#666' }}>Completed</label>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#4caf50', margin: '0.5rem 0 0 0' }}>
                  {stats.completed}
                </p>
              </div>
              <div>
                <label style={{ fontSize: '0.9rem', color: '#666' }}>In Progress</label>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ff9800', margin: '0.5rem 0 0 0' }}>
                  {stats.inProgress}
                </p>
              </div>
            </div>

            <h4 style={{ marginBottom: '1rem', color: '#333' }}>Status Distribution</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { label: 'Completed', value: stats.completed, color: '#4caf50' },
                { label: 'In Progress', value: stats.inProgress, color: '#ff9800' },
                { label: 'Planned', value: stats.planned, color: '#2196f3' }
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: '#666' }}>{item.value} items</span>
                  </div>
                  <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${(item.value / stats.total) * 100}%`,
                      background: item.color,
                      borderRadius: '4px'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={generateCSV}
              style={{
                padding: '1rem',
                background: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#45a049'}
              onMouseLeave={(e) => e.target.style.background = '#4caf50'}
            >
              📥 Export to CSV
            </button>
            <button
              onClick={generatePDF}
              style={{
                padding: '1rem',
                background: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#0b7dda'}
              onMouseLeave={(e) => e.target.style.background = '#2196f3'}
            >
              📄 Export to PDF
            </button>
          </div>
        </div>
      )}

      {reportType === 'detailed' && (
        <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>Detailed Item Report</h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>ID</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Action</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>Status</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>Progress</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Responsible</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#2a5298' }}>{item.id}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{item.action.substring(0, 40)}...</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                      <span style={{
                        padding: '0.3rem 0.6rem',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: item.status === 'Completed' ? '#c8e6c9' : '#fff9c4',
                        color: '#333'
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 600, color: '#4caf50' }}>
                      {item.progress}%
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>{item.responsible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
