//CODIGO AQUI
let saldo
saldo=15

saldo=saldo+22.40
console.log('soma',saldo)

saldo=saldo-12.34
console.log('subtraçao',saldo)

saldo=saldo/3
console.log('divisão',saldo)

saldo=saldo*3.42
console.log('multiplicaçao',saldo)

saldo=saldo%3
console.log('resto',saldo)

const mulEsom1=2*2+2
console.log("multiplica e soma",mulEsom1)

const mulEsom2=2*(2+2)
console.log("soma e multiplica",mulEsom2)

const resultado1= 5===5
console.log('res1',resultado1)

const resultado2= 5!== 5
console.log('res2',resultado2)

const resultado3= 5!=='5'
console.log('res3',resultado3)

const resultado4= '5'==='cinco'
console.log('res4',resultado4)

const resultado5= typeof 5 === typeof 20
console.log('res5',resultado5)

const resultado6= typeof '5'=== typeof 'cinco'
console.log('res6',resultado6)

const primeNum= 5
const segNum= 2
console.log("O primeiro numero é igual ao segundo",primeNum===segNum)
console.log("O primeiro numero é menor ou igual segundo",primeNum<=segNum)
console.log("O primeiro numero é maior que o segundo",primeNum>segNum)
console.log("O primeiro numero é menor que o segundo",primeNum<segNum)

pergunta=prompt('Qual minha idade');

pergunta2=prompt('Qual sua idade amigo');

pergunta3=prompt('Minha idade é igual a do meu amigo?',pergunta>pergunta2)
