import GameLayout from "../src/components/GameLayout.jsx";
import { useState } from "react";
import "./index.css";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleClick = (index) => {
    if (isGameEnded) return;
    if (field[index]) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWin(newField, currentPlayer)) {
      setIsGameEnded(true);
      return;
    }

    if (newField.every((el) => el !== "")) {
      setIsGameEnded(true);
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWin = (field, player) => {
    return WIN_PATTERNS.some((pattern) => {
      return pattern.every((index) => field[index] === player);
    });
  };

  return (
    <>
      <GameLayout
        field={field}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
        handleClick={handleClick}
      />
    </>
  );
}

export default Game;
