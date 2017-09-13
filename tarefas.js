let tarefas = [
  {
    nome: 'Acampar',
    categoria: 'lazer',
    marcado: true
  },
  {
    nome: 'Programar',
    categoria: 'estudos',
    marcado: false
  }
];
let botaoMinimizar = document.querySelector("#minimizar"),
    logo = document.querySelector("#marca"),
    botaoEl = document.querySelector("#incluir-nova-tarefa"),
    inputTarefas = document.querySelector("#nova-tarefa-nome"),
    categoria = document.querySelector("#nova-tarefa-categoria"),
    sera = sessionStorage.getItem('minimizado');
for(let i=0;i<tarefas.length;i++) {
  insereTarefaNaPagina(tarefas[i]);
}
if(sera === 'true') logo.classList.toggle('minimizado');
botaoEl.addEventListener('click', function() {
  tarefas.push(new Object);
  tarefas[tarefas.length-1].nome = inputTarefas.value;
  tarefas[tarefas.length-1].categoria = categoria.value;
  tarefas[tarefas.length-1].marcado = false;
  insereTarefaNaPagina(tarefas[tarefas.length-1]);
  inputTarefas.value = '';
  inputTarefas.focus();
});
document.addEventListener('keyup', function(e) {
  if(e.which === 13) {
    tarefas.push(new Object);
    tarefas[tarefas.length-1].nome = inputTarefas.value;
    tarefas[tarefas.length-1].categoria = categoria.value;
    tarefas[tarefas.length-1].marcado = false;
    insereTarefaNaPagina(tarefas[tarefas.length-1]);
    inputTarefas.value = '';
    inputTarefas.focus();
  }
});
function insereTarefaNaPagina(tarefas) {
  let listaTarefas = document.querySelector("#lista-tarefas"),
      item = document.createElement('li');
      listaTarefas.insertBefore(item, listaTarefas.childNodes[0]);
      item.innerHTML = tarefas.nome;
      item.classList.add('item-tarefa');
      if(tarefas.marcado) {
        item.classList.add('marcado');
      }
      item.classList.add('categoria-' + tarefas.categoria);
}
let botaoSalvar = document.querySelector("#salvar"),
    botaoCarregar = document.querySelector("#carregar"),
    inputNome = document.querySelector("#nome-usuario");
botaoSalvar.addEventListener('click', function() {
  localStorage.setItem('dono-da-lista', inputNome.value);
  localStorage.setItem('lista', JSON.stringify(tarefas));
});
botaoCarregar.addEventListener('click', function() {
  let listaTarefas =  document.querySelector("#lista-tarefas");
  listaTarefas.innerHTML = '';
  for(let i=0;i<tarefas.length;i++) {
    tarefas[i] = '';
  }
  inputNome.value = localStorage.getItem('dono-da-lista');
  let aux = localStorage.getItem('lista');
  tarefas = JSON.parse(aux);
  for(let i=0;i<tarefas.length;i++) {
    insereTarefaNaPagina(tarefas[i]);
  }
});
botaoMinimizar.addEventListener('click', function() {
  minimizarOuNao();
})
function minimizarOuNao() {
  logo.classList.toggle('minimizado');
  if(logo.classList.contains('minimizado')) {
    sessionStorage.setItem('minimizado', 'true');
  }
  else {
    sessionStorage.setItem('minimizado', 'false');
  }
};
