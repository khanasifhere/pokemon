import { useState,useEffect } from "react";
import axios from "axios";
import down from "../utils/downloadpokemon";

function usepokemonlist(d_Url){
  
    // const [pokelist,setpokelist]=useState([]);
    // const [Pokedex_URL,setPokedex_URL]=useState(d_Url);
    // const [pokemonNext,setpokemonNext]=useState(d_Url);
    // const [pokemonPre,setpokemonPre]=useState(d_Url);
    const [pokemonliststate,setpokemonliststate]=useState({
        pokelist:[],
        Pokedex_URL:d_Url,
        pokemonNext:d_Url,
        pokemonPre:d_Url
    });
    
    useEffect(()=>{
        down(pokemonliststate,setpokemonliststate,d_Url);
    },[pokemonliststate.Pokedex_URL])
    return [pokemonliststate,setpokemonliststate];
}
export default usepokemonlist;