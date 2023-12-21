function Keys(props) {
    const Specials = [{ name: "↵", value: <br /> }, { name: "_________________________", value: " " }, { name: "⇦", value: "deleteLetter" }]
    return <>
        {props.getLanguage().map((letter, i) => <button key={'char_'+i} onClick={() => props.setting(letter)}>{letter}</button>)}
        <br />
           {Specials.map((char, i) =>  <button key={'char_'+i} onClick={() => props.setting(char.value)}>{char.name}</button>)}        
    </>
}
export default Keys;