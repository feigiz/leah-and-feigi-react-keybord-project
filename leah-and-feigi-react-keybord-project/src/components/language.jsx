import ChangeColor from './changeColor';
import Keys from './keys';
import Special from './special';
import { useState } from 'react';
import Style from './style';

function Language(props) {
    const [language, setlanguage] = useState('Hebrew');
    const [capslock, setCapslock] = useState('Lowercase');

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
                return props.Hebrew;
            case 'English':
                return getCapsLock();
            default:
                return props.Hebrew;
        }
    }

    function writing(event) {
        if (event == "deleteLetter")
            props.setCaption(prevText => ([...prevText].filter(function (event, arrIndex) {
                return prevText.length - 1 !== arrIndex;
            })));
        else
            props.setCaption(prevText => ([...prevText, { letter: event, style: props.style }]))
    }

    const getCapsLock = () => {
        switch (capslock) {
            case 'Lowercase':
                return props.Lowercase;
            case 'Uppercase':
                return props.Uppercase;
            default:
                return props.Lowercase;
        }
    }
   

    return <>
        <button onClick={changeLanguage}>{language == 'Hebrew' ? 'English' : 'עברית'}</button>
        {language == 'English' && <button onClick={changeCapsLock}>{capslock == 'Lowercase' ? 'UPPERCASE' : 'lowercase'}</button>}
        <Keys getLanguage={getLanguage} setting={writing} />
        <Special setting={writing} />
        <Style setStyle={props.setStyle} style={props.style}/>


    </>
}
export default Language;