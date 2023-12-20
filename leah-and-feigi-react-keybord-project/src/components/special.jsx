function Special(props) {
    const Specials = [{ name: "↵", value: <br /> }, { name: "_________________________", value: " " }, { name: "⇦", value: "deleteLetter" }]
    return <>
       {Specials.map((char, i) =>  <button key={'char_'+i} onClick={() => props.setting(char.value)}>{char.name}</button>)}
    </>
}
export default Special;