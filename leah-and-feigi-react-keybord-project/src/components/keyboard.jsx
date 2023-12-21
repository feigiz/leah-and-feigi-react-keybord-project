import Keys from './keys';
import { useState } from 'react';

function Keyboard(props) {
    const [language, setlanguage] = useState('Hebrew');
    const [capslock, setCapslock] = useState('Lowercase');
    const Hebrew = ["ש", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"];
    const Uppercase = ["W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "Q"];
    const Lowercase = ["w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q"];
    const Emojis = ["😊", "😂", "🤣", "❤", "😍", "💕", "👍", "👌", "😘", "💖", "🎉", "💋", "👏", "🐱", "🐱‍🐉", "🐱‍👓", "😁", "✔", "👀", "😃", "✨", "😜", "🤔", "😆"];
    const NumbersAndChars = ["!", "?", "'", ",", ".", "''", ":", ";", "@", "*", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

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

    function writing(event) {
        if (event == "deleteLetter") {
            if (props.caption.length > 0) {
                props.setLast(prevAction => ([...prevAction, { type: "delete", value: props.caption[props.caption.length - 1] }]));
                props.setCaption(prevText => ([...prevText].filter((event, arrIndex) => (prevText.length - 1 !== arrIndex))));
            }
        }
        else {
            props.setLast(prevAction => ([...prevAction, { type: "writing", value: event }]));
            props.setCaption(prevText => ([...prevText, { letter: event, style: props.style }]));
        }
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
        <button onClick={() => setlanguage('emojis')}>😊</button>
        <button onClick={() => setlanguage('nums and chars')}>123 !?</button>
        <div id='keyboard'><Keys getLanguage={getLanguage} setting={writing} /></div>
    </>
}
export default Keyboard;