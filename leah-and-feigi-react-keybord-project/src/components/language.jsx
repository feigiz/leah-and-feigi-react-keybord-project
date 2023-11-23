import TypeOfEnglishLetters from './typeOfEnglishLetters'

function Language(props) {
    const typeOfEnglishLetters = ["UPPERCASE", "lowercase"];
    function chosenLan() {             
        if (props.languages === "English") {
            return (
                <>
                    {typeOfEnglishLetters.map((type, i) => <TypeOfEnglishLetters key={i} types={type} />)}
                </>
            )
        }
    }
    return <>
        <button onClick={chosenLan}>{props.languages}</button>
    </>
}
export default Language;