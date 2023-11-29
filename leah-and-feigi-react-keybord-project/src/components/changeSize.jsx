import { useState } from "react";

function ChangeSize(props) {
    const [size, setSize] = useState(100);
    const letterSize = { fontSize: size}
    return <>
        {/* {props.writing.style=letterSize} */}
    </>
}
export default ChangeSize;