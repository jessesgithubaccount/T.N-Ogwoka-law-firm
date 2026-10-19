'use client';
import { useState } from 'react';

export default function PracticeGroup({ title, children }) {
  const [view, setView] = useState('grid');
  return (
    <>
      <div className="ph">
        <h3>{title}</h3>
        <div className="vt" role="group" aria-label="Change layout">
          <button
            type="button"
            className={view === 'grid' ? 'on' : undefined}
            aria-pressed={view === 'grid'}
            aria-label="Grid view"
            title="Grid view"
            onClick={() => setView('grid')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <button
            type="button"
            className={view === 'list' ? 'on' : undefined}
            aria-pressed={view === 'list'}
            aria-label="List view"
            title="List view"
            onClick={() => setView('list')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          </button>
        </div>
      </div>
      <div className={'cards' + (view === 'list' ? ' as-list' : '')}>{children}</div>
    </>
  );
}
