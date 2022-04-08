import Partie from "./partie";
import Gobelet from "./gobelet";

export default class Joueur {

    public nom: string;
    public score: number;
    nbTourGagne: number;
    partie!: Partie;

    constructor(nom: string) {
        this.nom = nom;
        this.score = 0;
        this.nbTourGagne = 0;
    }

    jouer(gobelet: Gobelet){
        this.score = 0;
        for(let i = 0 ; i< gobelet.de.length; i++){
            this.score += gobelet.de[i].lancer();
        }
    }

    afficherScore(){
        console.log(`Le score de ${this.nom} est de ${this.nbTourGagne}`)
    }
}