import Partie from "./partie";
import De from "./de";

export default class Gobelet {

    public valeur: number;
    partie!: Partie;
    de: De[];

    constructor() {
        this.valeur = 0;
        this.de = [];
    }
}