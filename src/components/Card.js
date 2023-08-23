import React from "react";

import Beans from "../img/Beans_logo_dark.svg";
export default function Card({ title, text }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={Beans}></img>
      <p>{text}</p>
    </div>
  );
}
