function Keys(props) {
    return <>
            <button onClick={() => props.setting(props.letters)}>{props.letters}</button>
    </>
}
export default Keys;