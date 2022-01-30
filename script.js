//Aula 24/01 // 
//Toda vez que eu uso o index, eu estou falando pra contar os dados a partir de 0 
Index conta a partir do 0 - 
lenght conta a a partir do 1//

//Se eu chamar o nome da variavel vem todos os nomes, 
mas se for algo específico, preciso colocar dentro de[] e indicar 
o número do indice a partir de 0//::

console.log (nomes[1])

//SÓ A LETRA DO PRIMEIRO NOME:

console.log (nomes[0].substring(0,1))

//Lenght serve pra contar quantos itens tem dentro da 
variável ou especificamente do que você quer dentro da variavel: 

console.log (nomes[1].length)



//ARRAY 

let nomes = ["Gabriel", "Stéfany", "Dandara"]

// index         0           1         2        3 
let nomes = ["Gabriel", "Stéfany", "Dandara", "Pam"]
//length         1           2         3         4  

//REVISÃO FOR

console.log(nomes[3])

for(let i=0;i<nomes.length; i++){
    console.log(`o item de index ${i} corresponde ao nome ${nomes[i]}`)
}

//MÉTODOS

//arr.sort() -> arruma os elementos de uma array em ordem numérica ou alfabética crescente
let numbers = [6,5,11,658,68,33,55,985,65,98,326,15, 2, 4,,6,56,9]

let numbersOrganizados = numbers.sort(function(a,b){
    return b-a
})

console.log(numbersOrganizados)

//arr.sort() -> arruma os elementos de uma array em ordem numérica ou alfabética crescente
let numbers = [6,5,11,658,68,33,55,985,65,98,326,15, 2, 4,,6,56,9]

let numbersOrganizados = numbers.sort(function(a,b){
    return b-a
})

console.log(numbersOrganizados)

let nomesOrganizados = nomes.sort()
console.log(nomesOrganizados)

//arr.push() -> adiciona um valor no fim da lista
languages.push("C++")
console.log(languages)

// arr.shift() -> remove um valor do começo da lista
languages.shift()
console.log(languages)

// arr.pop() -> remove o último valor da lista
languages.pop()
console.log(languages)

//arr.splice(x,y) -> remove, adiciona ou substitui um elemento específico
/* o primeiro parâmetro é o índice do elemento a ser removido
O segundo parâmetro é o número de elementos a serem removidos */

//remover
let fruits = ["maçã", "banana", "laranja", "limão", "maracujá"]

fruits.splice(3,2)

console.log(fruits)

//adicionar
let legumes = ["cenoura", "batata", "chuchu"]

let legumeEspecífico = legumes.splice(2,0, "limão")

console.log(legumes)

//substituir

const deuses = ["Dan", "Fernando", "Pam"]

deuses.splice(1,1, "Igor")
console.log(deuses)

deuses.splice(1,1, "Fernando")
console.log(deuses)

//arr.splice(x, y)
// o primeiro: o índice a ser removido, adicionado ou substituído
// o segundo: número de itens a serem removidos, adicionados ou substituidos
// o terceiro: o item a ser adidionado ou substituído

//array -> lista que guarda dados -> []
let pessoa = [
    "Dan",
    23,
    "Instrutor de desenvolvimento front-end"
]

console.log(pessoa)

//objeto -> coleção de propriedades sobre dados -> {}
let pessoa1= {
    nome: "Dan",
    idade: 23,
    profissão: "Instrutor de desenvolvimento front-end"
}

//REVISÃOA


---Estrutura do IF/ELSE---
if (condição) {	
	instrução/tarefa - console.log("condição é verdadeira")
} else {
	instrução/tarefa - console.log("condição não é verdadeira")
}

//EXERCÍCIO 

//1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu

//2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o molho for bolonhesa

//3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol
let dia = "ferias";
let tempo = "sol";

if(dia === "ferias" || tempo === "sol"){
  console.log("Você esta de ferias ou está sol");
} else{
  console.log("Voce esta trabalhando ou está chovendo");
}

//Operadores Lógicos:
>   Maior que
<   Menor que
>=  Maior ou igual que
<=  Menor ou igual que
==  Igual á
=== Igual e mesmo tipo de dado
!== Diferente de
&&  (E)	o resultado será verdadeiro caso todas as comparações sejam  verdadeiras.
||  (OU)	o resultado será verdadeiro bastando apenas uma das comparações ser verdadeira.
!   (NÂO)	é utilizado para inverter o resultado de uma determinada condição. Ou seja, se a condição for verdadeira esta torna-se falsa, e se a condição for falsa ela torna-se 


/*
//---Estrutura do WHILE---
	variável = valor
	while (condição){
	   tarefa   
		 iteração
}
--- Estrutura do FOR ---
	for(variável contadora; condição para sair do loop; iteração){
	 tarefa};
*/

for(let z = 1; z <= 20; z +=2){
    console.log(z)
}
let cont = 20
while (1 <= cont){
    console.log(cont)
cont -= 1
}



---Estrutura dA FUNCTION---
function identificador() {
    tarefa
	}  

// crie uma função que receba comida como (parâmetro) e exiba no console
let comida = "arroz";

function msg(comida){
  console.log(comida);
}

msg(comida);
// crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console
function dados(persoangem, fruta, cidade){
  console.log(`O personagem ${personagem} e a fruta ${fruta} e a cidade ${cidade}`);
}

dados("Neymar","Maça","Rio de janeiro");

--- Estrutura do ARRAY---
variavel = [elementos,elementos,elementos]

let languages = [python, C, JavaScript, React, English, French];

// Utilize um método para adicionar dois nomes ao fim do array.

// Utilize um método para remover o primeiro nome do array.

// Utilize um método para organizar em ordem alfabética


let dados = ["cozinha","panela"]

dados.push("talher","garfo")

console.log(dados);

dados.shift();

console.log(dados);

dados.sort();

console.log(dados);

--- Estrutura do OBJETO---
	const nome = {
	  propriedade: valor,
	  propriedade: valor
}
// Crie um array  chamado "pessoas" contendo ao menos 3 objetos.

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  altura, musicas.

//Na propriedade musicas, adicione ao menos 3 itens.

// Mostre no console uma musica de cada lista.
