import './Pokemondetails.css'
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Pokemondetails(){
    const {id}=useParams();
    const Pokemon_Url='https://pokeapi.co/api/v2/pokemon/';
    const [Pokemon,setPokemon]=useState(null);
  async  function dowmloadpokemon(){
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
        dowmloadpokemon();
    },[]);
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