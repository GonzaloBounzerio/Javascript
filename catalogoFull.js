
// muestraCatalogo
let arrayFullEnLS = JSON.parse(localStorage.getItem("arrayFull"))

muestraCatalogo(arrayFullEnLS)

function muestraCatalogo(array){
    let divCatalogo = document.getElementById("catalogoFull")
    divCatalogo.innerHTML=``
    for (let data of array){
        let nuevoDivCat = document.createElement("div")
        nuevoDivCat.className="movieCard"
        nuevoDivCat.innerHTML=`<div class="imagenMovie">
                                    <img  id="imagen${data.id}" src="..//${data.image}" alt="logo ${data.title}" width="80%">
                                </div>
                                <div class="containerData">
                                    <div class="barraData">
                                        <div class="movieTitle" >
                                            <h4>${data.title}</h4>
                                            <h5>${data.director}</h5>
                                            <h5>${data.year}</h5>
                                            <h6>${data.val}% Rotten Tomatoes</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        divCatalogo.appendChild(nuevoDivCat)

        let muestraTrailer = document.getElementById(`imagen${data.id}`)
        muestraTrailer.style.cursor="pointer"
        muestraTrailer.onclick = () => {
            abreTrailer(`${data.id}`)
        }
    }
}

let selectOrden = document.getElementById("selectorOrden")
selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    switch(selectOrden.value){
       case "1":
          ordenarAlfabeticamenteTitulo(arrayFullEnLS)
       break
       case "2":
          ordenarMenorMayor(arrayFullEnLS)
       break
       case "3":
          valoracionRotten(arrayFullEnLS)
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
    muestraCatalogo(arrayAlfabetico)
}

//ordena por año de estreno

function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.year - b.year)
    muestraCatalogo(menorMayor)
}

//ordena por claificacion de Rotten Tomatoes

function valoracionRotten(array){
    const calific = [].concat(array)
    calific.sort((a,b) => b.val - a.val)
    muestraCatalogo(calific)
}

function ayudaUso(indic){ //el indicador dice "Bienvenido" si entra por primera vez y "Ayuda" si clickea esa opcion
    Swal.fire({
        title: `${indic}`,
        text: 'A continuación te explico cómo funciona esta página',
        icon: 'info',
        position: "top",
        confirmButtonText: 'Vamos!'
    }).then((result) => {
        Swal.fire({
            title: 'Instrucciones',
            text: 'Navega por el catálogo',
            icon: 'info',
            position: "top",
            confirmButtonText: 'Siguiente'
        }).then((result) => {
            Swal.fire({
                title: 'Instrucciones',
                text: 'Puedes elegir el orden de las películas',
                icon: 'info',
                position: "top",
                confirmButtonText: 'Siguiente'
            }).then((result) => {
                Swal.fire({
                    title: 'Instrucciones',
                    text: 'Además, podés agregar nuevas películas clickeando el boton inferior derecho',
                    icon: 'success',
                    position: "top",
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