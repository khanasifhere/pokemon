import './Pokemon.css'
import { Link } from 'react-router-dom';
function Pokemon({name ,url,id}){
   return (
   <Link to={`/pokemon/${id}`} className='pokemon-wrapper'><div className="pokk">
        <div>{name}

        </div>
        <div ><img className='pok-img' src={url} /></div>
    </div></Link> 
   )
}
export default Pokemon;