import React, { Component } from "react";
import "./Pokecard.css";
import chopper from "./Chopper.png";

const data = [
   { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
   { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
   { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
   { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
   { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
   { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
   { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
   { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

class Pokecard extends Component {
   render() {
      return (
         <div className="col-sm-3">
            <div
               className="card text-center mb-5 mx-3"
               style={{ background: "lightgray" }}>
               <div className="card-body">
                  <h4 className="card-title">Name</h4>
                  <img
                     src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
                     alt="..."
                     style={{ width: "100%" }}
                  />
                  <p className="card-text mb-1">Type:</p>
                  <p className="card-text">EXP:</p>
               </div>
            </div>
         </div>
      );
   }
}

export default Pokecard;
