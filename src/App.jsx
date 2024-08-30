import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './component/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import Pokemondetails from './component/Pokemondetails/Pokemondetails'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path='/' element={<Pokedex/>}/>
    <Route path='/pokemon/:id' element={<Pokemondetails/>}/>
    <Route path='*' element={<h1>NOT FOUND</h1>}/>
  </Routes>
  )
}

export default App
