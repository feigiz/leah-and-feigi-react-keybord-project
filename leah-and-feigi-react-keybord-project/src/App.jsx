import { useState } from 'react'
import Keys from './components/keys'
import './App.css'
import Special from './components/special'

function App() {
  const [caption, setCaption] = useState([])
  const Hebrew = ["ת", "ש", "ר", "ק","ץ","צ","ף","פ","ע","ס","ן","נ","ם","מ","ל","ך","כ","י","ט","ח","ז","ו","ה","ד","ג","ב","א"];
  const Uppercase=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const Lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const Specials=[{name:"enter", value:<br />},{name:"_________________________", value:" "},{name:"Backspace", value:"/"},{name:"Undo", value:"//"}]
  const Chars=["!","?","'",",",".","''",":",";","@","*","/"];
  const Numbers=["1","2","3","4","5","6","7","8","9","0"]
  const [language,setlanguage]=useState('Hebrew');
  const [capslock,setCapslock]=useState('Lowercase');

  function changeLanguage(){
    setlanguage(prevLanguage=>{
      return prevLanguage=='Hebrew'?'English':'Hebrew'
    })
  }

  function changeCapsLock(){
    setCapslock(prevCapslock=>{
      return prevCapslock=='Lowercase'?'Uppercase':'Lowercase'
    })
  }

  const getLanguage=()=>{
    switch(language){
      case 'Hebrew':
      return Hebrew;
      case 'English':
        return getCapsLock();
      default:
        return Hebrew;
    }
  }

  const getCapsLock=()=>{
    switch(capslock){
      case 'Lowercase':
        return Lowercase;
        case 'Uppercase':
        return Uppercase;
        default:
          return Lowercase;
    }
  }

  function writing(event){
    setCaption(prevText=>([...prevText,event]))
    console.log(caption)
  }

  return (
    <>
      <p>{caption}</p>
      <br /><br />
      <button onClick={changeLanguage}>{language=='Hebrew'?'English':'עברית'}</button>
      <br /><br />
      {language=='English'? <button onClick={changeCapsLock}>{capslock=='Lowercase'?'UPPERCASE':'lowercase'}</button>:<></>}
      <br /><br />
      <br />

      {Chars. concat(getLanguage(),Numbers).map((letter, i) => <Keys key={i} letters={letter} setting={writing} />)}
      {Specials.map((char,i)=><Special  key={i} char={char} setting={writing}/>)}
      <br/>
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
