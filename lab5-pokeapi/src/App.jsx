import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListaPokemon from './ListaPokemon'
import TarjetaPokemon from './TarjetaPokemon'
import DetallePokemon from './DetallePokemon'


function App() {

  return (
    <>
      <div> Lista de Pokémon</div>
      <ListaPokemon />
      <TarjetaPokemon nombre="Torterra" />
      
    </>
    
  )
}

export default App
