import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
   render() {
      return (
         <div
            className="container my-3"
            style={{
               width: "1000px",
               backgroundColor: "white",
               padding: "0.5rem 3rem 3rem 3rem",
               borderRadius: "1rem",
            }}>
            <h1 className="text-secondary text-center my-5">Pokedex</h1>
            <div className="row">
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
            </div>
         </div>
      );
   }
}

export default Pokedex;
