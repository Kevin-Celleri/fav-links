import Table from "./Table"
import Form from "./Form"

import { useState } from "react"

function LinkContainer(){

    const [favLinks, setFavLinks] = useState([])
    const handleRemove = (index) => {
        const updatedLinks = [...favLinks]
        updatedLinks.splice(index, 1)
        setFavLinks(updatedLinks)
    }

    const handleSubmit = (favLink) => {
         setFavLinks([...favLinks, favLink])
    }

    
    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and a URL to the table!</p>
            <Table data = {favLinks} removeLink = {handleRemove}/>
            <h1>Add New</h1>
            <Form submitNewLink = {handleSubmit}/>
        </div>
    )
}

export default LinkContainer