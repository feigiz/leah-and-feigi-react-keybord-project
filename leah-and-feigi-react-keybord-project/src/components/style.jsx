import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";
import ChangeFont from "./changeFont";

function Style(props) {

    return <>
    <ChangeColor setStyle={props.setStyle}/>
    <br /><br />
    <ChangeSize setStyle={props.setStyle}  style={props.style}/>
    <br />
    <ChangeFont setStyle={props.setStyle}/>
    </>
}
export default Style;