import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";

function Style(props) {

    return <>
    <ChangeColor setStyle={props.setStyle}/>
    <br /><br />
    <ChangeSize setStyle={props.setStyle}  style={props.style}/>
    </>
}
export default Style;