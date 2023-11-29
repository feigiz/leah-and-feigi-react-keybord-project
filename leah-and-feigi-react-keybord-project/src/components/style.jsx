import ChangeColor from "./changeColor";
import ChangeSize from "./changeSize";

function Style(props) {

    return <>
    <ChangeColor setStyle={props.setStyle}/>
    <ChangeSize setStyle={props.setStyle}/>
    </>
}
export default Style;