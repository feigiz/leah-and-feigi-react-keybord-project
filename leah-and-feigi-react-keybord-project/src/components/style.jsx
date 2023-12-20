import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";
import ChangeFont from "./changeFont";
import { useState } from 'react';

function Style(props) {
    const [showStayle, setShowStayle] = useState()

    function changeAllFormat(event) {
        switch (event) {
            case "to LowerCase":
                props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter.toLowerCase(), style: element.style }))))
                break;
            case "to UpperCase":
                props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter.toUpperCase(), style: element.style }))))
                break;
        }
    }

    function changeShowingState(sort) {
        switch (sort) {
            case 'color':
                setShowStayle(<ChangeColor setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />)
                break;
            case 'size':
                setShowStayle(<ChangeSize setStyle={props.setStyle} style={props.style} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />)
                break;
            case 'font':
                setShowStayle(<ChangeFont setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />)
                break;
            case 'close':
                setShowStayle()
                break;
        }
    }

    return <>
        <h3>change case of all to:</h3>
        <div>
            <button onClick={() => changeAllFormat("to LowerCase")}>LowerCase</button>
            <button onClick={() => changeAllFormat("to UpperCase")}>UpperCase</button>
        </div>
        <h2>style:</h2>
        <button onClick={() => changeShowingState('color')}>color</button>
        <button onClick={() => changeShowingState('size')}>size</button>
        <button onClick={() => changeShowingState('font')}>font</button>
        <button onClick={() => changeShowingState('close')}>close</button>
        <div>
            {showStayle}
        </div>
    </>
}
export default Style;

