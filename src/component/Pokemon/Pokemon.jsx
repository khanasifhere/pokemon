import './Pokemon.css'
function Pokemon({name ,url}){
   return (
    <div className="pokk">
        <div>{name}

        </div>
        <div ><img className='pok-img' src={url} /></div>
    </div>
   )
}
export default Pokemon;