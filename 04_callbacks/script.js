// funcion que recibe por parametro un texto y una funcion(callback)
function mostrarMensaje(mensaje, callback){
    console.log(mensaje)
    callback()
}

//la funcion que vamos a pasar como callback a la otra funcion
function mostrarMensajeConfirmacion(){
    console.log('Mensaje enviado correctamente')
}

//ejecutamos la funcion que recibe un msj y un callback, por lo tanto le pasamos por
//parametro el mensaje y el callback(la funcion)
mostrarMensaje('Me comunico nuevamente con vos por mensaje', mostrarMensajeConfirmacion)