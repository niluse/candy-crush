import { useEffect } from "react";
import { useState } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [board, setBoard] = useState([]);

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
  console.log(board);

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
