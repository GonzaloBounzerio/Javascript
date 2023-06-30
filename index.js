
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

const movie1 = new fileMovie (1,"Star Wars Episodio IV: Una Nueva Esperanza","assets/img/starwars4-portada.jpg","George Lucas",1977)

arrayAllMovies.push(movie1)

console.log(movie1)
console.log(arrayAllMovies)

let movies = document.getElementById("containerFav")
for(let movie of arrayAllMovies){
let moviesDiv = document.createElement("div")
moviesDiv.className = "movieCard"
moviesDiv.innerHTML = `<div class="dataMovie">
                          <img src="${movie.image}" alt="logo ${movie.title}" width="100px">
                          <div class="movieTitle" >
                             <h4>${movie.title}</h4>
                             <h5>${movie.director}</h5>
                             <h5>${movie.year}</h5>
                          </div>
                       </div>`
movies.appendChild(moviesDiv)
}