function ChangeColor(props) {
    const colors = ["red", "green", "black", "blue", "orange", "yellow", "pink"]
    const setColor = (event) => {
        props.setStyle(prvStyle => ({ ...prvStyle, color: event }))
    }

    function changeAllColor(event) {
        props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, color: event } }))))
    }

    return <>
        <h3>change color to:</h3>
        <div>
            {colors.map((color, i) => <button style={{ backgroundColor: color }} key={'color_' + i} onClick={() => setColor(color)}></button>)}
        </div>

        {/* <br /><br /> */}

        <h3>change color of all to:</h3>
        <div>
            {colors.map((color, i) => <button style={{ backgroundColor: color }} key={'color_' + i} onClick={() => changeAllColor(color)}></button>)}
        </div>
    </>
}
export default ChangeColor;

