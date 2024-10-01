export default class Kartya{

    #jel
    #index
    #szuloElem

    constructor(jel, index, szuloElem){
        this.#jel = jel
        this.#index = index
        this.#szuloElem = szuloElem

        this.osszeallit()
        this.sorElem = $(".elem:last")
        this.esemenyKezelo()

    }


    osszeallit(){

         this.#szuloElem.append(
            `
                <li><button class="elem">Törlés</button>${this.#jel}</li>
            `
        )
    }

    esemenyKezelo(){
        this.sorElem.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(e);
        })
    }
    


}