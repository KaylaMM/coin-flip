import { React } from "react";
import "./Coin.css";

export default function Coin(props) {

  return (
    <div className="Coin">
      <img
        src={props.imgSrc}
        alt="coin"
      />
    </div>
  );
}
