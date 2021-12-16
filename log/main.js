document.getElementById("mensaje").innerHTML = `Hola! ${localStorage.getItem("NombreUsuario")}!`

document.getElementById("exit").addEventListener("click", () => {
    
    alert("Borrando datos de usuario...")
    localStorage.clear();

});

let numTarea = 0;

document.getElementById("add").addEventListener("click", () => {

    let tarea = document.createElement("li");
    let content = document.getElementById("tarea").value;
    tarea.innerHTML = content;

    localStorage.setItem(`tarea${numTarea}`, content);    

    document.getElementById("tareas").insertAdjacentHTML("beforeend", `<li>${localStorage.getItem(`tarea${numTarea}`)}</li>`);

    numTarea++;

});

document.addEventListener("keydown", (e) => {

    if (e.key == "Enter") {

        e.preventDefault();
        document.getElementById("add").click();
        document.getElementById("tarea").value = "";

    }

});

document.getElementById("clear").addEventListener("click", () => {

    document.getElementById("tarea").value = "";
    document.getElementById("tareas").innerHTML = "";

    while (numTarea >= 0) {

        numTarea--;
        localStorage.removeItem(`tarea${numTarea}`);

    }


});