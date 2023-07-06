

//abre lateralNav
let inputMenu = document.getElementById("inputBusqueda")
inputMenu.onclick = () => {
    document.getElementById("lateralNav").style.display="flex"
    document.getElementById("iconoBusqueda").style.visibility="hidden"
}
//cierra lateralNav
let btnCierraSideNav = document.getElementById("btnCerrarSideNav")
btnCierraSideNav.onclick = () => {
    document.getElementById("iconoBusqueda").style.visibility="visible"
    document.getElementById("lateralNav").style.display="none"
}
let moviesMinDiv = document.getElementById("opcionesLateral")

//buscador lateral
inputMenu.addEventListener("input",() =>{
    let valueBuscado = inputMenu.value
    if (valueBuscado == ""){
        moviesMinDiv.innerHTML=``
    } else {
    busquedaRes(valueBuscado,arrayAllMovies)}
})

function busquedaRes(buscado,array){
    let busqueda = array.filter(
        (dato) => dato.title.toLowerCase().includes(buscado.toLowerCase()) )
        moviesMinDiv.innerHTML=``
        imprime(busqueda)
}

//imprime miniCards en la barrita de navegacion

function imprime(array){
    for (let movies of array){
        let nuevoDiv = document.createElement("div")
        nuevoDiv.id=`${movies.id}`
        nuevoDiv.className="minMovieCard"
        nuevoDiv.innerHTML=`<div class="imagenMiniCard">
                                <img src="./${movies.image}" alt="logo de ${movies.title}">
                            </div>
                            <div class="dataMiniCard">
                                <div class="textMiniCard">
                                    <h4>${movies.title}</h4>
                                    <h4>${movies.year}</h4>
                                </div>
                                <div class="btnMiniCard">
                                    <label id="agregaFav${movies.id}" class="material-symbols-outlined">add</label>
                                </div>
                            </div>`
    moviesMinDiv.appendChild(nuevoDiv)

    let btnAgregaFav = document.getElementById(`agregaFav${movies.id}`)
    btnAgregaFav.addEventListener("click", () => {
        document.getElementById(`agregaFav${movies.id}`).innerHTML=``
        agregaFavArray(movies)
    })

    }
}

//seccion de catalogo de favoritos

let divFav = document.getElementById("containerFav")

let arrayFav = []

let arrayFavEnLS = JSON.parse(localStorage.getItem("array"))

if (arrayFavEnLS){
    arrayFav = arrayFavEnLS
    imprimeFav(arrayFav)
} 


//guardar en storage

function agregaFavArray(movieAdd){

    let movieAgregada = arrayFav.find((elem) => elem.title == movieAdd.title)
    if (movieAgregada == undefined){
        arrayFav.push(movieAdd)
        imprimeFav(arrayFav)
    }else{
        document.getElementById(`agregaFav${movieAdd.id}`).innerHTML=``
        window.scroll({
            top:0,
            behavior:'smooth'
        })
        let mensajeAgregado = document.createElement("div")
        mensajeAgregado.className = "mensajeAgregado animate__animated animate__backInUp"
        mensajeAgregado.innerHTML =`<div class="cuadroMensaje" >
                                        <h3 class="textoMensaje" >${movieAdd.title} ya fue agregado a Favoritos</h3>
                                        <div class="cerrarMensaje" >
                                            <label id="cerrarMensajeAlert${movieAdd.id}" class="material-symbols-outlined">close</label>
                                        </div>
                                    </div>`
        document.body.appendChild(mensajeAgregado)
        document.getElementById("bodyMain").style.overflowY="hidden"

        let btnCierreMensaje = document.getElementById(`cerrarMensajeAlert${movieAdd.id}`)
        btnCierreMensaje.onclick = () => {
            mensajeAgregado.className = "mensajeAgregado animate__animated animate__backOutUp"
            document.getElementById("bodyMain").style.overflowY="scroll"
        }
    }
}        
  

function imprimeFav(arrayFav){
    divFav.innerHTML=``
    for (let peli of arrayFav){
        let nuevoDivFav = document.createElement("div")
        nuevoDivFav.className="movieCard"
        nuevoDivFav.innerHTML=`<div class="dataMovie" id="${peli.id}">
                                <div class="imagenMovie">
                                    <img src="./${peli.image}" alt="logo ${peli.title}" width="80%">
                                </div>
                                <div class="containerData">
                                    <div class="barraData">
                                        <div class="movieTitle" >
                                            <h4>${peli.title}</h4>
                                            <h5>${peli.director}</h5>
                                            <h5>${peli.year}</h5>
                                        </div>
                                        <div class="botonMovie" >
                                            <label id="borrarMovie${peli.id}" class="botonBorraFav material-symbols-outlined">close</label>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        divFav.appendChild(nuevoDivFav)
        localStorage.setItem("array", JSON.stringify(arrayFav))
    
        let btnBorraFav = document.getElementById(`borrarMovie${peli.id}`)
        btnBorraFav.onclick = () => {
                borrarMoviesFav(peli.id)
        }
    }  
}

//borra favs
function borrarMoviesFav(indic){
    arrayFav = arrayFav.filter((pelicula) => pelicula.id != indic);
    localStorage.setItem("array", JSON.stringify(arrayFav))
    imprimeFav(arrayFav) 
}
