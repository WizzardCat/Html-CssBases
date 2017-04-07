console.log("6 + 3 =", 6+3);
console.log("6 - 3 =", 6-3);
console.log("6 * 3 =", 6*3);



var tva =  119.9 * 0.804;
var prixFinal = 119.9-tva;
//arrondi à 2 chiffres après la virgule
prixFinal=Math.round(prixFinal*100)/100;

console.log("La tva à 19.6% de mon produit à 119.90€ est de ", prixFinal, "€");

// ici

console.log("Conversion °C & °F");
var celcius = 37.1;
var calculCenF = celcius * 9/5 + 32;
var fahrenheit = 98.78;
var calculFenC = (fahrenheit - 32) * 5/9;
calculCenF=Math.round(calculCenF*100)/100;
calculFenC=Math.round(calculFenC*100)/100;

console.log("celcius en fahrenheit. 37.1°C font ", calculCenF, "°F");
console.log("fahrenheit en celcius. 98.78°F", calculFenC, "°C");