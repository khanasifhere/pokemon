import usedebounce from '../../hooks/usedebounce';
import './Search.css'
function Search({updatesearchterm}){
    const debouncesearchterm=usedebounce((e)=>updatesearchterm(e.target.value))
return (
    <input type="text" placeholder='search here' id='search-pokemon' onChange={debouncesearchterm} />
)


}
export default Search;