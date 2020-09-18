function exibirUsuarios(usuarios) {
    let usuario = usuarios[0];

    let elemCodigo = document.getElementById('codigo');
    elemCodigo.innerHTML = usuario.codigo;
    let elemNome = document.getElementById('nome');
    elemNome.innerHTML = usuario.nome;
    let elemEmail = document.getElementById('email');
    elemEmail.innerHTML = usuario.email;
    let elemLogin = document.getElementById('login');
    elemLogin.innerHTML = usuario.login;

    popularTabela(usuarios)
}

function popularTabela(usuarios) {
    for (let index = 0; index < usuarios.length; index++) {
        inserirLinhaTabela(usuarios[index]);
    }
}

function inserirLinhaTabela(usuario) {
    let tabela = document.getElementById('tabelaUsuarios');
    let numLinhas = tabela.rows.length;
    let novaLinha = tabela.insertRow(numLinhas);

    let celCodigo = novaLinha.insertCell(0);
    celCodigo.innerHTML = usuario.codigo;
    let celNome = novaLinha.insertCell(1);
    celNome.innerHTML = usuario.nome;
    let celEmail = novaLinha.insertCell(2);
    celEmail.innerHTML = usuario.email;
    let celLogin = novaLinha.insertCell(3);
    celLogin.innerHTML = usuario.login;
}