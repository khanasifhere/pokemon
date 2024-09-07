import axios from "axios";
async function down(pokemonliststate,setpokemonliststate,d_Url,limit=21){
    const response=await axios.get(pokemonliststate.Pokedex_URL ? pokemonliststate.Pokedex_URL: d_Url);
    
    let pokemonres=response.data.results?response.data.results : response.data.pokemon;
    pokemonres=pokemonres.slice(0,limit);
    const pokemonpromise=pokemonres.map((p)=> {
        if(p.url){return axios.get(p.url);}
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url);
        }

    });
    const pokemonListData=await axios.all(pokemonpromise);
    console.log(pokemonListData)
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
export default down;