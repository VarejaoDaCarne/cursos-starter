//5.1
const arr = [1, 2, 3, 4, 5, 6]

const  [x = 0, ...y] = arr

console.log(x)
console.log(y)

function soma(...params) {
    return params.reduce((previous, current) => {
        return previous + current
    })
}

console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2))

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}

console.log(usuario)

const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
}

console.log(usuario2)

const usuario3 = {
    ...usuario2,
    endereco: {
        ...usuario2.endereco,
        cidade: 'Lontras'
    }
}

console.log(usuario3)