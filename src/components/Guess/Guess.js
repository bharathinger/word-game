import React from "react";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const getClassName = (index, result) => {
  return result ? `cell ${result[index].status}` : 'cell';
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {Array.from({ length: NUM_OF_CHARACTERS_ALLOWED }, (v, i) =>
        value ? value[i] : undefined
      ).map((character, index) => (
        <span key={index} className={getClassName(index, result)}>
          {character}
        </span>
      ))}
    </p>
  );
}

export default Guess;
