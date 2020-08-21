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

```bash
function checaIdade(idade) { 
    // Retornar uma promise
}

checaIdade(20)  
    .then(function() {    
        console.log("Maior que 18");  
    })  
    .catch(function() {
        console.log("Menor que 18");  
    });
```

#### 2º exercício

Crie uma tela com um *input* que deve receber o nome de um usuário no Github. Após digitar onome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conformeURL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

```bash
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaix

```bash
<ul>  
    <li>repo1</li>  
    <li>repo2</li>  
    <li>repo3</li>  
    <li>repo4</li>  
    <li>repo5</li>
</ul>
```

#### 3º exercício

A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:


```bash
<li>Carregando...</li>
```
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

Dica: *Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.*
