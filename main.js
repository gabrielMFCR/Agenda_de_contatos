const form = document.getElementById('form-agenda');
const contatos = [];
const numeros= [];

let linhas = '';


form.addEventListener('submit', function(e) {
     e.preventDefault();

     adicionaLinha();
     atualizaTabela();

     
});

function adicionaLinha() {
     const inputNomeContato = document.getElementById('nome-contato');
     const inputNumeros = document.getElementById('numero-contato');

     if (contatos.includes(inputNomeContato.value)) {
          alert(`O contato: ${inputNomeContato.value} já foi inserido`);
     } else {
          contatos.push(inputNomeContato.value);
          numeros.push(parseInt(inputNumeros.value));

          let linha = '<tr>';
          linha += `<td>${inputNomeContato.value}</td>`;
          linha += `<td>${inputNumeros.value}</td>`;
          linha += `</tr>`;

          linhas += linha;
     }

     inputNomeContato.value = '';
     inputNumeros.value = '';
}

function atualizaTabela() {
     const corpoTabela = document.querySelector('tbody');
     corpoTabela.innerHTML = linhas;
}

