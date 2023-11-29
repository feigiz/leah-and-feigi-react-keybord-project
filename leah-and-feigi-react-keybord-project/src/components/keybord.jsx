import { useState } from 'react';

import ChangeSize from './changeSize';
import ChangeColor from './changeColor';
import TextArea from './textArea';
import Language from './language';


function Keybord() {
    const [style,setStyle]=useState();
    const [caption, setCaption] = useState([{ letter: "", style: style }])
    const Hebrew=[...'אבגד']
    //const Hebrew = ["ת", "ש", "ר", "ק", "ץ", "צ", "ף", "פ", "ע", "ס", "ן", "נ", "ם", "מ", "ל", "ך", "כ", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"];
    const Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return <>
        <TextArea caption={caption} />
        {/* {console.log(caption[0].letter)} */}
        <br />
        <Language Hebrew={Hebrew} Uppercase={Uppercase} Lowercase={Lowercase} caption={caption} setCaption={setCaption} setStyle={setStyle} />
        <br />
        {/* <ChangeSize writing={caption} /> */}
        <br />
        {/* <button>size up</button><button>size down</button> */}
        
    </>
}
export default Keybord;

//לשקול להעביר מערך האותיות לשפות 
//לשקול להעביר סטייל ישר מכאן!