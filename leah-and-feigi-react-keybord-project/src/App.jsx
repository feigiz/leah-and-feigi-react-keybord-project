import { useState } from 'react'
import Keys from './components/keys'
import './App.css'
import Language from './components/language'

function App() {
  const [caption, setCaption] = useState('')
  const Hebrew = ["ת", "ש", "ר", "ק","ץ","צ","ף","פ","ע","ס","ן","נ","ם","מ","ל","ך","כ","י","ט","ח","ז","ו","ה","ד","ג","ב","א"];
  const EnglishUppercase=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const EnglishLowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const [language,setlanguage]=useState('עברית')
  
  
  return (
    <>
    <p>{caption}</p>
      {language.map((language, i) => <Language key={i} languages={language} />)}
      <br />
      {Hebrew.map((letter, i) => <Keys key={i} letters={letter} setting={setCaption} />)}
      <br/>
      {EnglishUppercase.map((letter, i) => <Keys key={i} letters={letter} setting={setCaption} />)}
      <br/>
      {EnglishLowercase.map((letter, i) => <Keys key={i} letters={letter} setting={setCaption} />)}
    </>
  )
}

export default App

//פייגי לא להבהל.... זה בשביל לשרשר את הכיתוב..... אני רוצה אחכ לתקן
//  const thingsArray = ["Thing 1", "Thing 2"]
    
//function addItem() {
    // We'll work on this next
    // const newThingText = `Thing ${thingsArray.length + 1}`
    // thingsArray.push(newThingText)

    //  function addItem() {
        // We'll work on this next
     //   setThingsArray(prevThingsArray => {
     //       return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
     //   })
    //}
