import React from "react";
import { Entry } from "../Entry/index.js";

export function EntriesSection({entries}) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          date={entry.date}
          motto={entry.motto}
          notes={entry.notes}
        />
      ))}
    </ul>
  );
}
