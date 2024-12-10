var soma = 0; 
var num;  

console.log("Informe um número:");

while (true) {
    num = parseInt(prompt("Informe um número:")); 

    if (num < 0) { 
    }

    soma += num;  
}

console.log("A soma dos números informados é: " + soma);
