import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main>
        <Hero></Hero>
      </main>
    </>
  )
}

export default App
