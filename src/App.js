import { useEffect } from "react";
import { useState } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [board, setBoard] = useState([]);

  // const checkForColumnOfThree = () => {
  //   for (let i = 0; i <= 39; i++) {
  //     const columnOfCandies = [];
  //     for (let j = 1; j <= 8; j++) {
  //       const currentCandyIndex = (j + j * i) - 1;
  //       const currentCandy = board[currentCandyIndex];
  //       columnOfCandies.push(currentCandy);
  //     }
  //     const targetColumn = columnOfCandies[0];
  //     if (columnOfCandies.length >= 3 && columnOfCandies.every((candy) => candy === targetColumn))
  //       {
  //         return true;
  //       }
  //       }
  //       return false;
  // }
  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = board[i];
      if (columnOfThree.every((index) => board[index] === decidedColor)) {
        columnOfThree.forEach((index) => (board[index] = ""));
      }
    }
  };

  const createBoard = () => {
    const newBoard = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumber = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomNumber];
      newBoard.push(randomColor);
    }
    setBoard(newBoard);
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree();
      setBoard([...board]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkForColumnOfThree, board]);

  return (
    <div className="App">
      <div className="board">
        {board.map((candyColor, index) => (
          <img
            key={index}
            style={{ backgroundColor: candyColor }}
            alt={candyColor}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
