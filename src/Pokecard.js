import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
   render() {
      return (
         <div className="col-sm-3">
            <div
               className="card text-center m-3 border-secondary Pokecard"
               style={{ background: "lightgray" }}>
               <div className="card-body">
                  <h4 className="card-title">{this.props.name}</h4>
                  <img
                     className="Pokecard-img"
                     src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZero(
                        this.props.id
                     )}.png`}
                     alt=""
                     style={{ width: "100%" }}
                  />
                  <p className="card-text mb-1">Type: {this.props.type}</p>
                  <p className="card-text">Exp: {this.props.exp}</p>
               </div>
            </div>
         </div>
      );
   }
}

function addZero(id) {
   let str = id + "";
   while (str.length < 3) {
      str = "0" + str;
   }
   return str;
}

export const cardData = [
   { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
   { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
   { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
   { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
   { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
   { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
   { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
   { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

export default Pokecard;
