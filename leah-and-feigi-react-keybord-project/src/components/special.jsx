function Special(props) {
    return <>
        <button onClick={() => props.setting(props.char.value)}>{props.char.name}</button>
    </>
}
export default Special;