import { useState } from "react";
import increasing from '../img/increasing.png';
import decreasing from '../img/decreasing.png';
const sizes = [10, 30, 50, 70, 90]
function ChangeSize(props) {
    const [size, setSize] = useState(props.style.fontSize);
    function add() {
        if (size < 100) {
            setSize(prevSize => (prevSize + 10))
            set(size + 10);
        }
        else {
            setSize(prevSize => (prevSize))
            set(size);
        }
    }
    function sub() {
        if (size > 10) {
            setSize(prevSize => (prevSize - 10))
            set(size - 10);
        }
        else {
            setSize(prevSize => (prevSize))
            set(size);
        }
    }

    function setAll(event) {
        props.setLast(prevaction => ([...prevaction, { type: "changeSize", value: props.caption }]));
        props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, fontSize: event } }))))
    }
    const set = (event) => (props.setStyle(prvStyle => ({ ...prvStyle, fontSize: event })))
    return <>
        <h3>change font size</h3>
        <img onClick={() => add()} src={increasing} />
        <img onClick={() => sub()} src={decreasing} />
        <h3>change font size of all to:</h3>
        {sizes.map((size, i) => <button key={'size_' + i} onClick={() => setAll(size)}>{size}</button>)}
    </>
}
export default ChangeSize;