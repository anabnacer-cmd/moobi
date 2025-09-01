function adicionarGasto() {
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;

    if (descricao === "" || valor === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const tabela = document.getElementById('tabelaGastos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaDescricao = novaLinha.insertCell(0);
    const celulaValor = novaLinha.insertCell(1);
    const celulaAcao = novaLinha.insertCell(2);

    celulaDescricao.textContent = descricao;
    celulaValor.textContent = parseFloat(valor).toFixed(2);
    celulaAcao.innerHTML = '<button onclick="removerGasto(this)">Remover</button>';

    // Limpar campos
    document.getElementById('descricao').value = "";
    document.getElementById('valor').value = "";
}

function removerGasto(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
