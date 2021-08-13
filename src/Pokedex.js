import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
   render() {
      return (
         <div className="Pokedex">
            <div className="row">
               {this.props.hand.map((pokemon) => {
                  return (
                     <Pokecard
                        name={pokemon.name}
                        id={pokemon.id}
                        exp={pokemon.base_experience}
                        type={pokemon.type}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}

export default Pokedex;
