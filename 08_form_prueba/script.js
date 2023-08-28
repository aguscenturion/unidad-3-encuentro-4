const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    //validar nombre
    const inputNombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('error-nombre')

    if(inputNombre.value.trim() === ""){
        errorNombre.textContent = 'Por favor, introduzca tu nombre'
        errorNombre.style.visibility = "visible";
        setTimeout(() => {
            errorNombre.textContent = "";
        }, 5000);
    } else {
        errorNombre.textContent = ""
    }

    //validar apellido
    const inputApellido = document.getElementById('apellido');
    const errorApellido = document.getElementById('error-apellido')
    if(inputApellido.value.trim() === ""){
        errorApellido.textContent = 'Por favor, introduzca tu apellido'
        errorApellido.style.visibility = "visible";
        setTimeout(() => {
            errorApellido.textContent = "";
        }, 5000);
    } else {
        errorApellido.textContent = ""
    }


    //validar contraseña
    const inputContrasenia = document.getElementById('contrasenia');
    const errorContrasenia = document.getElementById('error-contrasenia')
    if(inputContrasenia.value.trim().length < 8){
        errorContrasenia.textContent = 'La contraseña debe tener al menos 8 caracteres'
        errorContrasenia.style.visibility = "visible";
        setTimeout(() => {
            errorContrasenia.textContent = "";
        }, 5000);
    } else {
        errorContrasenia.textContent = ""
    }


    if(!errorNombre.textContent && !errorApellido.textContent && !errorContrasenia.textContent){
        alert('Enviado Correctamente')
        formulario.reset()
        window.location.href = '/09_fetch_prueba/index.html'
    }
})

