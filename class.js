
//archivo JS donde se generan las clases y ctes con las que trabajo

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

const movie1 = new fileMovie(1,"Star Wars Episodio I: La Amenaza Fantasma","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars1-portada.jpg","George Lucas",1999)
const movie2 = new fileMovie(2,"Star Wars Episodio II: La Guerra de los Clones","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars2-portada.jpg","George Lucas",2002)
const movie3 = new fileMovie(3,"Star Wars Episodio III: La Venganza de los Sith","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars3-portada.jpg","George Lucas",2005)
const movie4 = new fileMovie(4,"Star Wars Episodio IV: Una Nueva Esperanza","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars4-portada.jpg","George Lucas",1977)
const movie5 = new fileMovie(5,"Star Wars Episodio V: El Imperio Contraataca","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars5-portada.jpg","Irvin Kershner",1980)
const movie6 = new fileMovie(6,"Star Wars Episodio VI: El Regreso del Jedi","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars6-portada.jpg","Richard Marquand",1983)
const movie7 = new fileMovie(7,"Star Wars Episodio VII: El Despertar de la Fuerza","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars7-portada.jpg","J.J. Abrams",2015)
const movie8 = new fileMovie(8,"Star Wars Episodio VIII: Los Últimos Jedi","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars8-portada.jpg","Rian Johnson",2017)
const movie9 = new fileMovie(9,"Star Wars Episodio IX: El Ascenso de Skywalker","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/starwars9-portada.jpg","J.J. Abrams",2019)
const movie10 = new fileMovie(10,"Rogue One: una historia de Star Wars","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/rogueone-portada.jpg","Gareth Edwards",2016)
const movie11 = new fileMovie(11,"Solo: una historia de Star Wars","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/solo-portada.jpg","Ron Howard",2018)
const movie12 = new fileMovie(12,"Avengers: Los Vengadores de Marvel","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/avengers1-portada.jpg","Joss Whedon",2012)
const movie13 = new fileMovie(13,"Avengers: La Era de Ultron","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/avengers2-portada.jpg","Joss Whedon",2015)
const movie14 = new fileMovie(14,"Avengers: Infinity War","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/avengers3-portada.jpg","Anthony Russo, Joe Russo",2018)
const movie15 = new fileMovie(15,"Avengers: Endgame","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/avengers4-portada.jpg","Anthony Russo, Joe Russo",2019)
const movie16 = new fileMovie(16,"Volver al Futuro","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/backfuture-portada.jpg","Robert Zemeckis",1985)
const movie17 = new fileMovie(17,"Bastardos sin gloria","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/bastardos-portada.jpg","Quentin Tarantino",2009)
const movie18 = new fileMovie(18,"Batman Inicia","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/batman1-portada.jpg","Christopher Nolan",2005)
const movie19 = new fileMovie(19,"Batman: el Caballero de la Noche","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/batman2-portada.jpg","Christopher Nolan",2008)
const movie20 = new fileMovie(20,"Batman: el Caballero de la Noche asciende","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/batman3-portada.jpg","Christopher Nolan",2012)
const movie21 = new fileMovie(21,"American Beauty","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/bellezaamericana-portada.jpg","Sam Mendes",2000)
const movie22 = new fileMovie(22,"Los Cazafantasmas","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/cazafantasmas-portada.jpg","Ivan Reitman",1984)
const movie23 = new fileMovie(23,"Cisne Negro","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/cisnenegro-portada.jpg","Darren Aronofsky",2011)
const movie24 = new fileMovie(24,"La Era del Hielo","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/erahielo1-portada.jpg","Chris Wedge",2002)
const movie25 = new fileMovie(25,"La Era del Hielo 2","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/erahielo2-portada.jpg","Carlos Saldanha",2006)
const movie26 = new fileMovie(26,"La Era del Hielo 3","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/erahielo3-portada.jpg","Carlos Saldanha",2009)
const movie27 = new fileMovie(27,"La Era del Hielo 4","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/erahielo4-portada.jpg","Mike Thurmeier, Steve Martino",2012)
const movie28 = new fileMovie(28,"La Era del Hielo 5","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/erahielo5-portada.jpg","Mike Thurmeier",2016)
const movie29 = new fileMovie(29,"ET: el extraterrestre","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/et-portada.jpg","Steven Spielberg",1982)
const movie30 = new fileMovie(30,"El exorcista","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/exorcista-portada.jpg","William Friedkin",1974)
const movie31 = new fileMovie(31,"El Club de la Pelea","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/fightclub-portada.jpg","David Fincher",1999)
const movie32 = new fileMovie(32,"Forrest Gump","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/forrest-portada.jpg","Robert Zemeckis",1994)
const movie33 = new fileMovie(33,"Gladiador","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/gladiator-portada.jpg","Ridley Scott",2000)
const movie34 = new fileMovie(34,"Iron Man : el hombre de hierro","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/ironman1-portada.jpg","Jon Favreau",2008)
const movie35 = new fileMovie(35,"Iron Man 2","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/ironman2-portada.jpg","Jon Favreau",2010)
const movie36 = new fileMovie(36,"Iron Man 3","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/ironman3-portada.jpg","Shane Black",2013)
const movie37 = new fileMovie(37,"El extraño mundo de Jack","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/mundojack-portada.jpg","Henry Selick",1993)
const movie38 = new fileMovie(38,"La Naranja Mecánica","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/naranjamecanica-portada.jpg","Stanley Kubrick",1985)
const movie39 = new fileMovie(39,"El Padrino","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/padrino1-portada.jpg","Francis Ford Coppola",1972)
const movie40 = new fileMovie(40,"El Padrino 2","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/padrino2-portada.jpg","Francis Ford Coppola",1974)
const movie41 = new fileMovie(41,"El Padrino 3","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/padrino3-portada.jpg","Francis Ford Coppola",1991)
const movie42 = new fileMovie(42,"Pulp Fiction","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/pulpfiction-portada.jpg","Quentin Tarantino",1995)
const movie43 = new fileMovie(43,"Scarface","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/scarface-portada.jpg","Brian De Palma",1984)
const movie44 = new fileMovie(44,"La Lista de Schlinder","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/schlinder-portada.jpg","Steven Spielberg",1994)
const movie45 = new fileMovie(45,"Taxi Driver","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/taxidriver-portada.jpg","Martin Scorsese",1976)
const movie46 = new fileMovie(46,"El Resplandor","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/theshining-portada.jpg","Stanley Kubrick",1980)
const movie47 = new fileMovie(47,"Titanic","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/titanic-portada.jpg","James Cameron",1997)
const movie48 = new fileMovie(48,"The Truman Show","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/truman-portada.jpg","Peter Weir",1998)
const movie49 = new fileMovie(49,"John Wick","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/wick1-portada.jpg","Chad Stahelski",2014)
const movie50 = new fileMovie(50,"John Wick: capitulo 2","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/wick2-portada.jpg","Chad Stahelski",2017)
const movie51 = new fileMovie(51,"John Wick: capitulo 3","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/wick3-portada.jpg","Chad Stahelski",2019)
const movie52 = new fileMovie(52,"John Wick: capitulo 4","C:/Users/bounz/OneDrive/Escritorio/Curso JS/assets/img/wick4-portada.jpg","Chad Stahelski",2023)






