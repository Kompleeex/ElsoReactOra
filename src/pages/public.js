import Konyv from "../components/public/konyv";
import "./../App.css";
import { useState } from "react";
import Kosar from "../components/public/kosar.js";
import kosarModell from "../modell/kosarModell.js";


const KonyvLista = [
  {
    cim: "Valaki a lakásban",
    szerzo: "Robert Fraichmann",
    ar: 11111,
  },
  {
    cim: "Manó a majom",
    szerzo: "Szabó Ágnes",
    ar: 22222,
  },
  {
    cim: "nekem",
    szerzo: "Szabó Denisz",
    ar: 33333,
  },
];


function Public() {
  /**a statek reprezentálják az oldal állapotát
   * befrissítik sz oldal vonatkozó részét */
  const [vegosszeg, setVegossz] = useState(0);
  const [db, setDb] = useState(0);
  const [Kosaram, setKosaram] = useState([]);
  const kosarmodell = new kosarModell(Kosaram)
  function KosarKezeles(adat) {
    kosarmodell.setKosar(adat)
    setKosaram(kosarmodell.getKosar())
    setDb(kosarmodell.getDb())
    console.log(db)
    setVegossz(kosarmodell.getVegosszeg())
  }

  return (
    <>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>Az eddigi végösszeg: {vegosszeg}</p>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>cím</th>
              <th>szerzo</th>
              <th>ar</th>
              <th>DB</th>
              <th>+</th>
              <th>-</th>
              <th>töröl</th>
            </tr>

          </thead>
          <tbody>
            {Kosaram.map((elem, index) => {
              return <Kosar kosar={elem} key={index} />;
            })}
          </tbody>
        </table>
      </section>
      <article>
        {KonyvLista.map((konyv, index) => {
          return (
            <Konyv KonyvOBJ={konyv} key={index} KosarKezeles={KosarKezeles} />
          );
        })}
      </article>
    </>
  );
}

export default Public;
