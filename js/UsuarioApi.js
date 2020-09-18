let url = "http://localhost:8080";

function getUsuarios() {

    let data = new FormData();
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            let usuarios = JSON.parse(this.responseText);
            
            exibirUsuarios(usuarios);
        }
    });

    xhr.open("GET", url);
    xhr.send(data)
}