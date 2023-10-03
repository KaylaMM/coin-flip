import { React, useState } from "react";
import Coin from "../Coin/Coin";
import "./FlipCoin.css";

export default function Counter() {
  const props = {
    coins: [
      {
        side: "heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
      },
      {
        side: "tails",
        imgSrc: "https://tinyurl.com/3a5y43tn",
      },
    ],
  };

  const [currentFace, setCurrentFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);

  const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  };

  const flipCoin = () => {
    const newFace = choice(props.coins);
    setCurrentFace((curState) => {
      // const heads = curState.heads + (newFace.side === "heads" ? 1 : 0);
      if(newFace.side === 'heads') {
        setHeads((prev) => prev += 1)
      }
      setTotalFlips((count) => count + 1);
      return newFace
    });
    // setHeads((count) => count + 1);
  };

  const handleClick = () => {
    flipCoin();
  };

  return (
    <div className="Counter">
      {currentFace && <Coin data={currentFace} />}
      <button onClick={handleClick}>FLIP ME</button>
      <p>
        Out of {totalFlips} flips, there have been {heads} heads and
        {totalFlips - heads}
        {} tails.
      </p>
    </div>
  );
}
