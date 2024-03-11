function calculaAreaRetangulo(){
    let ladoa = document.getElementById("entrada-A").value;
    let ladob = document.getElementById("entrada-B").value;

    let area = ladoa * ladob;

    document.getElementById("resultado").value = area
}