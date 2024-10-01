import { LISTA } from "./adat.js"

export default class DogaModell{

    #lista = []
    
    
    constructor(){
        //this.#i=i
        //this.listaFeltolt()
        this.#lista = LISTA
        
        //this.torol()
    }

    /*listaFeltolt(){
        listaa.forEach(elem => {
            this.#lista.push(elem)
        });
    }*/

    getList(){
        return this.#lista
    }

    torol(i){
        console.log(i)
        this.#lista.splice(i,1)
    }



}