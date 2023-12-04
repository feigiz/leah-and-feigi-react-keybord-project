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
        }
    }

    return <>
        <ChangeColor setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />
        <ChangeSize setStyle={props.setStyle} style={props.style} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />
        <ChangeFont setStyle={props.setStyle} setCaption={props.setCaption} setLast={props.setLast} caption={props.caption} />
        <h3>change case of all to:</h3>
        <div>
            <button onClick={() => changeAllFormat("to LowerCase")}>LowerCase</button>
            <button onClick={() => changeAllFormat("to UpperCase")}>UpperCase</button>
        </div>
    </>
}
export default Style;

