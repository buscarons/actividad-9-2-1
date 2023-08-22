document.getElementById("buttonText").addEventListener("click",(e) => {
    
    const valor = document.getElementById("inputText").value;

    window.localStorage.setItem("dato", valor);
    console.log(window.localStorage);
})

