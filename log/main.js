document.getElementById("mensaje").innerHTML = `Hola! ${localStorage.getItem("NombreUsuario")}!`

document.getElementById("exit").addEventListener("click", () => {

    localStorage.clear();

});