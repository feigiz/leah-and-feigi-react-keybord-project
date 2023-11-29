//import { useState } from "react";

function TextArea(props) {
    // return <>
    //     <span style={props.style}>{props.caption}</span>
    // </>

    return (
        <>
            <div>
                {console.log(props.caption.letter)}
                {props.caption.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextArea;