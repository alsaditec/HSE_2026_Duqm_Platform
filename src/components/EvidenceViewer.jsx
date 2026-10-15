import React, { useState } from 'react';

function EvidenceViewer({ evidenceMapping, items }) {
  const [expandedFolder, setExpandedFolder] = useState(null);

  const getItemsForFolder = (folderItemIds) => {
    return items.filter(item => folderItemIds.includes(item.id));
  };

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>📁 Evidence Management</h2>

      <div style={{
        background: '#f0f7ff',
        border: '1px solid #bbdefb',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem'
      }}>
        <p style={{ color: '#01579b', margin: 0 }}>
          <strong>Total Evidence Folders:</strong> {evidenceMapping.evidenceFolders.length} |
          <strong style={{ marginLeft: '1rem' }}>Linked Items:</strong> {evidenceMapping.evidenceFolders.reduce((sum, f) => sum + f.itemsLinked.length, 0)}
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {evidenceMapping.evidenceFolders.map((folder) => {
          const linkedItems = getItemsForFolder(folder.itemsLinked);
          const isExpanded = expandedFolder === folder.id;

          return (
            <div key={folder.id} style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease'
            }}>
              <div
                onClick={() => setExpandedFolder(isExpanded ? null : folder.id)}
                style={{
                  padding: '1.25rem',
                  borderLeft: '4px solid #2a5298',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: isExpanded ? '#f9f9f9' : 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
                onMouseLeave={(e) => !isExpanded && (e.currentTarget.style.background = 'white')}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, color: '#1e3c72', fontSize: '1rem' }}>
                    {isExpanded ? '📂' : '📁'} {folder.name}
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                    {folder.count} files | Updated: {folder.lastUpdated}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{
                    background: '#c8e6c9',
                    color: '#1b5e20',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {linkedItems.length} items
                  </span>
                  <span style={{ color: '#999', fontSize: '1.2rem' }}>
                    {isExpanded ? '▼' : '▶'}
                  </span>
                </div>
              </div>

              {isExpanded && linkedItems.length > 0 && (
                <div style={{
                  padding: '0 1.25rem 1.25rem 1.25rem',
                  background: '#f9f9f9',
                  borderTop: '1px solid #e0e0e0'
                }}>
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ marginBottom: '0.75rem', color: '#333', fontSize: '0.95rem' }}>
                      Linked Items:
                    </h4>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      {linkedItems.map(item => (
                        <div key={item.id} style={{
                          background: 'white',
                          padding: '0.75rem',
                          borderRadius: '6px',
                          borderLeft: '3px solid #2a5298',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <span style={{ fontWeight: 600, color: '#2a5298' }}>{item.id}</span>
                            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                              {item.action.substring(0, 50)}...
                            </p>
                          </div>
                          <span style={{
                            padding: '0.3rem 0.6rem',
                            borderRadius: '10px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: item.status === 'Completed' ? '#c8e6c9' : '#fff9c4',
                            color: '#333'
                          }}>
                            {item.progress}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isExpanded && linkedItems.length === 0 && (
                <div style={{
                  padding: '1.25rem',
                  background: '#f9f9f9',
                  borderTop: '1px solid #e0e0e0',
                  color: '#999',
                  textAlign: 'center'
                }}>
                  No items linked to this folder yet
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f0f7ff',
        borderRadius: '8px',
        borderLeft: '4px solid #2a5298'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#01579b' }}>💡 Tips</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#01579b', lineHeight: 1.8 }}>
          <li>Evidence folders are linked to HSE action items for easy reference</li>
          <li>Files are stored in your OneDrive: C:\Users\Hisham\OneDrive - OICC\HSE GRE\HSE Duqm\HSE 2026 - Duqm</li>
          <li>Click on items to view full details and progress tracking</li>
          <li>Evidence is automatically indexed for compliance audits</li>
        </ul>
      </div>
    </div>
  );
}

export default EvidenceViewer;
