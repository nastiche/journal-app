import React from "react";
import "./Input.css";

export function Input() {
  return (
    <>
      <label htmlFor="formInput" className="form__input-label">
        Motto
      </label>
      <textarea
        className="form__input"
        id="formInput"
        name="motto"
        row="1"
      ></textarea>
    </>
  );
}
