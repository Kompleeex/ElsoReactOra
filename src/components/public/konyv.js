import './konyv.css';


function Konyv(props){
    function KosarKezeles(){
        // console.log(props.KonyvOBJ)
        //app js kosárkezelésének a hívása
        console.log(props.KonyvOBJ)
        props.KosarKezeles(props.KonyvOBJ)
    }



    return(
        <div  className="Konyv">
            <h1>{props.KonyvOBJ.cim}</h1>
            <p>{props.KonyvOBJ.szerzo}</p>
            <p>{props.KonyvOBJ.ar}</p>
            {/**ez a könyv komponens kosárkezelésének a hívása**/}
            <button onClick={KosarKezeles}>Kosárba</button>
            
        </div>
    );
}
export default Konyv