var fizzBuzz = prompt("Entrez un chiffre pour savoir s'il est divisible par 5 et par 3");

while(fizzBuzz < 100){
    if (fizzBuzz%3 === 0 && fizzBuzz%5 === 0){
        console.log("fizzBuzz");
    } else {
        console.log("pas fizzBuzz");
    } 
} 
