/*
var pElt = document.querySelector("p");

pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

// La propriété "style" permet de récupérer les propriétés CSS d'un élément. L'exemple suivant affiche la couleur du texte de chacun des trois paragraphes de notre page web.

var paragraphesElts = document.getElementsByTagName("p");

console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

//La bonne solution pour accéder au style d'un élément consiste à utiliser une fonction nommée  getComputedStyle. Elle prend en paramètre un noeud du DOM et renvoie un objet représentant son style. On peut ensuite consulter les différentes propriétés CSS de cet objet.

var stylePara = getComputedStyle(document.getElementById("para"));

console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB

*/
// Exercice : modifier les couleurs
/*
var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = couleurTexte;
    divsElts[i].style.backgroundColor = couleurFond;
} */

var farine = document.createElement("li");

farine.id = "Farine";

farine.textContent = "farine";

document.getElementById("courses").appendChild(farine);