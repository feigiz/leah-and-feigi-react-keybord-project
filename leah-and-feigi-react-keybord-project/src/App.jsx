import { useState } from 'react'
import Keys from './components/keys'
import './App.css'
import Language from './components/language'


function App() {
  const [count, setCount] = useState('')
  const Hebrew = ["א", "ב", "ג", "ד"];
  const language = ["English", "עברית"];
  return (
    <>
      {language.map((language, i) => <Language key={i} languages={language} />)}
      <br />
      {Hebrew.map((letter, i) => <Keys key={i} letters={letter} />)}
    </>

  )
}


export default App