import './Pokemondetails.css'
import { Link } from 'react-router-dom';
import usepokemon from '../../hooks/usepokemon';
import Pokemon from '../Pokemon/Pokemon';

function Pokemondetails({pokemonName}){
    
    const [pokemon ,pokemonliststate]=usepokemon(pokemonName);
    return (
       <>
        <h1 className='pokedex_main'><Link to='/'> pokedex <span className='f'>(home page)</span></Link></h1>
        {pokemon&&<div className='pokdet'>
            <div className='name'>
                {pokemon.name}
            </div>
            <div className='img'>
              <img src=  {pokemon.image}/>
            </div>
            <div className='dim'>
                height:{pokemon.height};
                weight:{pokemon.weight};
            </div>
            <div className='div-type'>
              <h1>types:</h1>  {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        <div> 
            <h1 className='pokedex_main'>similar pokemon</h1>
            <div className='related_pok'>
                {pokemonliststate.pokelist.length > 0 &&
                pokemonliststate.pokelist.map(p => <Pokemon name={p.name} key={p.id} url={p.Image} id={p.id}/>)
                }
            </div>
        </div>
        </>
        
    )
}
export default Pokemondetails;