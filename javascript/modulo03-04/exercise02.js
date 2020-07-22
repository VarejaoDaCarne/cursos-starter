const lists = document.querySelector('.lists')
function createList(name, full_name) {
    let listElement = document.createElement('li')
    listElement.classList.add('list')
    lists.appendChild(listElement)
    listElement.textContent = `https://github.com/${name}/${full_name}`
}

const input = document.querySelector('input[name=user]')
function adicionar() {
    const user = input.value

    axios.get(` https://api.github.com/users/${user}/repos`)
        .then(function(response) {
            for(repo of response.data) {
                createList(repo.name, repo.full_name)
            }

            input.value = ""
        })
        .catch(function(error) {
            console.warn(error)
        })
}
