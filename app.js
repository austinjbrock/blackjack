let firstCard = 10
let secondCard = 11
let hasBlackjack = false
let sum = firstCard + secondCard 
let isAlive = true

if(sum<21){
    console.log('want another card?')
} else if(sum ===21){
    console.log('BlackJack!')
    hasBlackjack = true
}else{
    console.log('Bust!')
    isAlive = false
} 

console.log(hasBlackjack)
console.log(isAlive)