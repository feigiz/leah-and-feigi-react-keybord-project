function Keys(props) {
    return <>
        {props.getLanguage().map((letter, i) => <button key={'char_'+i} onClick={() => props.setting(letter)}>{letter}</button>)}
        <br/><br/>
    </>
}
export default Keys;