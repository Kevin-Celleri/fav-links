import { useState } from "react"

function Form(props){
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")


    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            props.submitNewLink({name, URL})
        }}>
            <label htmlFor="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleNameChange}/>
            <br />
            <br />
            <label htmlFor="URL">Link URL:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleURLChange}/>
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form