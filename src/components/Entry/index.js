import React from "react";
import "./Entry.css";
// import Star from "./star.svg"
import FavoriteButton from "../FavoriteButton/index.js"
export function Entry() {
  return (
    <>
      <li className="entry">
        <div className="entry__date-container"><p className="entry-date">FEB 27, 2028</p></div>
        <div className="entry__text-container"><h3 className="entry__title">"That's life in the city"</h3>
        <p className="entry__text">
          Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
          mihi. Et quidem se repellere, idque instituit docere sic omne animal,
          simul atque.
        </p>
        <FavoriteButton />
        </div>
      </li>
    </>
  );
}
