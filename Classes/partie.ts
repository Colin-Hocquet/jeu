import Joueur from "./joueur";
import Gobelet from "./gobelet";

export default class Partie {

    nbTours: number;
    joueur: Joueur[];
    gobelet: Gobelet;

    constructor(...joueur: Joueur[]) {
        this.nbTours = 0;
      //  this.joueur.push(joueur)
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
        for( let j = 0 ; j<this.joueur.length; j++){
            this.joueur[j].jouer(this.gobelet);
          //  if(this.joueur[j].score< this.joueur[j+1]){

           // }
        }
    }

    afficherGagnant(){

    }
}