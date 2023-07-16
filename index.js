

//primer inicio

function primerAyudaUso(){
    if ((JSON.parse(localStorage.getItem("visited")) == undefined)){    
         ayudaUso("Bienvenido")
         localStorage.setItem("visited", JSON.stringify(true))
    }
 }

//boton ayuda

let btnAyuda = document.getElementById("btnAyuda")
btnAyuda.onclick = () => {
    ayudaUso("Ayuda")
}

function ayudaUso(indic){ //el indicador dice "Bienvenido" si entra por primera vez y "Ayuda" si clickea esa opcion
    window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    Swal.fire({
        title: `${indic}`,
        text: 'A continuación te explico cómo funciona esta página',
        icon: 'info',
        position: `top`,
        confirmButtonText: 'Vamos!'
    }).then((result) => {
        Swal.fire({
            title: 'Instrucciones',
            text: 'Elige una película en el buscador',
            icon: 'info',
            position: `top`,
            confirmButtonText: 'Siguiente'
        }).then((result) => {
            Swal.fire({
                title: 'Instrucciones',
                text: 'Agregala a favoritos, cada vez que entres, la podrás ver más rápido',
                icon: 'info',
                position: `top`,
                confirmButtonText: 'Siguiente'
            }).then((result) => {
                Swal.fire({
                    title: 'Instrucciones',
                    text: 'Además, podés agregar más opciones al catálogo',
                    icon: 'success',
                    position: `top`,
                    confirmButtonText: 'Listo!'
                })
    })
    })
    })
}  

// adjunta data del json
    fetch(`./data.json`)
        .then ((resp) => resp.json())
        .then ((data) => {
        
        for(let pelicula of data){
            let nuevaPeli = new fileMovie(pelicula.id,pelicula.title,pelicula.image,pelicula.director,pelicula.year,pelicula.trailer,pelicula.val)
            arrayAllMovies.push(nuevaPeli)
        }
        localStorage.setItem("arrayFull", JSON.stringify(arrayAllMovies))
        imprimeCat(arrayAllMovies)
        }) 


let arrayAllMovies = [] 
//

//agrega los agregados

if (localStorage.getItem("agregados")){
    let agregados = JSON.parse(localStorage.getItem("agregados"))
    for (let dataNueva of agregados){
        arrayAllMovies.unshift(dataNueva)
    }
}

//buscador

let inputMenu = document.getElementById("inputBusqueda")

let moviesIndexDiv = document.getElementById("containerIndex")

inputMenu.addEventListener("input",() =>{
    let valueBuscado = inputMenu.value
    if (valueBuscado == ""){
        imprimeCat(arrayAllMovies)
    } else {
    busquedaRes(valueBuscado,arrayAllMovies)}
})

function busquedaRes(buscado,array){
    let busqueda = array.filter(
        (dato) => dato.title.toLowerCase().includes(buscado.toLowerCase()) )
        moviesIndexDiv.innerHTML=``
        if (busqueda.length == 0){
            let subtituloNoMatch = document.createElement("div")
            subtituloNoMatch.className = "subtitulo2"
            subtituloNoMatch.innerHTML=`No se encontraron resultados que coincidan con la búsqueda`
            moviesIndexDiv.appendChild(subtituloNoMatch)
        }else{
            imprimeCat(busqueda)
        }
}

