import React from "react";
import { Header } from "./components/Header/index.js";
// import { Title } from "./components/Title/index.js";
import { Form } from "./components/Form/index.js";
// import { Input } from "./components/Input/index.js";
// import { Textarea } from "./components/Textarea/index.js";
// import { Button } from "./components/Button/index.js";
import { Tabs } from "./components/Tabs/index.js";
import { Entry } from "./components/Entry/index.js";
import { Footer } from "./components/Footer/index.js";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Form />
        <Tabs />
        <ul className="entry-list">
          <Entry />
          <Entry />
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
