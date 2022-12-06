class kosarModell{
    #kosar = []
    #db
    #vegosszeg
    constructor(kosar){
        this.#kosar = kosar
        this.#db = 0
        this.#vegosszeg = 0
    }
/* [
{
    id:2,
    cim: "Manó a majom",
    szerzo: "Szabó Ágnes",
    ar: 22222,
    DB:2
  },
  {
    id:3,
    cim: "nekem",
    szerzo: "Szabó Denisz",
    ar: 33333,
    DB:1
  },
]
*/
    getKosar(){
        return this.#kosar
    }

    setKosar(adat){
        //megnézzük, hogy van-e már az adat a kosárban
        let index=this.#kosar.findIndex((elem)=> {
            return adat.id==elem.id;
          });
        //HA NINCS, AKKOR ADJUNK HOZZÁ AZ ADATHOZ EGY DB KULCSOT IS, ÉS ÁLLÍTSUK AZ ÉRTÉKLÉT=1-RE
        if(index >= 1){
        adat.db=1
        this.#kosar.push(adat)
        }
        //hA  VAN , AKKOR A KOSÁRBAN LÉVŐ ADAT DB ÉRTÉKÉT NÖVCELJÜK 1-GYEL
        else if(index == -1){
        this.#kosar[index].db++
        }
    }

    getDb(){
        return this.#kosar.length
    }

    getDarab(){
        return this.#db
    }

    getVegosszeg(){
        let ossz = 0;
        this.#kosar.forEach(elem=>{
            ossz+=elem.ar
        })
        this.#vegosszeg = ossz
        return ossz
    }
}
export default kosarModell