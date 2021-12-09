import { useState } from "react";
import Card from "./Card";
let dataArray = Array(9).fill("");

function App() {
  const [crossTurn, setCrossTurn] = useState(true);
  const [msg, setMsg] = useState("");

  function resetGame() {
    dataArray.fill("");
    setCrossTurn(true);
    setMsg("");
  }
  function markSymbol(posn) {
    if (!dataArray[posn] && !msg) {
      dataArray[posn] = crossTurn ? "x" : "o";
      checkStatus();
      setCrossTurn(!crossTurn);
    }
  }

  function checkStatus() {
    for (let m = 0; m < 3; m++) {
      if (
        dataArray[3 * m + 0] === dataArray[3 * m + 1] &&
        dataArray[3 * m + 1] === dataArray[3 * m + 2] &&
        dataArray[3 * m + 2]
      ) {
        setMsg(`${dataArray[3 * m + 0]} Win!`);
      } else if (
        dataArray[0 + m] === dataArray[3 + m] &&
        dataArray[3 + m] === dataArray[6 + m] &&
        dataArray[6 + m]
      ) {
        setMsg(`${dataArray[0 + m]} Win!`);
      } else if (
        (dataArray[0] === dataArray[4] &&
          dataArray[4] === dataArray[8] &&
          dataArray[4]) ||
        (dataArray[2] === dataArray[4] &&
          dataArray[4] === dataArray[6] &&
          dataArray[4])
      ) {
        setMsg(`${dataArray[4]} Win!`);
      } else if (!dataArray.includes("")) {
        setMsg("Draw!");
      }
    }
  }

  return (
    <div className={`main ${crossTurn ? "bg-toggle" : ""}`}>
      <h1>{msg ? msg : crossTurn ? "X's Turn" : "O's Turn"}</h1>
      {msg && <button onClick={resetGame}>Reset Game</button>}
      <div id="game-board">
        {dataArray.map((v, i) => (
          <Card
            name={dataArray[i]}
            arr={dataArray}
            reqFn={() => {
              markSymbol(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
