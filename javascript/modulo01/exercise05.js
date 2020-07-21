function formaFrase(users) {
    for(let user of users) {
        console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(", ")}`)
    }
}

const usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Exilir']
    }
]

formaFrase(usuarios)