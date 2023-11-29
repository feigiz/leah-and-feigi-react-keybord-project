function Special(props) {
    const Specials = [{ name: "enter", value: <br /> }, { name: "_________________________", value: " " }, { name: "Backspace", value: "deleteLetter" }, { name: "Undo", value: "//" }]

    return <>

       {Specials.map((char, i) =>  <button key={'char_'+i} onClick={() => props.setting(char.value)}>{char.name}</button>)}

    </>
}
export default Special;