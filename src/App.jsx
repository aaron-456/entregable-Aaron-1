import { useState } from 'react'
import './App.css'
import Boxquo from './Components/Boxquo'
import quotes from './jsonAa/quotes.json'
import colors from './jsonAa/color.json'

function App() {


  const ramdomElementFa = arr => {
    const indexRandom = Math.floor(Math.random () * arr.length)
    return arr[indexRandom]
  }

  const [ramdomQuote, setRamdomQuote] = useState(ramdomElementFa(quotes))
  const [colorRandom, setColorRandom] = useState(ramdomElementFa(colors))

  const handleClickr = () => {
    setRamdomQuote(ramdomElementFa(quotes))
    setColorRandom(ramdomElementFa(colors))
  }


  return (
    <div style={{backgroundColor:colorRandom}} className="App">
      <Boxquo ramdomQuote= {ramdomQuote}
      handleClickr = {handleClickr} 
      colorRandom = {colorRandom}
      />
    </div>
  )
}

export default App
