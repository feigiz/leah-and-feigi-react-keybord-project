
function ChangeFont(props) {
    const fonts = ["Georgia", "Arial", "Bold Script Font", "cursive", "fantasy"]
    const setFonts = (event) => {
        props.setStyle(prvStyle => ({ ...prvStyle, fontFamily: event }))
    }

    function setFontsOfAll(event) {
        props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, fontFamily: event } }))))
    }
    return <>
        <h3>change font to:</h3>
        <div>
            {fonts.map((font, i) => <button style={{ fontFamily: font }} key={'font_' + i} onClick={() => setFonts(font)}>{font}</button>)}
        </div>

        {/* <br /><br /> */}

        <h3>change font of all to:</h3>
        <div>
            {fonts.map((font, i) => <button style={{ fontFamily: font }} key={'font_' + i} onClick={() => setFontsOfAll(font)}>{font}</button>)}
        </div>
    </>
}
export default ChangeFont;

