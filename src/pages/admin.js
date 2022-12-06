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


function Admin() {
  /**a statek reprezentálják az oldal állapotát
   * befrissítik sz oldal vonatkozó részét */

  return (
      <article>
        <p>Admin felület</p>
      </article>
  );
}

export default Admin;
