
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
                                    <span class="agregaFav material-symbols-outlined">add</span>
                                </div>
                            </div>`
    moviesMinDiv.appendChild(nuevoDiv)
    }
}



    for (let data of arrayAllMovies){
        let divFav = document.getElementById("containerFav")
        let nuevoDivFav = document.createElement("div")
        nuevoDivFav.className="movieCard"
        nuevoDivFav.innerHTML=`<div class="dataMovie" id="${data.id}">
                                 <div class="imagenMovie">
                                     <img src="${data.image}" alt="logo ${data.title}" width="80%">
                                 </div>
                                 <div class="containerData">
                                     <div class="barraData">
                                         <div class="movieTitle" >
                                             <h4>${data.title}</h4>
                                             <h5>${data.director}</h5>
                                             <h5>${data.year}</h5>
                                         </div>
                                         <div class="botonMovie" >
                                             <label class="borrarMovie material-symbols-outlined">close</label>
                                         </div>
                                     </div>
                                 </div>
                             </div>`
        divFav.appendChild(nuevoDivFav)
    }
