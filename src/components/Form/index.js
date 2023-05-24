import React from "react";
import { Title } from "../Title/index.js";
import { Input } from "../Input/index.js";
import { Textarea } from "../Textarea/index.js";
import { Button } from "../Button/index.js";

import "./Form.css";

export function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    onAddEntry(data);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <Title />
      <Input />
      <Textarea />
      <Button />
    </form>
  );
}
