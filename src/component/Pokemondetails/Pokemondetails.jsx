import './Pokemondetails.css'

import { useParams } from 'react-router-dom';
import usepokemon from '../../hooks/usepokemon';

function Pokemondetails(){
    const {id}=useParams();
    const [Pokemon]=usepokemon(id);
    return (
        Pokemon&&<div className='pokdet'>
            <div className='name'>
                {Pokemon.name}
            </div>
            <div className='img'>
              <img src=  {Pokemon.image}/>
            </div>
            <div className='dim'>
                height:{Pokemon.height};
                weight:{Pokemon.weight};
            </div>
            <div className='div-type'>
              <h1>types:</h1>  {Pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>
        
    )
}
export default Pokemondetails;