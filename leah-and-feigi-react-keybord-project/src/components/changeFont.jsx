import { useState } from "react";


function ChangeFont(props) {
    const fonts = ["Georgia","Ariel","Bold Script Font","Gill Sans","Le Super Serif by SuperBruut"]
    const setFonts = (event) => {
        props.setStyle(prvStyle => ({ ...prvStyle, fontFamily: event }))
    }
    return <>
        {fonts.map((font, i) => <button key={'font_' + i} onClick={() => setFonts(font)}>{font}</button>)}
    </>
}
export default ChangeFont;

