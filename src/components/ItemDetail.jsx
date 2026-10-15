import React, { useState } from 'react';

function ItemDetail({ item, onClose, canEdit, evidenceMapping }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, save to backend
  };

  const linkedEvidence = evidenceMapping.evidenceFolders.filter(folder =>
    folder.itemsLinked.includes(item.id)
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2>{item.id}</h2>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {item.mainTheme}
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Action</h3>
          <p style={{ color: '#555', lineHeight: 1.6 }}>{item.action}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Status</label>
            <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>{item.status}</p>
          </div>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Progress</label>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, color: '#4caf50' }}>{item.progress}%</p>
          </div>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Accountable</label>
            <p style={{ marginTop: '0.5rem' }}>{item.accountable}</p>
          </div>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Responsible</label>
            <p style={{ marginTop: '0.5rem' }}>{item.responsible}</p>
          </div>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Due Date</label>
            <p style={{ marginTop: '0.5rem' }}>{new Date(item.dueDate).toLocaleDateString()}</p>
          </div>
          <div>
            <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#666' }}>Target</label>
            <p style={{ marginTop: '0.5rem' }}>{item.target}</p>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>📁 Linked Evidence</h3>
          {linkedEvidence.length > 0 ? (
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {linkedEvidence.map(folder => (
                <div key={folder.id} style={{
                  padding: '0.75rem',
                  background: '#f0f7ff',
                  borderRadius: '6px',
                  borderLeft: '3px solid #2a5298'
                }}>
                  <div style={{ fontWeight: 600, color: '#2a5298' }}>{folder.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>
                    📂 {folder.count} files
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#999' }}>No evidence linked yet</p>
          )}
        </div>

        {item.notes && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Notes</h3>
            <p style={{ color: '#555', lineHeight: 1.6, background: '#fffef0', padding: '1rem', borderRadius: '6px' }}>
              {item.notes}
            </p>
          </div>
        )}

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #e0e0e0'
        }}>
          {canEdit && (
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                background: '#2a5298',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#1e3c72'}
              onMouseLeave={(e) => e.target.style.background = '#2a5298'}
            >
              {isEditing ? '✓ Done Editing' : '✏️ Edit'}
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              background: '#f0f0f0',
              color: '#333',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.background = '#f0f0f0'}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
