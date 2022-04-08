import De from "./Classes/de";
import Gobelet from "./Classes/gobelet";
import Partie from "./Classes/partie";
import Joueur from "./Classes/joueur";

let de: De = new De();
let gobelet: Gobelet = new Gobelet()
let joueur1: Joueur = new Joueur("Moi")
let joueur2: Joueur = new Joueur("Lui")

let partie: Partie = new Partie();
console.log(de.lancer());

partie.addPlayer(joueur1,joueur2);
partie.initialiserPartie();