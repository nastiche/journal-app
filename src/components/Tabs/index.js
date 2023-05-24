import React from "react";
import "./Tabs.css";

export function Tabs({ entries, favoriteEntries, onTab }) {
  return (
    <>
      <div className="tabs-container">
        <div className="tab">
          <button
            onClick={() => onTab(entries)}
            className="tab-name tab-name--active"
          >
            All entries
          </button>
          <p className="tabs-badge tabs-badge--active">{entries.length}</p>
        </div>

        <div className="tab">
          <button onClick={() => onTab(favoriteEntries)} className="tab-name">
            Favorites
          </button>
          <p className="tabs-badge">{favoriteEntries.length}</p>
        </div>
      </div>
    </>
  );
}
