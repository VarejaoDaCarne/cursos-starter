<h1 align="center">
    <img alt="Starter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png"  widht="200px" height="200px" />
</h1>

<h3 align="center">
  💻<strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos.
</h3>
 
### :hammer: Exercícios

#### 1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

#### 2º exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```bash
function getRandomColor() { 
    var letters = "0123456789ABCDEF";  
    var color = "#";  
    
    for (var i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * 16)]; 
    }  
    
    return color;
}

var newColor = getRandomColor(); // #E943F0
```

#### 3º exercício

A partir do seguinte vetor:

```bash
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista *(<ul>)* no HTML com os itens da seguinte forma:

- Diego
- Lucas
- Gabriel

#### 4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```bash
function experiencia(anos) { 
    // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

#### 5º exercício

Dado o seguinte vetor de objetos:

```bash
var usuarios = [ 
    {    
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
];
```

Escreva uma função que produza o seguinte resultado:

```bash
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

Dica: *Para percorrer um vetor você deve utilizar a sintaxe [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) e para unir valores de um arraycom um separador utilize o [join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)*
