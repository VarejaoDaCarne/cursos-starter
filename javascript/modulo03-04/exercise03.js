const lists = document.querySelector('.lists')
let listElement
function createList(content) {
    listElement = document.createElement('li')
    listElement.classList.add('list')
    lists.appendChild(listElement)
    listElement.textContent = content
}

const input = document.querySelector('input[name=user]')
function adicionar() {
    const user = input.value

    createList('Carregando...')

    input.value = ""

    setTimeout(function() {
        axios.get(` https://api.github.com/users/${user}/repos`)
            .then(function(response) {  
                listElement.textContent = `Repositórios de ${user}`
                
                for(repo of response.data) {
                    createList(`https://github.com/${repo.full_name}`)
                }
            }) 
            .catch(function(error) {
                listElement.textContent = `Usuário não existe`

                console.warn(error)
            })
    }, 5000)
}
