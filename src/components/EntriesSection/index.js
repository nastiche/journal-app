import React from "react";
import { Entry } from "../Entry/index.js";
import { entries } from "../EntriesList/index.js";

export function EntriesSection() {
  console.log(entries);
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
