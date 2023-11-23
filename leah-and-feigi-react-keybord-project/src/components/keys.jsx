function Keys(props) {
    return <>
            <button onClick={() => alert(props.letters)}>{props.letters}</button>
    </>
}
export default Keys;