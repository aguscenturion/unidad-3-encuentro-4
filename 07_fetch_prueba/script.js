const apiRickAndMorty = "https://rickandmortyapi.com/api/character"
const contenedor = document.querySelector('.row')
const btnEjecutar = document.querySelector('.btn')

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error)
    }
}

async function traerDatos() {
    // contenedor.innerHTML = "Cargando...";
    const dataApi = await fetchData(apiRickAndMorty);
    const dataFinal = dataApi.results;

    console.log(dataFinal)
    // contenedor.innerHTML = "";




    dataFinal.map((personaje) => {
        //cree los elementos
        let col = document.createElement('div')
        let card = document.createElement('div')
        let img = document.createElement('img')
        let cardBody = document.createElement('div')
        let title = document.createElement('h5')
        let subtitulo = document.createElement('p')

        // agrego las clases a cada elemento
        col.classList.add("col-4", "pb-2")
        card.classList.add("card")
        img.classList.add("card-img-top");
        cardBody.classList.add("card-body")
        title.classList.add("card-title")
        subtitulo.classList.add("card-text")

        //agrego el contenido
        title.textContent = personaje.name;
        subtitulo.textContent = personaje.species;
        img.src = personaje.image;

        // agrego los hijos listos
        cardBody.appendChild(title)
        cardBody.appendChild(subtitulo)
        card.appendChild(img)
        card.appendChild(cardBody)
        col.appendChild(card);

        
        contenedor.appendChild(col)

    })

}

// traerDatos()
btnEjecutar.addEventListener('click', () => {
    traerDatos()
})



