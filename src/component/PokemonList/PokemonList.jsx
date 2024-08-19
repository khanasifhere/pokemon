import axios from "axios"
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import { useEffect, useState } from "react";
function PokemonList(){
    const d_Url="https://pokeapi.co/api/v2/pokemon";
    const [pokelist,setpokelist]=useState([]);
    const [Pokedex_URL,setPokedex_URL]=useState(d_Url);
    const [pokemonNext,setpokemonNext]=useState(d_Url);
    const [pokemonPre,setpokemonPre]=useState(d_Url);
    
    async function down(){
        const response=await axios.get(Pokedex_URL ? Pokedex_URL: d_Url);
        
        const pokemonres=response.data.results;
        const pokemonpromise=pokemonres.map((pokemon)=> axios.get(pokemon.url));
        const pokemonListData=await axios.all(pokemonpromise);
        setpokemonNext(response.data.next);
        setpokemonPre(response.data.previous);
        const pokemonFinal=pokemonListData.map(pok=>{
            const pokem=pok.data;
            return{
                id:pokem.id,
                name:pokem.name,
                types:pokem.types,
                Image:pokem.sprites.other.dream_world.front_default
            }
        })
        setpokelist(pokemonFinal);
    }
    useEffect(()=>{
        down();
    },[Pokedex_URL])
    return (
        <div className="pokemon-wrapper">
           <h1>pokemon List</h1>
           <div className="btn"> 
            <button onClick={()=>{setPokedex_URL(pokemonPre)}}>prev</button>
            <button onClick={()=>{setPokedex_URL(pokemonNext)}}>next</button>
           </div>
          <div className="pokemon-list"> {pokelist.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image}/>)}
        </div></div>
    )
}
export default PokemonList;