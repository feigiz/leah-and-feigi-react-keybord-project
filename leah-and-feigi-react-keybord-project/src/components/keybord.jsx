import { useState } from 'react';

import ChangeSize from './changeSize';
import ChangeColor from './changeColor';
import Language from './language';
import TextArea from './textArea';


function Keybord() {
    const [style, setStyle] = useState({ color: 'black', fontSize: 20, fontFamily: 'Arial' });
    const [caption, setCaption] = useState([]);
    const [styleOfAll,setStyleOfAll] =useState();
    const Hebrew = ["ת", "ש", "ר", "ק", "ץ", "צ", "ף", "פ", "ע", "ס", "ן", "נ", "ם", "מ", "ל", "ך", "כ", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"];
    const Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function changeAllCalers() {
        // console.log(caption.style)
        // setCaption(prevStyle => ([...prevStyle].map((char, i) =>
        //     char.style={ fontSize: 20, fontFamily: 'Arial' , color: 'Violet' }) 
        // ))
        caption.map((element, index) => { element.style = { color: 'Violet' }})
        
    }

    //setCaption(prevStyle=> ([...prevStyle].map((element, index) => { element.style = { color: 'Violet' }})))
    // caption.map((element, index) => { element.style = { color: 'Violet' }})
    // props.setCaption(prevText => ([...prevText].filter(function (event, arrIndex) {
    //         return prevText.length - 1 !== arrIndex;
    //     })));


    return <>
        <TextArea caption={caption} />
        {console.log(caption)}
        <br />
        <Language Hebrew={Hebrew} Uppercase={Uppercase} Lowercase={Lowercase} caption={caption} setCaption={setCaption} setStyle={setStyle} style={style} />
        <br />
        <button onClick={changeAllCalers}>change All Calers</button>


    </>
}
export default Keybord;

//לשקול להעביר מערך האותיות לשפות
//לשקול להעביר סטייל ישר מכאן!