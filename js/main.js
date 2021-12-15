let usuario = document.getElementById("usuario");
let password = document.getElementById("pass");
let add = document.getElementById("add");
let enviarDatos = document.getElementById("login");

const guardarDatos = () => {

    if (usuario.value == "" || usuario.value.startsWith(" ")) {

        alert("Porfavor, ingresar aunque sea un dígito en el formulario.")

    } else {

        localStorage.setItem("NombreUsuario", usuario.value);
        localStorage.setItem("Password", password.value);
        alert("Usuario añadido exitosamente, puede proceder a Entrar")

    }

}

const registrar = (e) => {

    if (localStorage.getItem("NombreUsuario") == null && localStorage.getItem("Password") == null) {

        e.preventDefault();
        alert("Porfavor añadir al usuario");

    }

    else if (usuario.value == localStorage.getItem("NombreUsuario") && password.value == localStorage.getItem("Password")) {} else {

        e.preventDefault();
        alert("Nombre de usuario o contraseña incorrectos.");

    }

}

add.addEventListener("click", guardarDatos);
enviarDatos.addEventListener("click", registrar);