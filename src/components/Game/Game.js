import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameResultBanner from "../GameResultBanner/GameResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = React.useState("running");
	const [guesses, setGuesses] = React.useState([]);
	const handleSubmit = (guess) => {
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);
		if (guess.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	};
	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput handleGuessSubmit={handleSubmit} gameStatus={gameStatus} />
			{gameStatus !== "running" && (
				<GameResultBanner
					gameStatus={gameStatus}
					numOfGuesses={guesses.length}
					answer={answer}
				/>
			)}
		</>
	);
}

export default Game;
