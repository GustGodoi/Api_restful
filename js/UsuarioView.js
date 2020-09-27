function exibirUsuarios(usuarios) {

    popularTabela(usuarios);
}

function popularTabela(usuarios) {
    for (var i = 0; i < usuarios.length; i++) {
        inserirLinhaTabela(usuarios[i]);
    }
}

function inserirLinhaTabela(usuario) {
    var tabela = document.getElementById('tabelaDeUsuarios');
    var numLinhas = tabela.rows.length;
    var novaLinha = tabela.insertRow(numLinhas);

    var celCodigo = novaLinha.insertCell(0);
    celCodigo.innerHTML = usuario.codigo;

    var celNome = novaLinha.insertCell(1);
    celNome.innerHTML = usuario.nome;

    var celEmail = novaLinha.insertCell(2);
    celEmail.innerHTML = usuario.email;

    var celLogin = novaLinha.insertCell(3);
    celLogin.innerHTML = usuario.login;

}

function validarUsuario(acao) {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var login = document.getElementById('login');
    var senha = document.getElementById('senha');
    var senhaValidar = document.getElementById('senhaValidar');

    if (acao == "add") {
        var dadosValidos = true;

        if (nome.value == "") {
            dadosValidos = false;
            alert("Preencha o campo nome");
        } else if (email.value == "") {
            dadosValidos = false;
            alert("Informe um e-mail");
        } else if (login.value == "") {
            dadosValidos = false;
            alert("Preencha o campo login");
        } else {
            if (senha.value != "") {
                if (senha.value == senhaValidar.value) {
                    var senhaTxt = senha.value;

                    if (senhaTxt.length < 6) {
                        dadosValidos = false;
                        alert("A senha precisa ter pelo menos 6 caracteres");
                    }
                } else {
                    dadosValidos = false;
                    alert("As senhas informadas não são iguais");
                }

            } else {
                dadosValidos = false;
                alert("Informe a senha");
            }
        }

        if (dadosValidos) {
            //Enviar para a API
            var objUsuario = {
                "nome": nome.value,
                "email": email.value,
                "login": login.value,
                "senha": senha.value
            };
            //Adiciona o novo usuário
            adicionarUsuario(objUsuario);
        }

    }

    return false;
}

window.onload = function () {
    getUsuarios();
};