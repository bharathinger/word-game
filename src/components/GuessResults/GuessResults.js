import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (v, i) => guesses[i] ? guesses[i] : undefined).map((guess, index) => (
        <Guess key={index} value={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
