import { useState } from "react";
import increasing from '../img/increasing.png';
import decreasing from '../img/decreasing.png';
// props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, color: event } }))))
const sizes = [10, 30, 50, 70, 90]
// props.setStyle(prvStyle => ({ ...prvStyle, color: event }))
function ChangeSize(props) {
    const [size, setSize] = useState(props.style.fontSize);
    // const [sizeAll, setSizeAll] = useState(props.style.fontSize);
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


    // function addAll() {
    //     if (sizeAll < 100) {
    //         setSizeAll(prevSize => (prevSize + 10))
    //         setAll(sizeAll + 10);
    //     }
    //     else {
    //         setSize(prevSize => (prevSize))
    //         setAll(sizeAll);
    //     }
    // }
    // function subAll() {
    //     if (sizeAll > 10) {
    //         setSizeAll(prevSize => (prevSize - 10))
    //         setAll(sizeAll - 10);
    //     }
    //     else {
    //         setSizeAll(prevSize => (prevSize))
    //         setAll(sizeAll);
    //     }
    // }


    const setAll = (event) => props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, fontSize: event } }))))
    const set = (event) => (props.setStyle(prvStyle => ({ ...prvStyle, fontSize: event })))
    return <>
        <h3>change font size</h3>
        <img onClick={() => add()} src={increasing} />
        <img onClick={() => sub()} src={decreasing} />

        <h3>change font size of all to:</h3>
        {/* <img onClick={() => addAll()} src={increasing} />
        <img onClick={() => subAll()} src={decreasing} /> */}
        {sizes.map((size, i) => <button key={'size_' + i} onClick={() => setAll(size)}>{size}</button>)}
    </>
}
export default ChangeSize;