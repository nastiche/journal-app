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
  const [favoriteCount, setFavoriteCount] = useState(0);
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
      id === entry.id ? { ...entry, isFavorite: !entry.isFavorite } : entry
    );
    setEntries(matching);
  }

  function countFavorites() {
    return entries.filter((entry) => entry.isFavorite === true).length;
  }

  useEffect(() => {
    setFavoriteCount(countFavorites());
  }, [entries]);
  return (
    <>
      <Header />
      <main className="content">
        <Form onAddEntry={handleAddEntry} />
        <Tabs entryCount={entries.length} favoriteCount={favoriteCount} />
        <EntriesSection
          onToggleFavorite={handleToggleFavorite}
          entries={entries}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];
