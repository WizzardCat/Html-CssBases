
// Déclaration de variables
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}

// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();
console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

// Modification d'un objet "monObjet.maPropriete = nouvelleValeur"
stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Ajout d'une propriété
stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo
console.log("Il coûte " + stylo.prix + " euros");

// Exemple en minii-rpg

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25
};

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;
console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

// Les méthodes

var perso = {}; // Création d'un objet sans aucune propriété

perso.nom = "Aurora";

perso.sante = 150;

perso.force = 25;

// Renvoie la description du personnage

perso.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force";
    return description;
};
/*
Pour obtenir la description d'un personnage, on utilise maintenant l'expression perso.decrire() plutôt que decrire(perso). Cette différence est essentielle :
decrire(perso) appelle la fonction decrire() en lui passant l'objet perso en paramètre. Dans ce cas, la fonction est externe à l'objet.

perso.decrire() appelle la fonction decrire() sur l'objet perso. Dans ce cas, la fonction fait partie de la définition de l'objet : il s'agit d'une méthode.

Pour appeler une méthode nomMethode sur un objet nomObjet, on utilise la syntaxe nomObjet.nomMethode().
*/

// Les objets prédéfinis

L'objet console donne accès à la console du navigateur. Par exemple, on peut écrire un message dans la console avec console.log().
L'objet Math rassemble des fonctionnalités mathématiques. Par exemple, Math.random() renvoie un nombre aléatoire entre 0 et 1.

// Récap
var monObjet = {
    propriete1: valeur1,
    propriete2: valeur2,
    // ... ,
    methode1: function(/* ... */) {
        // ...
    },
    methode2: function(/* ... */) {
        // ...
    },
    // ...
};
console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet
console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet
            
