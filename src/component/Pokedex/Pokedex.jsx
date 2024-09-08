import './Pokedex.css'
import Search from '../Search/Search';
import PokemonList from '../PokemonList/PokemonList';
import { useState } from 'react';
import Pokemondetails from '../Pokemondetails/Pokemondetails';
function Pokedex(){
   const [searchterm,setsearchterm]=useState('');
    return (
        <div className='poke'>
            <h1>POKEDEX</h1>
            <Search updatesearchterm={setsearchterm}/>
            {searchterm==''?<PokemonList/>:<Pokemondetails pokemonName={searchterm}/>}
        </div>
    )
}
export default Pokedex;