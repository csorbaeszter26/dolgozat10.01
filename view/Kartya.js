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
                <li><span><button class="elem">Törlés</button></span> <p><span> ${this.#jel.nev}: </span><span>${this.#jel.leiras},</span> <span>${this.#jel.kor} éves</span><p></li>
            `
        )
    }

    esemenyKezelo(){
        this.sorElem.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(e);
            //console.log(this.#jel)
        })
    }
    


}