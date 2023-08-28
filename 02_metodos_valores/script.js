// selecciono los elementos del html
const miParrafo = document.getElementById('parrafo')
const input = document.getElementById('miInput');
const boton = document.getElementById('btn')

const botonCambiar = document.getElementById('btn-cambiar')
const contenedorBody = document.querySelector('.contenedor')

//agregar / editar atributos
miParrafo.textContent = "Mi parrafo Rojo"
miParrafo.style.color = "red"
// miParrafo.style.backgroundColor = "blue"

//modificar o agregar
miParrafo.setAttribute('style','color:red; background-color: blue')

//traer el valor
console.log(miParrafo.textContent)
console.log(miParrafo.style)


//eliminar algun atributo
miParrafo.style.color = ""
miParrafo.removeAttribute('style')


//ATRIBUTOS DEL INPUT
// guardar en una variable el valor del elemento input
const valorInput = input.value

//agregamos eventos click con un boton
boton.addEventListener('click', () => {
    miParrafo.textContent = "cambiaste con el click"
})


//capturamos el valor del input
input.addEventListener('change', ()=>{
    let valorInput = input.value
    miParrafo.textContent = valorInput
})


//METODOS DE CLASES
//agregamos eventos click con un boton
botonCambiar.addEventListener('click', () => {
    let claseContenedor = contenedorBody.classList;

    //me coloca la clase nocturno si no tiene, y si la tiene, la quita
    claseContenedor.toggle('nocturno');
    //classList.contains verifica si contiene la clase nocturno
    if(claseContenedor.contains('nocturno')){
        botonCambiar.textContent = "Modo Dia"
    }else{
        botonCambiar.textContent = "Modo Nocturno"
    }
})

// contenedorBody.classList.remove('nombre de la clase');
// contenedorBody.classList.replace('nombre que queremos colocar','nombre que queremos reemplazar');


