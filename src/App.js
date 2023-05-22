import React from "react";
import { Header } from "./components/Header/index.js";
import { Title } from "./components/Title/index.js";
// import { Form } from "./components/Form/index.js";
import { Input } from "./components/Input/index.js";
import { Textarea } from "./components/Textarea/index.js";
import { Button } from "./components/Button/index.js";
import { Tabs } from "./components/Tabs/index.js";
import { Entry } from "./components/Entry/index.js";
import { EntryFav } from "./components/EntryFav/index.js";
import { Footer } from "./components/Footer/index.js";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <div className="form-container">
          <Title />
          <form className="form">
            <Input />
            <Textarea />
            <Button />
          </form>
        </div>
        <Tabs />
        <ul className="entry-list">
          <EntryFav />
          <Entry />
          <Entry />
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
