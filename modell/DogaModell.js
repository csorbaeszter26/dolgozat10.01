import { LISTA } from "./adat.js"

export default class DogaModell{

    #lista = []
    
    constructor(){
        //this.listaFeltolt()
        this.#lista = LISTA
    }

    /*listaFeltolt(){
        listaa.forEach(elem => {
            this.#lista.push(elem)
        });
    }*/

    getList(){
        return this.#lista
    }

    torol(){
        console.log(1)
        this.#lista(i).splice()
    }



}