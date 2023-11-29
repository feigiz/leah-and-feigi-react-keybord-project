import { useState } from "react";
import increasing from '../img/increasing.png';
import decreasing from '../img/decreasing.png';

function ChangeSize(props) {
    const [size, setSize] = useState( props.style.fontSize);
    function add() {
        setSize(prevSize=>(prevSize+10))
        set();      
    }
    function sub() {
        setSize(prevSize=>(prevSize-10))
        set();
    }
    const set=()=>(props.setStyle(prvStyle => ({ ...prvStyle, fontSize: size})))
    return <>
        <img onClick={() => add()} src={increasing} />
        <img onClick={() => sub()} src={decreasing} />
    </>
}
export default ChangeSize;

// const colors = ["red", "green", "black", "blue", "orange", "yellow", "pink"]
// const setColor = (event) => {
//     props.setStyle(prvStyle => ({ ...prvStyle, color: event }))
// }
// return <>
//     {colors.map((color, i) => <button key={'color_' + i} onClick={() => setColor(color)}>{color}</button>)}