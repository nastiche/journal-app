import React from "react";
import { Header } from "./components/Header/index.js";
// import { Title } from "./components/Title/index.js";
import { Form } from "./components/Form/index.js";
// import { Input } from "./components/Input/index.js";
// import { Textarea } from "./components/Textarea/index.js";
// import { Button } from "./components/Button/index.js";
import { Tabs } from "./components/Tabs/index.js";
// import { Entry } from "./components/Entry/index.js";
import { Footer } from "./components/Footer/index.js";
import { EntriesSection } from "./components/EntriesSection/index.js";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [entries, setEntries] = useState([...initialEntries]);
  const [favoriteEntries, setFavoriteEntries] = useState([]);
  const [entriesToShow, setEntriesToShow] = useState([]);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    setEntries([
      { id: uuidv4(), date, isFavorite: false, ...newEntry },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    let matching = entries.map((entry) =>
      entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
    );
    setEntries(matching);
  }

  function collectFavorites() {
    return entries.filter((entry) => entry.isFavorite === true);
  }

  useEffect(() => {
    setFavoriteEntries(collectFavorites());
    setEntriesToShow(entries);
  }, [entries]);

  useEffect(() => {
    setEntriesToShow(entries);
  }, []);

  function clickTab(entries) {
    setEntriesToShow(entries);
  }
  return (
    <>
      <Header />
      <main className="content">
        <Form onAddEntry={handleAddEntry} />
        <Tabs
          entries={entries}
          favoriteEntries={favoriteEntries}
          onTab={clickTab}
        />
        <EntriesSection
          onToggleFavorite={handleToggleFavorite}
          entries={entriesToShow}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

const initialEntries = [
  {
    id: 998,
    date: "Jul 25, 2023",
    motto: "How to create 3D icons",
    notes:
      "Today I learned about 3D design tool in Adobe Illustrator. Web design is so much fun!",
    isFavorite: false,
  },
];
