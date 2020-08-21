<h1 align="center">
    <img alt="Starter" src="https://blog.ida.cl/wp-content/uploads/sites/5/2016/06/ecmas6_2.png"  widht="200px" height="200px" />
</h1>

<h3 align="center">
  💻<strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos.
</h3>
 
### :hammer: Exercícios

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e obabel-polyfill devidamente configurados. 
Em alguns exercícios é necessário instalar o Axios.

#### 1º exercício

Transforme os seguintes trechos de código utilizando async/await:

```bash
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {  
  delay().then(() => {    
    console.log('1s');    
  
    delay().then(() => {      
      console.log('2s');      
        
      delay().then(() => {        
        console.log('3s');      
      });    
    })  
  });
}

umPorSegundo();
```

```bash 
import axios from 'axios';

function getUserFromGithub(user) {  
  axios.get(`https://api.github.com/users/${user}`)    
    .then(response => {   
      console.log(response.data);   
    })    
    .catch(err => {    
      console.log('Usuário não existe');    
    })
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
```

```bash
class Github {  
  static getRepositories(repo) {   
    axios.get(`https://api.github.com/repos/${repo}`)      
      .then(response => {   
        console.log(response.data);     
      })      
      .catch(err => {  
        console.log('Repositório não existe');
      })  
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
```

```bash
const buscaUsuario = usuario => { 
  axios.get(`https://api.github.com/users/${user}`)    
    .then(response => {     
      console.log(response.data);    
    })    
    .catch(err => {    
      console.log('Usuário não existe'); 
    });
}

buscaUsuario('diego3g');
```
