function ChangeColor(props) {
    const colors = ["red", "green", "black", "blue", "orange", "yellow", "pink"]
    const setColor = (event) => {
        props.setStyle(prvStyle => ({ ...prvStyle, color: event }))
    }

    function changeAllColor(event) {
        props.setLast(prevaction => ([...prevaction, { type: "changeColor", value: props.caption }]));
        props.setCaption(prevText => (prevText.map((element) => ({ letter: element.letter, style: { ...element.style, color: event } }))))
    }

    return <>
        <h3>change color to:</h3>
        <div>
            {colors.map((color, i) => <button style={{ backgroundColor: color }} key={'color_' + i} onClick={() => setColor(color)}></button>)}
        </div>
        <h3>change color of all to:</h3>
        <div>
            {colors.map((color, i) => <button style={{ backgroundColor: color }} key={'color_' + i} onClick={() => changeAllColor(color)}></button>)}
        </div>
    </>
}
export default ChangeColor;

