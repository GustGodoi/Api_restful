function exibirUsuarios(usuarios) {
    linhas = document.getElementById('listaUsuarios').rows;
    limparTabela(linhas)
    popularTabela(usuarios)
}

function limparTabela(linhas){
    for (i= linhas.length-1; i>=0; i--){
        excluirLinhaTabela(i)
    }
    
}

function excluirLinhaTabela(i){
    document.getElementById('listaUsuarios').deleteRow(i);
}

function popularTabela(usuarios){
    for(i = 0; i < usuarios.length; i++){
        exibirLinhaTabela(usuarios[i]);
    }
}

function exibirLinhaTabela(usuario){

    let table = document.getElementById('listaUsuarios');
    let numLinhas = table.rows.length;
    let novaLinha = table.insertRow(numLinhas);

    let celCodigo = novaLinha.insertCell(0);
    celCodigo.innerHTML = usuario.codigo;

    let celNome = novaLinha.insertCell(1);
    celNome.innerHTML = usuario.nome;

    let celEmail = novaLinha.insertCell(2);
    celEmail.innerHTML = usuario.email;
    
    let celLogin = novaLinha.insertCell(3);
    celLogin.innerHTML = usuario.email;

    let celDelete = novaLinha.insertCell(4);
    var botaoEliminar = '<button class="btn btn-danger" onclick="deleteUsuario(' + usuario.codigo + ')">Deletar</button>';
    celDelete.innerHTML = botaoEliminar;
    
    let celAlterar = novaLinha.insertCell(5);
    var botaoEditar = '<button class="btn btn-success" onclick="preencherFormulario(\'' + usuario.codigo + '\', \'' + usuario.nome + '\', \'' + usuario.email + '\', \'' + usuario.login + '\')">Alterar</button>';
    celAlterar.innerHTML = botaoEditar;
}

function preencherFormulario(codigoParam, nomeParam, emailParam, loginParam) {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var login = document.getElementById('login');
    var codigo = document.getElementById('codigo');

    nome.value = nomeParam;
    email.value = emailParam;
    login.value = loginParam;
    codigo.value = codigoParam;
}

function validarUsuario() {

    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let login = document.getElementById('login');
    let senha = document.getElementById('senha');
    let codigo = document.getElementById('codigo');
    let validarSenha = document.getElementById('senhaValidar');

        let dadosValidos = true;
        if (nome.value == '') {
            dadosValidos = false;
            alert('Preencha o campo nome');
        } else if (email.value == '') {
            dadosValidos = false;
            alert('Preencha o campo email');            
        } else if (login.value == '') {
            dadosValidos = false;
            alert('Preencha o campo login');            
        } else {
            if(senha.value != '') {
                if (senhaValidar.value == senha.value) {
                    
                    if(senha.value.length < 6){
                        dadosValidos = false;
                        alert('A senha precisa ter ao menos 6 carcteres');                
                    }
                } else {
                    dadosValidos = false;
                    alert('As senhas devem coincidir');            
                }
            } else {
                dadosValidos = false;
                alert('Preencha o campo senha');            
            }
        }
        if (dadosValidos) {
            let objUsuario = {
                "codigo": codigo.value,
                "nome": nome.value,
                "email": email.value,
                "login": login.value,
                "senha": senha.value,
            }

            if (codigo.value == "") {
                adicionarUsuarios(objUsuario);
            } else {
                editarUsuario(objUsuario);
            }  
        
        }
        
    return false;
}

window.onload = function(){
    getUsuarios();
}