document.getElementById("mensaje").innerHTML = `Hola! ${localStorage.getItem("NombreUsuario")}!`

document.getElementById("exit").addEventListener("click", () => {
    
    alert("Borrando datos de usuario...")
    localStorage.clear();

});