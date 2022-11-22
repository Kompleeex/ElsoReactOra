import Konyv from './konyv';
import './App.css';

const KonyvLista = [
   {
    cim:"Valaki a lakásban",
    szerzo:"Robert Fraichmann",
    ar:11111
  },
  {
    cim:"Manó a majom",
    szerzo:"Szabó Ágnes",
    ar:22222
  },
  {
    cim:"nekem",
    szerzo:"Szabó Denisz",
    ar:33333
  },
]

function App() {
  function KosarKezeles(adat){
    console.log(adat)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article>

      {
        KonyvLista.map((konyv, index)=>{
          return(        
          <Konyv KonyvOBJ={konyv} key={index} KosarKezelesFV={KosarKezeles}/>
        )}



        )
      }


      </article>
      <footer>Paál Ádám</footer>
    </div>
  );
}

export default App;
