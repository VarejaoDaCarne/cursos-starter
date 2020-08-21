<h1 align="center">
    <img alt="Starter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png"  widht="200px" height="200px" />
</h1>

<h3 align="center">
  💻<strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos.
</h3>
 
### :hammer: Exercícios

#### 1º exercício

Crie uma função que dado o objeto a seguir:

```bash
var endereco = {  
  rua: "Rua dos pinheiros",  
  numero: 1293,  
  bairro: "Centro",  
  cidade: "São Paulo",  
  uf: "SP"
};
```

Retorne o seguinte conteúdo:

```bash
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293.
```


#### 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```bash
function pares(x, y) {
    // código aqui
}

pares(32, 321);
```

#### 3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"e retorna um booleano *true/false* caso exista ou não.

```bash
function temHabilidade(skills) { 
    // código aqui
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

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
