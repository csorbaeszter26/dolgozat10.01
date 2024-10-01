import DogaModell from "../modell/DogaModell.js"
import Kartyak from "../view/Kartyak.js"


export default class DogaController{

    constructor(){
        this.taroloElem=$(".tartalom")
        this.dogamodell = new DogaModell()
        new Kartyak(this.dogamodell.getList(), this.taroloElem)
        this.#esemenyKezelo()
        //console.log(this.dogamodell.getList())

    }

    #esemenyKezelo(){
        $(window).on("katt", (event)=>{
            console.log(event.detail)
            this.dogamodell.torol(event.detail.ID)
            new Kartyak(this.dogamodell.getList(), this.taroloElem)
        })

    }

}