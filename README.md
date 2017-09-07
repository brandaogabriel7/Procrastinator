tarefas# Lista de Tarefas para Procrastinar

Gerencie aquelas tarefas que você quer ~~não~~ fazer.

![Resultado final da atividade](docs/resultado-final.png)

## Atividade

Você deve fazer um sistema para cadastrar novas atividades que você ~~não~~
quer fazer. Fazendo isso, você vai treinar usar objetos em JavaScript e
criar elementos HTML dinamicamente.


### Exercício 1: Carregar **itens existentes**

No arquivo `tarefas.js` existe um vetor `tarefas` em que cada objeto
representa uma tarefa. Ele já possui duas tarefas: "Comprar leite" e "Escutar chimbinha".

Neste exercício, você deve criar uma função `insereTarefaNaPagina` (no singular) que, recebe
**01 objeto** com uma tarefa e insere 01 elemento HTML `<li>` na
lista de tarefas (_i.e._, `ul#lista-tarefas`). Ele **deve ser inserido ao final**.

O `<li>` que representa a tarefa deve ter uma classe `item-tarefa` para que ele seja devidamente estilizado. Se a
tarefa está `marcado` como `true`, você deve colocar a classe `marcado`
no `<li class="item-tarefa">...</li>`, além da `item-tarefa`.

Depois de criar a função, **chame-a para cada objeto que está no vetor `tarefas`**.
Logo antes de popular o elemento HTML da lista com as tarefas, não se
esqueça de remover todos os filhos que estiverem lá.

Resultado parcial:

![](docs/resultado-exercicio-1.png)

### Exercício 2: Incluir uma nova tarefa

Quando o usuário clicar no botão `#incluir-nova-tarefa`, (a) crie um novo objeto
representano a nova tarefa, (b) coloque-a ao final do vetor `tarefas` e,
então, (c) chame a função que `insereTarefaNaPagina`.

O nome da tarefa é o que o usuário digitou no campo, a categoria padrão é
`outros`, a propriedade `marcado` deve ser `false`.

Ao final dessa função, você deve **limpar o campo** onde o usuário digitou
a tarefa (_i.e._, `nova-tarefa-nome`).

Opcionalmente, você pode **"devolver o foco"** para esse mesmo controle. Todo
elemento HTML que pode "ter o foco" tem um método `focus()` que podemos chamar
assim:

```js
// pede o elemento para "roubar o foco" - mover o cursor para dentro dele
elemento.focus();
```

Resultado parcial:

![](docs/resultado-exercicio-2.png)

### Desafio 1: Inserir novos itens no início

Em vez de inserir novos itens por último, insira-os no topo da `ul#lista-tarefas`.
Para isso, lembre-se dos 3 métodos para vincular novos elementos HTML
na página e escolha o apropriado:

1. `containerEl.appendChild`
1. `containerEl.insertBefore`
1. `containerEl.replaceChild`


### Desafio 2: Pressionar "Enter" inclui a tarefa

Além do clique no botão, faça com que o pressionar da tecla "Enter",
quando o foco estiver no campo de texto (_i.e._, `nova-tarefa-nome`), também
insira a nova tarefa no vetor e na página.

Para isso, você pode usar o evento _keyup_ do controle e, dentro da _callback_,
perguntar qual `e.key` foi pressionada. Se `e.key === 'Enter'`, você pode
chamar a mesma função que registrou para o clique do botão.

### Desafio 3: Escolher a categoria da tarefa

Cada tarefa pode ter uma categoria associada. Descomente o código do desafio 3
e escreva código que permita que o usuário escolha qual a categoria da nova
tarefa.

Quando for incluir o elemento HTML dessa nova tarefa, coloque no `<li class="item-tarefa">` uma outra classe CSS com o nome `categoria-NOME`, em
que NOME pode ser `lazer`, `compras` ou `estudos` (para as
quais já existem regras CSS de estilização).


## FAQ

1. Como inserir um elemento ao final de um vetor?
   ```js
   let frutas = ['laranja', 'maçã'];
   frutas.push('kiwi');
   console.log(frutas);
   // laranja, maçã, kiwi
   ```
   - Veja os [slides da aula js2][array-push]
1. Como colocar/tirar uma classe em um elemento HTML?
   ```js
   ovelhaEl.classList.add('raca-de-ovelha');
   ovelhaEl.classList.remove('raca-de-ovelha');
   ovelhaEl.classList.toggle('invisivel');
   ```
   Veja os [slides da aula js2][classes]

[array-push]: https://fegemo.github.io/cefet-front-end/classes/js2/#metodos-de-arrays
[classes]: https://fegemo.github.io/cefet-front-end/classes/js2/#colocando-removendo-classes
