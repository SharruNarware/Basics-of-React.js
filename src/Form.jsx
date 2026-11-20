function handleFormSubmit(event){
    event.preventDefault();
    console.log("form is submitted")
}


export default function (){
    return (
        <>
            <form onClick={handleFormSubmit}>
                <input placeholder="write something"/>
                <button>Submit</button>
            </form>
        </>
    )
}