function imprimeCat(array){
    moviesIndexDiv.innerHTML=``
    for (let peli of array){
        let nuevoDivCat = document.createElement("div")
        nuevoDivCat.className="movieCard"
        nuevoDivCat.innerHTML=`<div class="dataMovie" id="${peli.id}">
                                <div class="imagenMovie">
                                    <img id="imagen${peli.id}" src="./${peli.image}" alt="logo ${peli.title}" width="80%">
                                </div>
                                <div class="containerData">
                                    <div class="barraData">
                                        <div class="movieTitle" >
                                            <h4>${peli.title}</h4>
                                            <h5>${peli.director}</h5>
                                            <h5>${peli.year}</h5>
                                            <h6>${peli.val}% Rotten Tomatoes</h6>
                                        </div>
                                        <div class="botonAgregaFav" >
                                            <label id="agregaMovie${peli.id}" class="material-symbols-outlined">add</label>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        moviesIndexDiv.appendChild(nuevoDivCat)

        let muestraTrailer = document.getElementById(`imagen${peli.id}`)
        muestraTrailer.style.cursor="pointer"
        muestraTrailer.onclick = () => {
            abreTrailer(`${peli.id}`)
        }

        let btnAgregaFav = document.getElementById(`agregaMovie${peli.id}`)
        btnAgregaFav.onclick = () => {
            agregaFav(peli)
            btnAgregaFav.remove()
        }
    }  
}

let selectOrden = document.getElementById("selectorOrden")
selectOrden.addEventListener("change", () => {
    switch(selectOrden.value){
       case "1":
          ordenarAlfabeticamenteTitulo(arrayAllMovies)
       break
       case "2":
          ordenarMenorMayor(arrayAllMovies)
       break
       case "3":
          valoracionRotten(arrayAllMovies)
       break
    }
 }
 )

//ordenar las peliculas alfabeticamente por nombre

function ordenarAlfabeticamenteTitulo(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort( (a,b) =>{
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
        }
        return 0
    })
    imprimeCat(arrayAlfabetico)
}

//ordena por año de estreno

function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.year - b.year)
    imprimeCat(menorMayor)
}

//ordena por claificacion de Rotten Tomatoes

function valoracionRotten(array){
    const calific = [].concat(array)
    calific.sort((a,b) => b.val - a.val)
    imprimeCat(calific)
}


//seccion de catalogo de favoritos

let arrayFav = []

let divFav = document.getElementById("containerFav")

if (localStorage.getItem("arrayFav")){
    arrayFav = JSON.parse(localStorage.getItem("arrayFav"))
}

function agregaFav(data){
    let existe = arrayFav.find( (element) => element.id == data.id)
    if (existe == undefined){
        arrayFav.push(data)
        localStorage.setItem("arrayFav", JSON.stringify(arrayFav))
        window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        Toastify({
            text: `'${data.title}' se agregó a favoritos`,
            duration: 3000,
            position: "left", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              fontSize:"30px",
            },
          }).showToast();
    }else{
        window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        Toastify({
            text: `'${data.title}' ya fue agregada`,
            duration: 3000,
            position: "left", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              fontSize:"30px",
            },
          }).showToast();
    }
}


let abreFavs = document.getElementById("btnFav")
abreFavs.onclick = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    document.getElementById("pantallaEmergenteFavs").style.visibility="visible"
    document.getElementById("pantallaEmergenteFavs").className="animate__animated animate__fadeInLeft"
    document.getElementById("btnAgregarCat").style.visibility="hidden"
    document.getElementById("btnFav").style.visibility="hidden"
    document.getElementById("bodyMain").style.overflow="hidden"
    imprimeFav(arrayFav)
}

let cierraFavs = document.getElementById("cierraVentanaFavs")
cierraFavs.onclick = () => {
    document.getElementById("pantallaEmergenteFavs").className="animate__animated animate__fadeOutRight"
    document.getElementById("btnAgregarCat").style.visibility="visible"
    document.getElementById("btnFav").style.visibility="visible"
    document.getElementById("bodyMain").style.overflowY="scroll"
}

function imprimeFav(array){
    divFav.innerHTML=``
    if (array.length == 0 || !localStorage.getItem("arrayFav")){
        let nuevoDivFav = document.createElement("div")
        nuevoDivFav.className = "subtitulo2"
        nuevoDivFav.innerHTML = `No tenés favoritos aún`
        divFav.appendChild(nuevoDivFav)
    }else{
        for (let peli of array){
            let nuevoDivFav = document.createElement("div")
            nuevoDivFav.className = "movieCardFav"
            nuevoDivFav.innerHTML = `<div class="dataMovieFav" id="${peli.id}">
                                    <div class="imagenMovieFav">
                                        <img id="imagen${peli.id}Fav" src="./${peli.image}" alt="logo ${peli.title}" width="80%">
                                    </div>
                                    <div class="containerDataFav">
                                        <div class="barraDataFav">
                                            <div class="movieTitleFav" >
                                                <h4>${peli.title}</h4>
                                                <h5>${peli.director}</h5>
                                                <h5>${peli.year}</h5>
                                                <h6>${peli.val}% Rotten Tomatoes</h6>
                                            </div>
                                            <div class="botonBorraFav" >
                                                <label id="borraFav${peli.id}" class="material-symbols-outlined">close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            divFav.appendChild(nuevoDivFav)

            let btnBorraFav = document.getElementById(`borraFav${peli.id}`)
            btnBorraFav.onclick = () => {
                borraFav(peli.title)
            }
        }
    }
}

function borraFav(indic){
    arrayFav = arrayFav.filter((element) => element.title != indic)
    localStorage.setItem("arrayFav", JSON.stringify(arrayFav))
    imprimeFav(arrayFav)
    Toastify({
        text: `'${indic}' fue borrado de favoritos`,
        duration: 3000,
        position: "left", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          fontSize:"30px",
        },
      }).showToast();
}