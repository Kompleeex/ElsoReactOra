class kosarModell{
    #kosar = []
    #db
    #vegosszeg
    constructor(kosar){
        this.#kosar = kosar
        this.#db = 0
        this.#vegosszeg = 0
    }

    getKosar(){
        return this.#kosar
    }

    setKosar(adat){
        this.#kosar.push(adat)
    }

    getDb(){
        return this.#kosar.length
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