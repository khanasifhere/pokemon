import { useState,useEffect } from "react";
import axios from "axios";
function usepokemon(id){
    const Pokemon_Url='https://pokeapi.co/api/v2/pokemon/';
    const [Pokemon,setPokemon]=useState(null);
  async  function dowmloadpokemon(id){
    const response=await axios.get(Pokemon_Url+id);
    const Pokemon=response.data;
    setPokemon({
        name:Pokemon.name,
        weight:Pokemon.weight,
        height:Pokemon.height,
        types:Pokemon.types,
        image:Pokemon.sprites.other.dream_world.front_default
    });
    }
    useEffect(()=>{
        dowmloadpokemon(id);
    },[]);
    return [Pokemon];
}
export default usepokemon;