
// muestraCatalogo

let divCatalogo = document.getElementById("catalogoFull")

for (let data of arrayAllMovies){
    let nuevoDivCat = document.createElement("div")
    nuevoDivCat.className="movieCard"
    nuevoDivCat.innerHTML=`<div class="dataMovie" id="${data.id}">
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
                                </div>
                            </div>
                        </div>`
    divCatalogo.appendChild(nuevoDivCat)
}