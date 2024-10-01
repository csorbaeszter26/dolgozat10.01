import Kartya from "./Kartya.js";

export default class Kartyak{

    #lista=[]
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem

        this.#szuloElem.empty()
        this.mindenKiir()
    }

    mindenKiir(){
        this.#lista.forEach(elem, index => {
            new Kartya(elem, index, this.#szuloElem)
        });
    }


}