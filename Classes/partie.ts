import Joueur from "./joueur";
import Gobelet from "./gobelet";

export default class Partie {

    nbTours: number;
    joueur: Joueur[];
    gobelet!: Gobelet;

    constructor() {
        this.nbTours = 0;
        this.joueur = []
    }

    addPlayer(...joueur: Joueur[]){
        joueur.forEach(player => {
            this.joueur.push(player);
        });
    }
    initialiserPartie(){
        this.nbTours = this.joueur.length+1;
        this.gobelet.de.length = this.joueur.length;
    }

    /**
     * Démarre la partie, joue le nombre de tour pour chaque joueur
     */
    lancerPartie(){
        for( let i =0 ; i<this.nbTours; i++){
            this.tourJoueur();

        }
    }

    /**
     * Tour de chaque joueur
     */
    tourJoueur(){
        let joueur0 = this.joueur[0];
        for( let j = 0 ; j<this.joueur.length; j++){
            this.joueur[j].jouer(this.gobelet);
            if(this.joueur[j].score> joueur0.score){
                joueur0 = this.joueur[j]
            }
        }
        console.log(`Le joueur ${joueur0.nom} gagne le tour`)
        joueur0.nbTourGagne++;
    }

    afficherGagnant(){

    }
}