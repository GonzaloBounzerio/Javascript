
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

//primer inicio

function primerAyudaUso(){
   if ((JSON.parse(localStorage.getItem("array")) == undefined)){    
        ayudaUso("Bienvenido")
   }
}

function ayudaUso(indic){ //el indicador dice "Bienvenido" si entra por primera vez y "Ayuda" si clickea esa opcion
    Swal.fire({
        title: `${indic}`,
        text: 'A continuación te explico cómo funciona esta página',
        icon: 'info',
        confirmButtonText: 'Vamos!'
    }).then((result) => {
        Swal.fire({
            title: 'Instrucciones',
            text: 'Elige una película en el buscador',
            icon: 'info',
            confirmButtonText: 'Siguiente'
        }).then((result) => {
            Swal.fire({
                title: 'Instrucciones',
                text: 'Agregala a favoritos, cada vez que entres, la verás más rápido',
                icon: 'info',
                confirmButtonText: 'Siguiente'
            }).then((result) => {
                Swal.fire({
                    title: 'Instrucciones',
                    text: 'Además, podés ver todo el catálogo con nuetras opciones',
                    icon: 'success',
                    confirmButtonText: 'Listo!'
                })
    })
    })
    })
}  

//boton ayuda

let btnAyuda = document.getElementById("btnAyuda")
btnAyuda.onclick = () => {
    ayudaUso("Ayuda")
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
        if (JSON.parse(localStorage.getItem("array")) == undefined){
            Toastify({
                text: `Felicitaciones, agregaste la primer película a favoritos`,
                duration: 3000,
                gravity: "top", 
                position: "right", 
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    width: "auto",
                    height: "auto",
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "30px"
                },
            }).showToast();
        }
        arrayFav.push(movieAdd)
        imprimeFav(arrayFav)
    }else{
        Toastify({
            text: `${movieAdd.title} ya fue agregada`,
            duration: 4000,
            close: true,
            gravity: "top",
            position: "right", 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: "400px",
                height: "auto",
                padding: "5px",
                textAlign: "center",
                fontSize: "25px"
            },
        }).showToast();
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