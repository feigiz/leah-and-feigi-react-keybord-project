function TextArea(props) {
    return (
        <div id="textArea">
            {props.caption.map((element, index) => {
                return <span style={element.style} key={index}>{element.letter}</span>
            })}
        </div>
    );
}
export default TextArea;