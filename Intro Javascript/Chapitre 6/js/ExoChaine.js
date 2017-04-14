
// Exo sur le prenom saisi a renvoyer

var blablabla = prompt("Entrez votre nom :");
var longueurMot = blablabla.length;

for (var i = 0; i < blablabla.length; i++) {
    console.log(blablabla[i]);
}

// Nombre de voyelles a renvoyer

function compterNbVoyelles(blablabla) {
var voyellesBlablabla = 0;
    for (var i = 0; i < blablabla.length; i++) {
    var lettre = blablabla[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            voyellesBlablabla++;
        }
    }
    return voyellesBlablabla;
}

var voyellesBlablabla = compterNbVoyelles(blablabla);
console.log("il y a " + voyellesBlablabla + " voyelles et " + (longueurMot - voyellesBlablabla) + " consonnes ");

// leet speak

function convertirEnLeetSpeek(blablabla) {
    var motLeet = "";
    for (var i = 0; i < blablabla.length; i++) {
        motLeet = motLeet + trouverLettreLeet(blablabla[i]);
    }
    return motLeet;
}

function trouverLettreLeet(lettre) {
var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "c":
        lettreLeet = "(";
        break;
    case "d":
        lettreLeet = "[)";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "f":
        lettreLeet = "|=";
        break;
    case "g":
        lettreLeet = "6";
        break;
    case "h":
        lettreLeet = "#";
        break;
    case "i":
        lettreLeet = "1";
        break;
    case "j":
        lettreLeet = "_|";
        break;
    case "k":
        lettreLeet = "X";
        break;
    case "l":
        lettreLeet = "£";
        break;
    case "m":
        lettreLeet = "|v|";
        break;
    case "n":
        lettreLeet = "^/";
        break;    
    case "o":
        lettreLeet = "0";
        break;
    case "p":
        lettreLeet = "|*";
        break;
    case "q":
        lettreLeet = "(_,)";
        break;
    case "r":
        lettreLeet = "2";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
    case "u":
        lettreLeet = "(_)";
        break;
    case "v":
        lettreLeet = "\/";
        break; 
    case "w":
        lettreLeet = "\/\/";
        break;
    case "x":
        lettreLeet = "><";
        break;
    case "y":
        lettreLeet = "Ψ";
        break;
    case "z":
        lettreLeet = "≥";
        break;
                
    }
    return lettreLeet;
}

var motLeet = convertirEnLeetSpeek(blablabla);
console.log("Version leet speak " + motLeet);

