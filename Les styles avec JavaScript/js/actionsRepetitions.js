var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);        
    compteurElt.textContent = compteur - 1;
}




// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
setInterval(diminuerCompteur, 1000);

// Annuler l'action de répéter
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {

// Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);

    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
// Annule l'exécution répétée
        clearInterval(intervalId);
// Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
    }
}




// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);

// Effectuer une action après que le délais soit dépassé
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {

// Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);

    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {

// Annule l'exécution répétée
        clearInterval(intervalId);
        
// Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";

// Modification du titre au bout de 2 secondes
        setTimeout(function () {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);
    
/*
Une fois le compte à rebours terminé, on fait appel àsetTimeoutpour modifier de nouveau le titre après un délai de deux secondes.
La fonctionsetTimeoutpermet d'exécuter une fonction une seule fois après un certain délai, exprimé en millisecondes.
*/

var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {

// Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);

// Déplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";

// Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation

function animer() {
    // Code de l'animation
    // ...
    requestAnimationFrame(animer);
}
requestAnimationFrame(animer);

/*
    Voici l'essentiel à retenir de ce chapitre sur les animations avec JavaScript.
    La fonctionsetIntervaldémarre une action répétée sous la forme d'une fonction appelée à intervalles réguliers. La fonctionclearIntervalannule une répétition démarrée avecsetInterval.
    La fonctionsetTimeoutexécute une action une seule fois après un certain délai.
    La fonctionrequestAnimationFramedemande au navigateur d'exécuter dès que possible une fonction qui met à jour une animation. Elle est à privilégier pour les animations en temps réel. La fonctioncancelAnimationFramestoppe une animation lancée avecrequestAnimationFrame.
    Il est également possible d'animer une page web en utilisant CSS. Le choix de la technique dépend de l'animation à réaliser.
*/