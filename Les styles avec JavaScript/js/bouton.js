/*function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click

boutonElt.addEventListener("click", function () {
    console.log("clic");
});
*/
// Renvoie le nom du bouton souris à partir de son code

function getBoutonSouris(code) {
var bouton = "inconnu";

    switch (code) {
        case 0: // 0 est le code du bouton gauche
            bouton = "gauche";
            break;

        case 1: // 1 est le code du bouton du milieu
            bouton = "milieu";
            break;

        case 2: // 2 est le code du bouton droit
            bouton = "droit";
            break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});

// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});
/*
Voici les principales informations à retenir de ce chapitre.

    On peut rendre une page web interactive en écrivant du code JavaScript qui réagit aux événements déclenchés sur la page.﻿﻿

    De nombreux types d'événements peuvent être gérés. Chaque type d'événement est associé à un objet Event spécifique qui apporte des informations sur l'événement via ses propriétés.

    Les événements keypress, keydown et keyup permettent de réagir à l'utilisation du clavier.

    Les événements click, mousedown et mouseup permettent de gérer les interactions avec la souris.

    Le chargement et la fermeture de la page web sont associés aux événements load et beforeunload.

    Un événement se propage dans l'arborescence du DOM depuis son noeud d'origine jusqu'à la racine du document. Cette propagation peut être interrompue à l'aide de la méthode stopPropagation.

    Il est possible d'annuler le comportement par défaut lié à un événement en appelant la méthode preventDefault. */