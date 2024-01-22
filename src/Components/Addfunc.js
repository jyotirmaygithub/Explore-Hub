import React from "react";
import Weather from "../pictures/Sunny.svg"
import todo from "../pictures/todo.svg";

export default function Addfunc() {
  return (
    <div className="flex space-x-4">
      <a target="_blank" rel="noopener noreferrer" href="https://jyotirmaygithub.github.io/Weather-app/">
        <img src={Weather} alt="" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://jyotirmaygithub.github.io/todo-/">
        <img src={todo} alt="" />
      </a>
    </div>
  );
}
