function TextArea(props) {
    return (
        <>
            <div>
                {props.caption.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextArea;