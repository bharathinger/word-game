import React from "react";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

function Guess({ value }) {
  return (
    <p className="guess">
      {Array.from({ length: NUM_OF_CHARACTERS_ALLOWED }, (v, i) => value ? value[i] : undefined).map((character, index) => (
        <span key={index} className="cell">{character}</span>
      ))}
    </p>
  );
}

export default Guess;
