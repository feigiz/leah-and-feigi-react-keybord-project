//import { useState } from "react";

function TextArea(props) {
    // return <>
    //     <span style={props.style}>{props.caption}</span>
    // </>
    // function changeAllCalers() {
    //     // console.log(caption.style)
    //     // setCaption(prevStyle => ([...prevStyle].map((char, i) =>
    //     //     char.style={ fontSize: 20, fontFamily: 'Arial' , color: 'Violet' }) 
    //     // ))
    //     props.caption.map((element, index) => { element.style = { color: 'Violet' }})

    // }

    return (
        <>
       {/* <button onClick={changeAllCalers}>change All Calers</button> */}
            <div>
                {/* {console.log(props.caption.letter)} */}
                {props.caption.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextArea;