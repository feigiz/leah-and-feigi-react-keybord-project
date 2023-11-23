import { useState } from 'react'
import Keys from './components/keys'
import './App.css'
import Language from './components/language'


function App() {
  const [caption, setCaption] = useState('')
  const Hebrew = ["א", "ב", "ג", "ד"];
  const language = ["English", "עברית"];
  return (
    <>
    <p>{caption}</p>
      {language.map((language, i) => <Language key={i} languages={language} />)}
      <br />
      {Hebrew.map((letter, i) => <Keys key={i} letters={letter} setting={setCaption} />)}
    </>

  )
}


export default App