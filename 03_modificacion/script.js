const contenedor = document.getElementById('contenedor-lista');

console.log(contenedor)
// crear elementos
let elementoLista1 = document.createElement('li');
let elementoLista2 = document.createElement('li');
let elementoLista3 = document.createElement('li');

// agregar contenido a cada elemento creado
elementoLista1.textContent = "Este es el elemento 1"
elementoLista2.textContent = "Este es el elemento 2"
elementoLista3.textContent = "Este es el ultimo elemento"

// ver por consola cada elemento con creado con su contenido 
console.log(elementoLista1)
console.log(elementoLista2)
console.log(elementoLista3)

// agregar como hijo cada elemento creado con su contenido al padre contenedor
contenedor.appendChild(elementoLista1)
contenedor.appendChild(elementoLista2)
contenedor.appendChild(elementoLista3)


// iterar 5 veces y agregar elementos en cada iteracion al html
for (let index = 1; index <= 5; index++) {
    let elemento = document.createElement('li');
    elemento.textContent = `lista nueva ${index}`
    contenedor.appendChild(elemento)
}   