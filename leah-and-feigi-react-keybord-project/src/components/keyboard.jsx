import Keys from './keys';
import Special from './special';
import { useState } from 'react';


function Keyboard(props) {
    const [language, setlanguage] = useState('Hebrew');
    const [capslock, setCapslock] = useState('Lowercase');
    const Hebrew = ["ת", "ש", "ר", "ק", "ץ", "צ", "ף", "פ", "ע", "ס", "ן", "נ", "ם", "מ", "ל", "ך", "כ", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"];
    const Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const Emojis = ["😊", "😂", "🤣", "❤", "😍", "💕", "👍", "👌", "😘", "💖", "🎉", "💋", "👏", "🐱‍💻", "🐱‍🐉", "🐱‍👓", "🐱‍🚀", "✔", "👀", "😃", "✨", "😜", "🤔", "😆"];
    const NumbersAndChars = ["!", "?", "'", ",", ".", "''", ":", ";", "@", "*", "/","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    function changeLanguage() {
        setlanguage(prevLanguage => {
            return prevLanguage == 'Hebrew' ? 'English' : 'Hebrew'
        })
    }

    function changeCapsLock() {
        setCapslock(prevCapslock => {
            return prevCapslock == 'Lowercase' ? 'Uppercase' : 'Lowercase'
        })
    }

    const getLanguage = () => {
        switch (language) {
            case 'Hebrew':
                return Hebrew;
            case 'English':
                return getCapsLock();
            case 'emojis':
                return Emojis;
                case 'nums and chars':
                    return NumbersAndChars
            default:
                return Hebrew;
        }
    }

    function writing(event, emoje) {
        if (event == "deleteLetter")
            props.setCaption(prevText => ([...prevText].filter((event, arrIndex) => (prevText.length - 1 !== arrIndex))));
        else
            props.setCaption(prevText => ([...prevText, { letter: event, style: props.style }]))
    }


    const getCapsLock = () => {
        switch (capslock) {
            case 'Lowercase':
                return Lowercase;
            case 'Uppercase':
                return Uppercase;
            default:
                return Lowercase;
        }
    }

    return <>
        <button onClick={changeLanguage}>{language == 'Hebrew' ? 'English' : 'עברית'}</button>
        {language == 'English' && <button onClick={changeCapsLock}>{capslock == 'Lowercase' ? 'UPPERCASE' : 'lowercase'}</button>}
        <Keys getLanguage={getLanguage} setting={writing} />
        <Special setting={writing} />
        <button onClick={() => setlanguage('emojis')}>Emojis</button>
        <button onClick={() => setlanguage('nums and chars')}>numbers & chars</button>
    </>
}
export default Keyboard;