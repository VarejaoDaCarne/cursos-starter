const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

//2.1
const usersAge = usuarios.map(user => { return [user.idade] })

console.log(usersAge)

//2.2
const usersThatWorkAtRocketseatAboveEighteen = usuarios.filter(user => user.empresa === 'Rocketseat' && user.idade >= 18)

console.log(usersThatWorkAtRocketseatAboveEighteen)

//2.3
const usersThatWorkAtGoogle = usuarios.find(user => user.empresa === 'Google')

console.log(usersThatWorkAtGoogle)

//2.4
function OnlyBelowFifty(value) {
    if(value <= 50)
        return value
}

const usersBelowFifty = usuarios.map((user) => { 
    const belowFifty = [user.idade * 2].filter(OnlyBelowFifty)

    if(user.idade < belowFifty)
        return user
})

console.log(usersBelowFifty)