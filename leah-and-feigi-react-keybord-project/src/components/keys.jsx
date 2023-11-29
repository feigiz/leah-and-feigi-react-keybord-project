function Keys(props) {
    const Chars = ["!", "?", "'", ",", ".", "''", ":", ";", "@", "*", "/"];
    const Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    return <>
        {Chars.concat(props.getLanguage(), Numbers).map((letter, i) => <button key={'char_'+i} onClick={() => props.setting(letter)}>{letter}</button>)}
        <br/><br/>
    </>
}
export default Keys;