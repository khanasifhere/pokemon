import { useState,useEffect } from "react";
import axios from "axios";

function usepokemonlist(){
    const d_Url="https://pokeapi.co/api/v2/pokemon";
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
    async function down(){
        const response=await axios.get(pokemonliststate.Pokedex_URL ? pokemonliststate.Pokedex_URL: d_Url);
        
        const pokemonres=response.data.results;
        const pokemonpromise=pokemonres.map((pokemon)=> axios.get(pokemon.url));
        const pokemonListData=await axios.all(pokemonpromise);
        // setpokemonNext(response.data.next);
        // setpokemonPre(response.data.previous);
        //setpokemonliststate((state)=>({...state,pokemonNext:response.data.next,pokemonPre:response.data.previous}));
        const pokemonFinal=pokemonListData.map(pok=>{
            const pokem=pok.data;
            return{
                id:pokem.id,
                name:pokem.name,
                types:pokem.types,
                Image:pokem.sprites.other.dream_world.front_default
            }
        })
        // setpokelist(pokemonFinal);
        setpokemonliststate((state)=>({...state,pokelist:pokemonFinal,pokemonNext:response.data.next,pokemonPre:response.data.previous}));
    }
    useEffect(()=>{
        down();
    },[pokemonliststate.Pokedex_URL])
    return [pokemonliststate,setpokemonliststate];
}
export default usepokemonlist;