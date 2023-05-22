import React from "react";
import "./Textarea.css";

export function Textarea() {
  return <><label htmlFor="formTextarea" className="form__textarea-label">Notes</label>
  <textarea className="form__textarea" id="formTextarea" name="notes" rows="5"></textarea></>;
}
