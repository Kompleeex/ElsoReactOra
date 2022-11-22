import './konyv.css';


function Konyv(props){
    function KosarKattintas(){
        console.log(props.KonyvOBJ)
        props.KosarKezelesFV(props.KonyvOBJ)
    }



    return(
        <div  className="Konyv">
            <h1>{props.KonyvOBJ.cim}</h1>
            <p>{props.KonyvOBJ.szerzo}</p>
            <p>{props.KonyvOBJ.ar}</p>
            <button onClick={KosarKattintas}>Kosárba</button>
        </div>
    );
}
export default Konyv