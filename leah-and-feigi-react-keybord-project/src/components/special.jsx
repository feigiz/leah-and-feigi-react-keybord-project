function Special(props) {
    const Specials = [{ name: "↵", value: <br /> }, { name: "⇦", value: "deleteLetter" }, { name: "_________________________", value: " " }]
    return <>
       {Specials.map((char, i) =>  <button key={'char_'+i} onClick={() => props.setting(char.value)}>{char.name}</button>)}
    </>
}
export default Special;