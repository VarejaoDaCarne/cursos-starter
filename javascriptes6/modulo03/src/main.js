//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

async function umPorSegundo() {
    await delay(console.log('1s'))
    await delay(console.log('2s'))
    await delay(console.log('3s'))
}

umPorSegundo()

// //1.2
import axios from 'axios'

async function getUserFromGithub(user) {
    try {
        const data = await axios.get(`https://api.github.com/users/${user}`)

        console.log(data)
    } catch (error) {
        console.error('Usuário não existe')
    }
}

getUserFromGithub('diego3g')
getUserFromGithub('diego3g124123')

// //1.3
class Github {
    static async getRepositories(repo) {
        try {
            const data = await axios.get(`https://api.github.com/repos/${repo}`)

            console.log(data)
        } catch (error) {
            console.error('Repositório não existe')
        }
    }
}

Github.getRepositories('Rocketseat/unform')
Github.getRepositories('Rocketseat/dslkvmskv')

// //1.4
const buscaUsuario = async user => {
    try {
        const data = await axios.get(`https://api.github.com/users/${user}`)

        console.log(data)
    } catch (error) {
        console.error('Usuário não existe')
    }
}

buscaUsuario('diego3g')