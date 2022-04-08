import Partie from "./partie";
import Gobelet from "./gobelet";

export default class Joueur {

    public nom: string;
    public score: number;
    partie: Partie;

    jouer(gobelet: Gobelet){
        for(let i = 0 ; i< gobelet.de.length; i++){
            this.score += gobelet.de[i].lancer();
        }
    }

    afficherScore(){
        console.log(`Le score de ${this.nom} est de ${this.score}`)
    }
}