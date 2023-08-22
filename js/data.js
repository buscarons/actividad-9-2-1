function traerDato() {
    let dato = localStorage.getItem("dato");
    let span = document.getElementById("data");
    span.innerHTML = dato;
    console.log(dato);
}

window.onload = traerDato();
