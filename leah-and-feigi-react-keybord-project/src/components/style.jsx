import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";
import ChangeFont from "./changeFont";
import { useState } from 'react';

function Style(props) {
    const [showStayle, setShowStayle] = useState([false, false, false])
    const color = false;
    // const size = false;
    // const font = false;

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

    function changeShowingState(index) {
        // setShowStayle(prev => [...prev, prev[index] == true ? false : true])
        const changeState = showStayle[index] ? false : true;
        setShowStayle(prev => [...prev, prev[index] = changeState])

    }
    return <>
        <h2>style:</h2>
        {/* <button onClick={() => setShowStayle((prevState[0])=>prevState[0] == true ? false : true)}>color</button>
        <button onClick={() => (showStayle[1] == true ? false : true)}>size</button>
        <button onClick={() => (showStayle[2] == true ? false : true)}>font</button> */}
        {/* <button onClick={() => color == true ? color=false : color=true}>color</button> */}
        <button onClick={() => changeShowingState(0)}>color</button>
        <button onClick={() => changeShowingState(1)}>size</button>
        <button onClick={() => changeShowingState(2)}>font</button>

        {showStayle[0] && <ChangeColor setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />}
        {showStayle[1] && <ChangeSize setStyle={props.setStyle} style={props.style} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />}
        {showStayle[2] && <ChangeFont setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />}
        <h3>change case of all to:</h3>
        <div>
            <button onClick={() => changeAllFormat("to LowerCase")}>LowerCase</button>
            <button onClick={() => changeAllFormat("to UpperCase")}>UpperCase</button>
        </div>
    </>
}
export default Style;

