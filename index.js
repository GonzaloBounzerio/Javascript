
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


function imprime(array){
    for (let movies of array){
        let nuevoDiv = document.createElement("div")
        nuevoDiv.id=`${movies.id}`
        nuevoDiv.className="minMovieCard"
        nuevoDiv.innerHTML=`<div class="imagenMiniCard">
                                <img src="${movies.image}" alt="logo de ${movies.title}">
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

let arrayFav = []
let divFav = document.getElementById("containerFav")

function agregaFavArray(movieAdd){

    let movieAgregada = arrayFav.find((elem) => elem.id == movieAdd.id)
    if (movieAgregada == undefined){
        arrayFav.push(movieAdd)
        imprimeFav(arrayFav)
    }else{
        document.getElementById(`agregaFav${movieAdd.id}`).innerHTML=``
        alert("Ya fue agregada") // hola profe, cuando corrijas esta parte podrias indicarme como hacer para que no se vuelva a imprimir el logo de sumar, para no tener que usar un alert gracias
    }
}        
    
    function imprimeFav(arrayFav){
        divFav.innerHTML=``
        for (let peli of arrayFav){
            let nuevoDivFav = document.createElement("div")
            nuevoDivFav.className="movieCard"
            nuevoDivFav.innerHTML=`<div class="dataMovie" id="${peli.id}">
                                    <div class="imagenMovie">
                                        <img src="${peli.image}" alt="logo ${peli.title}" width="80%">
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
        
            let btnBorraFav = document.getElementById(`borrarMovie${peli.id}`)
            btnBorraFav.onclick = () => {
                borraArrayFav(arrayFav,peli.id)
            }
        }  
    }


//borraFav

function borraArrayFav(arrayFav,num){
    arrayFav = arrayFav.filter(pelicula => pelicula.id != `${num}`);
    console.log(arrayFav)
    imprimeFav(arrayFav)            //cuando borro no puedo volver a agregarla, idce que ya existe el id, por que es asi?
}