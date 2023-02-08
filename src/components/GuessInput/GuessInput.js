import React from "react";

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = React.useState('');
  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters! 🙃");
      return;
    }
    handleGuessSubmit(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
