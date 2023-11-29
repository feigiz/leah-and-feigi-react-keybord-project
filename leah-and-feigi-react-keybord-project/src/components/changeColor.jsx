function ChangeColor(props) {
    const colors = ["red", "green", "black", "blue", "orange", "yellow", "pink"]
    const setColor = (event) => {
        props.setStyle(prvStyle => ({ ...prvStyle, color: event }))
    }
    return <>
        {colors.map((color, i) => <button key={'color_' + i} onClick={() => setColor(color)}>{color}</button>)}
    </>
}
export default ChangeColor;