//agrego todas las pelis al array

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
arrayAllMovies.push(movie12)
arrayAllMovies.push(movie13)
arrayAllMovies.push(movie14)
arrayAllMovies.push(movie15)
arrayAllMovies.push(movie16)
arrayAllMovies.push(movie17)
arrayAllMovies.push(movie18)
arrayAllMovies.push(movie19)
arrayAllMovies.push(movie20)
arrayAllMovies.push(movie21)
arrayAllMovies.push(movie22)
arrayAllMovies.push(movie23)
arrayAllMovies.push(movie24)
arrayAllMovies.push(movie25)
arrayAllMovies.push(movie26)
arrayAllMovies.push(movie27)
arrayAllMovies.push(movie28)
arrayAllMovies.push(movie29)
arrayAllMovies.push(movie30)
arrayAllMovies.push(movie31)
arrayAllMovies.push(movie32)
arrayAllMovies.push(movie33)
arrayAllMovies.push(movie34)
arrayAllMovies.push(movie35)
arrayAllMovies.push(movie36)
arrayAllMovies.push(movie37)
arrayAllMovies.push(movie38)
arrayAllMovies.push(movie39)
arrayAllMovies.push(movie40)
arrayAllMovies.push(movie41)
arrayAllMovies.push(movie42)
arrayAllMovies.push(movie43)
arrayAllMovies.push(movie44)
arrayAllMovies.push(movie45)
arrayAllMovies.push(movie46)
arrayAllMovies.push(movie47)
arrayAllMovies.push(movie48)
arrayAllMovies.push(movie49)
arrayAllMovies.push(movie50)
arrayAllMovies.push(movie51)
arrayAllMovies.push(movie52)

//ordenar las peliculas alfabeticamente por nombre


