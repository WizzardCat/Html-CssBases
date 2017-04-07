// Longueur des mots

var mot = "Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // Affiche 9

// Convertir en minuscules ou en majuscules

var motInitial = "Bora-Bora";

var motEnMinuscules = motInitial.toLowerCase();

console.log(motEnMinuscules); // Affiche "bora-bora"

var motEnMajuscules = motInitial.toUpperCase();

console.log(motEnMajuscules); // Affiche "BORA-BORA"

// La conversion en minuscules ou en majuscules se fait également avec la notation pointée : on ajoute un point entre la chaîne de caractères ettoLowerCase() outoUpperCase(). Par rapport à l'utilisation delength, on remarque l'ajout (indispensable) d'une paire de parenthèses à la fin. Les propriétéstoLowerCase() ettoUpperCase() sont d'une nature différente delength : il s'agit de méthodes

// Comparaison

var chaine = "azerty";

console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

// Accéder à un indice 
var sport = "Tennis-ballon"; // 13 caractères

console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

// Lorsqu'on souhaite accéder au dernier caractère de la chaine
var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !