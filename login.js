var dadosLivro = [];
var livroMarcados = [];

function adicionarLivro() {
    let novoLivro = document.getElementById("novoLivro").value;

    if (novoLivro) {
        dadosLivro.push(novoLivro);
        livroMarcados.push(false);
        criaLista();
        document.getElementById("novoLivro").value = '';
    } else {
        alert("Digite o nome do livro");
        document.getElementById("novoLivro").focus();
    }
}

function criaLista() {
    let tabela = "<tr><th>Livro</th><th>Concluído</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLivro.length; i++) {
        tabela += `
            <tr data-index="${i}">
                <td>${dadosLivro[i]}</td>
                <td><input type="checkbox" class="bookCheckbox" ${livroMarcados[i] ? 'checked' : ''}></td>
                <td>
                    <button class="btn btn-success" onclick="editar(${i})">Editar</button>
                    <button class="btn btn-danger" onclick="excluir(${i})">Excluir</button>
                </td>
            </tr>`;
    }
    
    document.getElementById('tabela').innerHTML = tabela;
    addCheckboxEventBook();
}

function addCheckboxEventBook() {
    const checkboxes = document.querySelectorAll('.bookCheckbox');

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            livroMarcados[index] = checkbox.checked;
            console.log(`Livro ${dadosLivro[index]} marcado: ${livroMarcados[index]}`);
        });
    });
}

function excluir(index) {
    dadosLivro.splice(index, 1);
    livroMarcados.splice(index, 1);
    criaLista();
}

function editar(index) {
    document.getElementById("novoLivro").value = dadosLivro[index];
    dadosLivro.splice(index, 1);
    livroMarcados.splice(index, 1);
    criaLista();
}