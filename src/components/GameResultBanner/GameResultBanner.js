import React from "react";

function GameResultBanner({ gameStatus, numOfGuesses, answer }) {
	if (gameStatus === "won") {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in{" "}
					<strong>
						{numOfGuesses}
						{numOfGuesses === 1 ? " guess" : " guesses"}{" "}
					</strong>
					.
				</p>
			</div>
		);
	} else if (gameStatus === "lost") {
		return (
			<div className="sad banner">
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
	return <div />;
}

export default GameResultBanner;
