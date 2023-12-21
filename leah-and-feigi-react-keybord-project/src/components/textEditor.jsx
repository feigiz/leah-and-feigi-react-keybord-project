import { useState } from 'react';
import Keyboard from './keyboard';
import TextArea from './textArea';
import Style from './style';

function TextEditor() {
    const [style, setStyle] = useState({ color: 'black', fontSize: 20, fontFamily: 'Arial' });
    const [caption, setCaption] = useState([]);
    const [last, setLast] = useState([]);

    function undo() {
        if(last.length<=0)
            return;
        const lastAction = last.pop();
        switch (lastAction.type) {
            case "delete":
                setCaption(prevText => ([...prevText, { letter: lastAction.value.letter, style: style }]));
                break;
            case "writing":
                setCaption(prevText => ([...prevText].filter((event, arrIndex) => (prevText.length - 1 !== arrIndex))));
                break;
            case "changeColor":
                setCaption(prevText => (prevText.map((element, i) => ({ letter: element.letter, style: { ...element.style, color: lastAction.value[i].style.color } }))))
                break;
            case "changeSize":
                setCaption(prevText => (prevText.map((element, i) => ({ letter: element.letter, style: { ...element.style, fontSize: lastAction.value[i].style.fontSize } }))))
                break;
            case "changeFont":
                setCaption(prevText => (prevText.map((element, i) => ({ letter: element.letter, style: { ...element.style, fontFamily: lastAction.value[i].style.fontFamily } }))))
                break;
            case "clearAll":
                setCaption(lastAction.value)
                break;
        }
    }

    function clearAll() {
        setLast(prevaction => ([...prevaction, { type: "clearAll", value: caption }]));
        setCaption([])
    }

    return <div id='container'>
        <div id='typing'>
        <TextArea caption={caption} />
        {/* {console.log(caption)} */}
        <Keyboard setCaption={setCaption} style={style} setLast={setLast} caption={caption} />
        <button onClick={clearAll}>clear all</button>
        <button onClick={undo}>ctrl+Z</button>              
        </div>
         <div id='styling'>
        <Style setStyle={setStyle} style={style} setCaption={setCaption} setLast={setLast} caption={caption} />            
         </div>
{/* צריך את השמות של הדיבים? */}
    </div>
}
export default TextEditor;