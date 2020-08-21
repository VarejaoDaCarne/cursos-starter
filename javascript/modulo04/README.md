<h1 align="center">
    <img alt="Starter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png"  widht="200px" height="200px" />
</h1>

<h3 align="center">
  💻<strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos.
</h3>
 
### :hammer: Exercícios

#### 1º exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de **2 segundos** retornará se usuário é maior ou não que 18 anos. 
Se o usuário ter mais que 18 anos de idade o resultado deve cair no *.then*, caso contrário, no *.catch*

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

Dica: *Quando o usuário não existe, a requisição irá cair no '.catch' com código de erro 404.*
