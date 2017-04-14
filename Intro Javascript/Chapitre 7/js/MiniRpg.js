/*
var mage = {
    nom: "Aurora",
    sante: 150,
    force: 25
};

console.log(mage.nom + " a " + mage.sante + " points de vie et " + mage.force + " en force");

// Aurora est blessée par une flèche
mage.sante = mage.sante - 20;

// Aurora trouve un bracelet de force
mage.force = mage.force + 10;

// Ajout des xp
mage.xp = 0;
mage.xp = mage.xp + 15;
console.log(mage.nom + " a " + mage.sante + " points de vie et " + mage.force + " en force " + mage.xp + " en expérience");

// Completez le chien qui aboie
var chien = {
    nom: "Cerberus",
    race: "Chien des enfers",
    taille: 15,

// Renvoie la description du personnage
    aboyer: function (){ 
        var aboiement = this.nom + " est un " + this.race + " de " +
            this.taille + " m de haut";
        return aboiement;
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " mètres de haut ");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
*/
// Modélisation d'un cercle
var r = Number(prompt("Entrez le rayon d'un cercle :"));{

    aire: function () {
    return Math.PI * (r * r); 
    }
};

    perimetre function () {
    return Math.PI * (r + r);
    }

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());