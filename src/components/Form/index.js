import React from "react";
import { Title } from "../Title/index.js";
import { Input } from "../Input/index.js";
import { Textarea } from "../Textarea/index.js";
import { Button } from "../Button/index.js";

import "./Form.css";

export function Form() {
  return (
      <form className="form">
        <Title />
        <Input />
        <Textarea />
        <Button />
      </form>
  );
}
