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
