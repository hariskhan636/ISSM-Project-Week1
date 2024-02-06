import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

// const num = [1, 2, 3, 4, 5];
// const newArr = num.map((num) => num * num);
// console.log(newArr);

// const words = ["list", "book", "cap", "cricket", "helmet"];
// const newArr = words.map(
//   (word) => word.charAt(0).toUpperCase() + word.slice(1)
// );
// console.log(newArr);

// const pokemon = ["Bulbasaur", "Pikachu", "Charmander"];
// const newArr = pokemon.map((pok) => `<p>${pok}</p>`);
// console.log(newArr);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
