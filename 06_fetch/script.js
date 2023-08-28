const api_link = 'https://jsonplaceholder.typicode.com/posts';
const boton = document.getElementById('btn');
const contenedorLista = document.getElementById('contenedor')

// function fetchDatos(url){
//     return fetch(url)
//       .then(response => response.json())
//       .then(data => data)
//       .catch(error => console.error(error))
// }

//codigo fetch reutilizable en todo mi codigo
async function traerDataFetch(url){
    try {
        //todo el codigo si sale bien
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('el error es', error)
    }
}

// codigo a ejecutar para agregar datos de un url con fetch
//no tan reutilizable
async function agregarDatos(url){
    const datosFetch = await traerDataFetch(url)
    const nuevosDatos = datosFetch.slice(0,10)
    
    nuevosDatos.map((user) => {
        let nuevoElementoLi = document.createElement('li')
        nuevoElementoLi.textContent = user.title;
        contenedorLista.appendChild(nuevoElementoLi)
    })
}

//cuando se aprete click en el boton seleccionado ejecuta la funcion agregarDatos
boton.addEventListener('click', () => {
    agregarDatos(api_link)
})





