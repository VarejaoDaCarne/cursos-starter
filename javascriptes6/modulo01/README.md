<h1 align="center">
    <img alt="Starter" src="https://blog.ida.cl/wp-content/uploads/sites/5/2016/06/ecmas6_2.png"  widht="200px" height="200px" />
</h1>

<h3 align="center">
  💻<strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos.
</h3>
 
### :hammer: Exercícios

#### 1º exercício

Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-lo sem propriedades da classe. 
A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como *true* na                   classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

```bash
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

#### 2º exercício

A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find)

```bash
const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```

##### 2.1 Utilizando o *map*

Crie uma variável que contenha todas idades dos usuários: *[23, 15, 30]*

##### 2.2 Utilizando o *filter*

Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: *[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]*

##### 2.3 Utilizando o *find*

Crie uma variável que procura por um usuário que trabalhe na empresa Google: *undefined*

##### 2.4 Unindo operações

Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos:

```bash
// Resultado:[  
    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```

#### 3º exercício

Converta as funções nos seguintes trechos de código em Arrow Functions:

```bash
// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) { 
    return item + 10;
});
```

```bash
// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {  
    return usuario.idade;
}

mostraIdade(usuario);
```

```bash
// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {  
    return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```

```bash
// 3.4

const promise = function() {  
    return new Promise(function(resolve, reject) {
        return resolve();  
    })
}
```
