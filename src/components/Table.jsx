function TableHeader(){
    /* responsible for rendering table head with
    appropriate columns */
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    /* responsible for rendering data for the table */
    const rows = props.linkData.map((row, index) => {
        return(
            <tr key = {index}>
                <td>{row.name}</td>
                <td>
                    <a href={row.URL}>{row.URL}</a>
                </td>
                <td>
                    <button onClick={() => props.removeLink(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>

}

function Table(props){

    const handleRemove = (index) => {
        console.log("button click", index)
    }
    return(
        <table>
            <TableHeader/>
            <TableBody linkData = {props.data} removeLink = {props.removeLink}/>
        </table>
    )
}

export default Table