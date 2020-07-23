class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
        this.admin = false
    }

    isAdmin() {
        return `O usuário do email ${this.email} tem a senha ${this.senha} com um registro de admin ${this.admin}`
    }
}

class Admin extends Usuario {
     constructor(email, senha) {
        super(email, senha)

        this.admin = true
     }   
}

const User = new Usuario('email@teste.com', 'senha123')
const Adm = new Admin('teste@email.com', '123senha')

console.log(User.isAdmin())
console.log(Adm.isAdmin())