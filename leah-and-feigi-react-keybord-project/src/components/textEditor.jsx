import { useState } from 'react';
import Keyboard from './keyboard';
import TextArea from './textArea';
import Style from './style';


function TextEditor() {
    const [style, setStyle] = useState({ color: 'black', fontSize: 20, fontFamily: 'Arial' });
    const [caption, setCaption] = useState([]);

    function undo(){
        
    }

    return <>
        <TextArea caption={caption} />
        {console.log(caption)}
        <br />
        <Keyboard setCaption={setCaption} style={style} />
        <br />
        <Style setStyle={setStyle} style={style} setCaption={setCaption} />
        <button onClick={()=>setCaption([])}>clear all</button>
        <button onClick={undo}>Undo</button>
    </>
}
export default TextEditor;