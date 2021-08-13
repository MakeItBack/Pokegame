import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";
import { cardData } from "./Pokecard";
let handOne = [];
let handTwo = [];
let h1Exp = 0;
let h2Exp = 0;
let winOne = false;
let winTwo = false;

newDeal();

class Pokegame extends Component {
   render() {
      return (
         <div
            className="Pokegame container my-3"
            style={{
               width: "1000px",
               backgroundColor: "white",
               padding: "2rem",
               borderRadius: "0.5rem",
            }}>
            <h1 className="text-danger fs-1 text-center">The Pokemon Game!</h1>
            <h3 className="fs-5">Hand One (Score: {h1Exp})</h3>
            <Pokedex id="p1" hand={handOne} winner={winOne} />
            <h2 className="fs-2 text-center text-success mt-5 mb-3 Pokegame-winner">
               Hand {winOne === true ? "One" : "Two"} Wins!
            </h2>
            <h3 className="fs-5">Hand Two (Score: {h2Exp})</h3>
            <Pokedex id="p2" hand={handTwo} winner={winTwo} />
         </div>
      );
   }
}

function newDeal() {
   for (let i = 1; i < 5; i++) {
      let index = Math.floor(Math.random() * cardData.length);
      let card = cardData[index];
      handOne.push(card);
      cardData.splice(index, 1);
   }
   handTwo = cardData.slice();
   handOne.forEach((pokemon) => (h1Exp += pokemon.base_experience));
   handTwo.forEach((pokemon) => (h2Exp += pokemon.base_experience));
   h1Exp > h2Exp ? (winOne = true) : (winTwo = true);
}

export default Pokegame;
