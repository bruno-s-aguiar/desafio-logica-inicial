// O desafio consiste em croar um classificador de nível do herói. Para isso serão utilizados:
// Variáveis
// Operadores
// Laços de repetição
// Estruturas de decisão


let nomeDoHeroi = "JS Super Hero"
let expDoHeroi = 10001
let nivelDoHeroi = ""

switch (true) {
    case expDoHeroi >= 0 && expDoHeroi <= 1000:
        nivelDoHeroi = "Ferro";
        break;
case expDoHeroi >= 1001 && expDoHeroi <= 2000:
    nivelDoHeroi = "Bronze";
    break; 
case expDoHeroi >= 2001 && expDoHeroi <= 3000:
nivelDoHeroi = "Prata";
break;
case expDoHeroi >= 3001 && expDoHeroi <= 5000:
    nivelDoHeroi = "Ouro";
    break;
case expDoHeroi >= 5001 && expDoHeroi <= 6000:
nivelDoHeroi = "Platina";
break;
case expDoHeroi >= 6001 && expDoHeroi <= 8000:
    nivelDoHeroi = "Ascendente";
    break;
case expDoHeroi >= 8001 && expDoHeroi <= 10000:
    nivelDoHeroi = "Imortal";
    break;
case expDoHeroi >= 10001:
    nivelDoHeroi = "Radiante";
    break;
}

console.log ("O nome do Herói é " + nomeDoHeroi + " e ele está no nível " + nivelDoHeroi) 