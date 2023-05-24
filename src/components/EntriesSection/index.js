import React from "react";
import { Entry } from "../Entry/index.js";

export function EntriesSection({ entries, onToggleFavorite }) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          id={entry.id}
          isFavorite={entry.isFavorite}
          date={entry.date}
          motto={entry.motto}
          notes={entry.notes}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
}
