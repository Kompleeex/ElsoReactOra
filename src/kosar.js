function Kosar(props){
    console.log(props.kosar)
    return(
        <tr>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.ar}</td>
        </tr>
    )
}
export default Kosar