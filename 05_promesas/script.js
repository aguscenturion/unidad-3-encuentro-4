const usuario = "asdasd"

//PRIMER CASO CON PROMESAS
const miPromesa = new Promise((resolve, reject) =>{
    if(usuario === "admin"){
        resolve(usuario)
    }else{
        reject('no es admin')
    }
})

miPromesa.then((data) => {
    console.log('la data es:', data)
}).catch((error) => {
    console.error('el error es:', error)
})


//OTRO CASO CON PROMESAS

console.log('esto se ejecuta primero')
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        let respuesta = '1. Esta es la primer informacion'
        resolve(respuesta)
    }, 3000);
})

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        let respuesta = '2. Esta es informacion muy importante'
        resolve(respuesta)
    }, 5000);
})

const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        let respuesta = '3. Esta informacion es rapida'
        resolve(respuesta)
    }, 1000);
})

//MOSTRAR PROMESAS
// promesa1.then((data)=> {
//     console.log(data)
// })
// promesa2.then((data)=> {
//     console.log(data)
// })
// promesa3.then((data)=> {
//     console.log(data)
// })

console.log('esto se ejecuta ultimo')

// UTILIZAMOS ASYNC AWAIT CON PROMESAS PARA ESPECIFICAR EL ORDEN
async function ejecutarPromesas(){
    let respuestaPromesa1 = await promesa1;
    console.log(respuestaPromesa1)

    let respuestaPromesa2 = await promesa2;
    console.log(respuestaPromesa2)

    let respuestaPromesa3 = await promesa3;
    console.log(respuestaPromesa3)
}

ejecutarPromesas()


