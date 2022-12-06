function Kosar(props){
    console.log(props.kosar)
    

    // function plusz(){
        
    // } 
   
    return(
        <tr>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>
            <td><button>+</button></td>
            <td><button>-</button></td>
            <td><button>töröl</button></td>
        </tr>
    )
}
export default Kosar