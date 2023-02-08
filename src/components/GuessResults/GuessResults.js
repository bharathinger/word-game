import React from "react";
import Guess from "../Guess/Guess";
import NUM_OF_GUESSES_ALLOWED from "../../constants"
function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (v, i) => guesses[i] ? guesses[i] : i).map((guess, index) => (
        <Guess key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
