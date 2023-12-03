import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";
import ChangeFont from "./changeFont";

function Style(props) {

    function changeAllFormat(event) {
        switch (event) {
            case "to LowerCase":
                props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter.toLowerCase(), style: element.style }))))
                break;
            case "to UpperCase":
                props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter.toUpperCase(), style: element.style }))))
                break;
            // default:
            //     // props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, color: event } }))))
            //     break;
        }
    }

    return <>
        <ChangeColor setStyle={props.setStyle} setCaption={props.setCaption} />
        {/* <br /><br /> */}
        <ChangeSize setStyle={props.setStyle} style={props.style} setCaption={props.setCaption} />
        <br />
        <ChangeFont setStyle={props.setStyle} setCaption={props.setCaption} />
        {/* <br /><br /> */}
        <h3>change case of all to:</h3>
        <div>
            <button onClick={() => changeAllFormat("to LowerCase")}>LowerCase</button>
            <button onClick={() => changeAllFormat("to UpperCase")}>UpperCase</button>
        </div>
    </>
}
export default Style;

// if (event == "cac")
//     props.setCaption(prevText => (prevText.map((element, index) => ({ letter: element.letter.toUpperCase(), style: { ...element.style, color: 'Violet' } }))))