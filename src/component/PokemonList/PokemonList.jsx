
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

import usepokemonlist from "../../hooks/usepokemonlist";
function PokemonList(){
    const d_Url="https://pokeapi.co/api/v2/pokemon";
    const [pokemonliststate,setpokemonliststate]=usepokemonlist(d_Url);
    return (
        <div className="pokemon-wrapper">
           <h1>pokemon List</h1>
           <div className="btn"> 
            <button onClick={()=>{setpokemonliststate({...pokemonliststate,Pokedex_URL:pokemonliststate.pokemonPre})}}>prev</button>
            <button onClick={()=>{setpokemonliststate({...pokemonliststate,Pokedex_URL:pokemonliststate.pokemonNext})}}>next</button>
           </div>
          <div className="pokemon-list"> {pokemonliststate.pokelist.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image} id={pokemon.id}/>)}
        </div></div>
    )
}
export default PokemonList;