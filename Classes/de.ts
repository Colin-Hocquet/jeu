import Gobelet from "./gobelet";

export default class De {

    public valeur: number;
    gobelet!: Gobelet;

    public lancer(): number{
        console.log(this.valeur);
       return this.valeur = Math.ceil(6*Math.random());
    }

    constructor() {
        this.valeur = 0;
    }
}