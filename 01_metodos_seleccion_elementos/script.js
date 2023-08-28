//seleccionar un elemento por su ID
const miParrafo = document.getElementById('parrafo');
console.log(miParrafo);
 
//seleccionar todos los elementos que coincidan con el nombre de la etiqueta
const miElemento = document.getElementsByTagName('h2')
console.log(miElemento[0]);

// seleccionar el primer elemento que coincida con el grupo especificado o clase
const miEncabezado = document.querySelector('.encabezado')
console.log(miEncabezado)

const misElementosListas = document.querySelectorAll('.listas')
console.log(misElementosListas[0])

