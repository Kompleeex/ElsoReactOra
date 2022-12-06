import Konyv from "./components/public/konyv";
import "./App.css";
import { useState } from "react";
import Kosar from "./components/public/kosar.js";
import kosarModell from "./modell/kosarModell.js";
import Public from "./pages/public";
import Admin from "./pages/admin";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom"


const KonyvLista = [
  {
    id:1,
    cim: "Valaki a lakásban",
    szerzo: "Robert Fraichmann",
    ar: 11111,
  },
  {
    id:2,
    cim: "Manó a majom",
    szerzo: "Szabó Ágnes",
    ar: 22222,
  },
  {
    id:3,
    cim: "nekem",
    szerzo: "Szabó Denisz",
    ar: 33333,
  },
];


function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <footer>Paál Ádám</footer>
    </div>
  );
}

export default App;
