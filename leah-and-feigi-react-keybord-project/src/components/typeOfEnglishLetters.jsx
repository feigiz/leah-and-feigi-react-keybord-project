function TypeOfEnglishLetters(props) {
    console.log("props")
    return <>
            <button onClick={() => alert(props.types)}>{props.types}</button>
    </>
}
export default TypeOfEnglishLetters;