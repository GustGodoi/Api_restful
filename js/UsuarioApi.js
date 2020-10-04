function getUsuarios() {
    var data = new FormData();

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            exibirUsuarios(usuarios);
        }
    });

    xhr.open("GET", "http://localhost:8080");

    xhr.send(data);
}

function exibirUsuarios(usuarios) {
    var div = document.getElementById("conteudo");
    div.innerHTML = usuarios[0].nome;
    inserirLinha(usuarios[0]);
}

function adicionarUsuarios(objUsuario) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            getUsuarios();
            alert('Usuário inserido com sucesso')
        }   
    });

    xhr.open("POST", "http://localhost:8080");

    xhr.send(JSON.stringify(objUsuario));
}

function deleteUsuario(cod) {
    var data = new FormData();

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            getUsuarios();
            alert('Usuário deletado com sucesso');
        }
    });

    xhr.open("DELETE", "http://localhost:8080"+"?cod="+cod);

    xhr.send(data);
}

function editarUsuario(objUsuario) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            getUsuarios();
            alert('Usuário alterado com sucesso');
        }   
    });

    xhr.open("PUT", "http://localhost:8080");

    xhr.send(JSON.stringify(objUsuario));
}