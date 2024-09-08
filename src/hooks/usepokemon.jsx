import { useState,useEffect } from "react";
import axios from "axios";
import down from "../utils/downloadpokemon";
import PokemonList from "../component/PokemonList/PokemonList";
import { useParams } from "react-router-dom";
function usepokemon(pokemonName){
    const {id}=useParams();
    const Pokemon_Url='https://pokeapi.co/api/v2/pokemon/';
    const [Pokemon,setPokemon]=useState(null);
    const [pokemonliststate,setpokemonliststate]=useState({
        pokelist:[],
        Pokedex_URL:'',
        pokemonNext:'',
        pokemonPre:''
    });
  async  function downgivenpokemon(id){
    console.log(Pokemon_Url+((pokemonName)?pokemonName:id))
    const response=await axios.get(Pokemon_Url+((pokemonName)?pokemonName:id));
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
       try{
        const type= await downgivenpokemon(id);
        await down(pokemonliststate,setpokemonliststate,`https://pokeapi.co/api/v2/type/${type}`);
       }
       catch(e){
        console.log("Errors in requesting API");
       }
    }
    useEffect(()=>{
        downloadpokemonrelated(id);
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    },[id,pokemonName]);
    return [Pokemon,pokemonliststate];
}
export default usepokemon;