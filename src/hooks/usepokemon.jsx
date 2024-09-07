import { useState,useEffect } from "react";
import axios from "axios";
import down from "../utils/downloadpokemon";
import PokemonList from "../component/PokemonList/PokemonList";
function usepokemon(id){
    const Pokemon_Url='https://pokeapi.co/api/v2/pokemon/';
    const [Pokemon,setPokemon]=useState(null);
    const [pokemonliststate,setpokemonliststate]=useState({
        pokelist:[],
        Pokedex_URL:'',
        pokemonNext:'',
        pokemonPre:''
    });
  async  function downgivenpokemon(id){
    const response=await axios.get(Pokemon_Url+id);
    const Pokemon=response.data;
    setPokemon({
        name:Pokemon.name,
        weight:Pokemon.weight,
        height:Pokemon.height,
        types:Pokemon.types,
        image:Pokemon.sprites.other.dream_world.front_default
    });
    const types=response.data.types.map(t=>t.type.name);
    return types[0];
    }
    async function downloadpokemonrelated(id){
       const type= await downgivenpokemon(id);
     
        await down(pokemonliststate,setpokemonliststate,`https://pokeapi.co/api/v2/type/${type}`);
    }
    useEffect(()=>{
        downloadpokemonrelated(id);
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    },[id]);
    return [Pokemon,pokemonliststate];
}
export default usepokemon;