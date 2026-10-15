import React, { useState } from 'react';

function TeamManagement({ team, roles, currentUser }) {
  const [filterRole, setFilterRole] = useState('All');

  const filteredTeam = filterRole === 'All'
    ? team
    : team.filter(member => member.role === filterRole);

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#1e3c72' }}>👥 Team Management</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {['All', 'Manager', 'Updater', 'Viewer'].map(role => (
          <button
            key={role}
            onClick={() => setFilterRole(role)}
            style={{
              padding: '0.75rem',
              border: 'none',
              background: filterRole === role ? '#2a5298' : '#f0f0f0',
              color: filterRole === role ? 'white' : '#333',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
          >
            {role}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Role Definitions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {Object.entries(roles).map(([roleName, roleData]) => (
            <div key={roleName} style={{
              background: 'white',
              padding: '1.25rem',
              borderRadius: '8px',
              borderLeft: '4px solid',
              borderLeftColor: roleData.color,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3c72' }}>{roleName}</h4>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                {roleData.description}
              </p>
              <div style={{ marginTop: '0.75rem' }}>
                <span style={{
                  display: 'inline-block',
                  background: roleData.color,
                  color: 'white',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem'
                }}>
                  Level {roleData.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>Team Members</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredTeam.map(member => (
          <div
            key={member.id}
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #2a5298'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3c72', fontSize: '1.1rem' }}>
                  {member.name}
                </h4>
                <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#666' }}>
                  <strong>Position:</strong> {member.position}
                </p>
                <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#666' }}>
                  <strong>Email:</strong> {member.email}
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
                  Status: <span style={{ color: '#4caf50', fontWeight: 600 }}>● {member.status}</span>
                </p>

                <div style={{ marginTop: '1rem' }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>
                    Permissions:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {member.permissions.slice(0, 4).map(perm => (
                      <span key={perm} style={{
                        background: '#f0f0f0',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: '#333'
                      }}>
                        {perm.replace(/_/g, ' ')}
                      </span>
                    ))}
                    {member.permissions.length > 4 && (
                      <span style={{
                        background: '#f0f0f0',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: '#666'
                      }}>
                        +{member.permissions.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{
                  background: roles[member.role].color,
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </div>
                <button style={{
                  padding: '0.5rem 1rem',
                  background: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#e0e0e0';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f0f0f0';
                }}>
                  Edit
                </button>
              </div>
            </div>

            {member.assignedItems.length > 0 && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>
                  Assigned Items: {member.assignedItems.length}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {member.assignedItems.map(itemId => (
                    <span key={itemId} style={{
                      background: '#bbdefb',
                      color: '#01579b',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {itemId}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f0f7ff',
        borderRadius: '8px',
        borderLeft: '4px solid #2a5298'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#01579b' }}>💡 Team Best Practices</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#01579b', lineHeight: 1.8 }}>
          <li>Assign items based on expertise and workload</li>
          <li>Review team progress weekly in meetings</li>
          <li>Maintain clear communication channels</li>
          <li>Update roles and permissions as needed</li>
        </ul>
      </div>
    </div>
  );
}

export default TeamManagement;
