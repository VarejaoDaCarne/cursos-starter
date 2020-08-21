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

```bash
<li>Carregando...</li>
```
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

Dica: *Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.*
