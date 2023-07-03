
class fileMovie {
    constructor(id,title,image,director,year){
        this.id = id;
        this.title = title;
        this.image = image;
        this.director = director;
        this.year = year;
    }
}

const arrayAllMovies=[]

const movie1 = new fileMovie(1,"Star Wars Episodio I: La Amenaza Fantasma","assets/img/starwars1-portada.jpg","George Lucas",1999)
const movie2 = new fileMovie(2,"Star Wars Episodio II: La Guerra de los Clones","assets/img/starwars2-portada.jpg","George Lucas",2002)
const movie3 = new fileMovie(3,"Star Wars Episodio III: La Venganza de los Sith","assets/img/starwars3-portada.jpg","George Lucas",2005)
const movie4 = new fileMovie(4,"Star Wars Episodio IV: Una Nueva Esperanza","assets/img/starwars4-portada.jpg","George Lucas",1977)
const movie5 = new fileMovie(5,"Star Wars Episodio V: El Imperio Contraataca","assets/img/starwars5-portada.jpg","Irvin Kershner",1980)
const movie6 = new fileMovie(6,"Star Wars Episodio VI: El Regreso del Jedi","assets/img/starwars6-portada.jpg","Richard Marquand",1983)
const movie7 = new fileMovie(7,"Star Wars Episodio VII: El Despertar de la Fuerza","assets/img/starwars7-portada.jpg","J.J. Abrams",2015)
const movie8 = new fileMovie(8,"Star Wars Episodio VIII: Los Últimos Jedi","assets/img/starwars8-portada.jpg","Rian Johnson",2017)
const movie9 = new fileMovie(9,"Star Wars Episodio IX: El Ascenso de Skywalker","assets/img/starwars9-portada.jpg","J.J. Abrams",2019)
const movie10 = new fileMovie(10,"Rogue One: una historia de Star Wars","assets/img/rogueone-portada.jpg","Gareth Edwards",2016)
const movie11 = new fileMovie(11,"Solo: una historia de Star Wars","assets/img/solo-portada.jpg","Ron Howard",2018)

arrayAllMovies.push(movie1)
arrayAllMovies.push(movie2)
arrayAllMovies.push(movie3)
arrayAllMovies.push(movie4)
arrayAllMovies.push(movie5)
arrayAllMovies.push(movie6)
arrayAllMovies.push(movie7)
arrayAllMovies.push(movie8)
arrayAllMovies.push(movie9)
arrayAllMovies.push(movie10)
arrayAllMovies.push(movie11)

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
        nuevoDiv.className="minMovieCard"
        nuevoDiv.innerHTML=`<div class="imagenMiniCard">
                                <img src="${movies.image}" alt="logo de ${movies.title}">
                            </div>
                            <div class="dataMiniCard">
                                <div class="textMiniCard">
                                    <h4>${movies.title}</h4>
                                    <h4>${movies.year}</h4>
                                </div>
                                <div id="btnMiniCard${movies.id}">
                                    <span class="agregaFav material-symbols-outlined">add</span>
                                </div>
                            </div>`
    moviesMinDiv.appendChild(nuevoDiv)
    }
}




// //agrega Favs
// for (let num=1;num<=11;num++){
// let btnAgregaFav = document.getElementById(num)
// console.log(num)
// btnAgregaFav.addEventListener("click",console.log(num))
// }

    for (let dato of arrayAllMovies){
        let divFav = document.getElementById("containerFav")
        let nuevoDivFav = document.createElement("div")
        nuevoDivFav.className="movieCard"
        nuevoDivFav.innerHTML=`<div class="dataMovie">
                                 <div class="imagenMovie">
                                     <img src="${dato.image}" alt="logo ${dato.title}" width="80%">
                                 </div>
                                 <div class="containerData">
                                     <div class="barraData">
                                         <div class="movieTitle" >
                                             <h4>${dato.title}</h4>
                                             <h5>${dato.director}</h5>
                                             <h5>${dato.year}</h5>
                                         </div>
                                         <div class="botonMovie" >
                                             <label class="borrarMovie material-symbols-outlined">close</label>
                                         </div>
                                     </div>
                                 </div>
                             </div>`
        divFav.appendChild(nuevoDivFav)
    }