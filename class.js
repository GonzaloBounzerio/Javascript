
//archivo JS donde se generan las clases y ctes con las que trabajo

class fileMovie {
    constructor(id,title,image,director,year,trailer,val){
        this.id = id;
        this.title = title;
        this.image = image;
        this.director = director;
        this.year = year;
        this.trailer = trailer;
        this.val = val;
    }
}

// const movie1 = new fileMovie(1,"Star Wars Episodio I: La Amenaza Fantasma","assets/img/starwars1-portada.jpg","George Lucas",1999,"https://www.youtube.com/watch?v=bD7bpG-zDJQ",51)
// const movie2 = new fileMovie(2,"Star Wars Episodio II: La Guerra de los Clones","assets/img/starwars2-portada.jpg","George Lucas",2002,"https://www.youtube.com/watch?v=gYbW1F_c9eM",65)
// const movie3 = new fileMovie(3,"Star Wars Episodio III: La Venganza de los Sith","assets/img/starwars3-portada.jpg","George Lucas",2005,"https://www.youtube.com/watch?v=5UnjrG_N8hU",79)
// const movie4 = new fileMovie(4,"Star Wars Episodio IV: Una Nueva Esperanza","assets/img/starwars4-portada.jpg","George Lucas",1977,"https://www.youtube.com/watch?v=vZ734NWnAHA",93)
// const movie5 = new fileMovie(5,"Star Wars Episodio V: El Imperio Contraataca","assets/img/starwars5-portada.jpg","Irvin Kershner",1980,"https://www.youtube.com/watch?v=JNwNXF9Y6kY",94)
// const movie6 = new fileMovie(6,"Star Wars Episodio VI: El Regreso del Jedi","assets/img/starwars6-portada.jpg","Richard Marquand",1983,"https://www.youtube.com/watch?v=16YLjTkK5jE",83)
// const movie7 = new fileMovie(7,"Star Wars Episodio VII: El Despertar de la Fuerza","assets/img/starwars7-portada.jpg","J.J. Abrams",2015,"https://www.youtube.com/watch?v=sGbxmsDFVnE",93)
// const movie8 = new fileMovie(8,"Star Wars Episodio VIII: Los Últimos Jedi","assets/img/starwars8-portada.jpg","Rian Johnson",2017,"https://www.youtube.com/watch?v=Q0CbN8sfihY",91)
// const movie9 = new fileMovie(9,"Star Wars Episodio IX: El Ascenso de Skywalker","assets/img/starwars9-portada.jpg","J.J. Abrams",2019,"https://www.youtube.com/watch?v=8Qn_spdM5Zg",52)
// const movie10 = new fileMovie(10,"Rogue One: una historia de Star Wars","assets/img/rogueone-portada.jpg","Gareth Edwards",2016,"https://www.youtube.com/watch?v=frdj1zb9sMY",84)
// const movie11 = new fileMovie(11,"Solo: una historia de Star Wars","assets/img/solo-portada.jpg","Ron Howard",2018,"https://www.youtube.com/watch?v=jPEYpryMp2s",69)
// const movie12 = new fileMovie(12,"Avengers: Los Vengadores de Marvel","assets/img/avengers1-portada.jpg","Joss Whedon",2012,"https://www.youtube.com/watch?v=eOrNdBpGMv8",91)
// const movie13 = new fileMovie(13,"Avengers: La Era de Ultron","assets/img/avengers2-portada.jpg","Joss Whedon",2015,"https://www.youtube.com/watch?v=tmeOjFno6Do",76)
// const movie14 = new fileMovie(14,"Avengers: Infinity War","assets/img/avengers3-portada.jpg","Anthony Russo, Joe Russo",2018,"https://www.youtube.com/watch?v=6ZfuNTqbHE8",85)
// const movie15 = new fileMovie(15,"Avengers: Endgame","assets/img/avengers4-portada.jpg","Anthony Russo, Joe Russo",2019,"https://www.youtube.com/watch?v=TcMBFSGVi1c&t=24s",94)
// const movie16 = new fileMovie(16,"Volver al Futuro","assets/img/backfuture-portada.jpg","Robert Zemeckis",1985,"https://www.youtube.com/watch?v=qvsgGtivCgs",93)
// const movie17 = new fileMovie(17,"Bastardos sin gloria","assets/img/bastardos-portada.jpg","Quentin Tarantino",2009,"https://www.youtube.com/watch?v=KnrRy6kSFF0",89)
// const movie18 = new fileMovie(18,"Batman Inicia","assets/img/batman1-portada.jpg","Christopher Nolan",2005,"https://www.youtube.com/watch?v=neY2xVmOfUM",84)
// const movie19 = new fileMovie(19,"Batman: el Caballero de la Noche","assets/img/batman2-portada.jpg","Christopher Nolan",2008,"https://www.youtube.com/watch?v=EXeTwQWrcwY",94)
// const movie20 = new fileMovie(20,"Batman: el Caballero de la Noche asciende","assets/img/batman3-portada.jpg","Christopher Nolan",2012,"https://www.youtube.com/watch?v=GokKUqLcvD8",87)
// const movie21 = new fileMovie(21,"American Beauty","assets/img/bellezaamericana-portada.jpg","Sam Mendes",2000,"https://www.youtube.com/watch?v=FfWnZthD9Tw",87)
// const movie22 = new fileMovie(22,"Los Cazafantasmas","assets/img/cazafantasmas-portada.jpg","Ivan Reitman",1984,"https://www.youtube.com/watch?v=6hDkhw5Wkas",95)
// const movie23 = new fileMovie(23,"Cisne Negro","assets/img/cisnenegro-portada.jpg","Darren Aronofsky",2011,"https://www.youtube.com/watch?v=5jaI1XOB-bs",85)
// const movie24 = new fileMovie(24,"La Era del Hielo","assets/img/erahielo1-portada.jpg","Chris Wedge",2002,"https://www.youtube.com/watch?v=i4noiCRJRoE",77)
// const movie25 = new fileMovie(25,"La Era del Hielo 2","assets/img/erahielo2-portada.jpg","Carlos Saldanha",2006,"https://www.youtube.com/watch?v=pfESEXIZ_lw",57)
// const movie26 = new fileMovie(26,"La Era del Hielo 3","assets/img/erahielo3-portada.jpg","Carlos Saldanha",2009,"https://www.youtube.com/watch?v=MnAi5u-k9NY",46)
// const movie27 = new fileMovie(27,"La Era del Hielo 4","assets/img/erahielo4-portada.jpg","Mike Thurmeier, Steve Martino",2012,"https://www.youtube.com/watch?v=xz-KgMtU_BM",37)
// const movie28 = new fileMovie(28,"La Era del Hielo 5","assets/img/erahielo5-portada.jpg","Mike Thurmeier",2016,"https://www.youtube.com/watch?v=8bxox4SNbIs",18)
// const movie29 = new fileMovie(29,"ET: el extraterrestre","assets/img/et-portada.jpg","Steven Spielberg",1982,"https://www.youtube.com/watch?v=qYAETtIIClk",99)
// const movie30 = new fileMovie(30,"El exorcista","assets/img/exorcista-portada.jpg","William Friedkin",1973,"https://www.youtube.com/watch?v=PjD42P7BAaA",84)
// const movie31 = new fileMovie(31,"El Club de la Pelea","assets/img/fightclub-portada.jpg","David Fincher",1999,"https://www.youtube.com/watch?v=BdJKm16Co6M",79)
// const movie32 = new fileMovie(32,"Forrest Gump","assets/img/forrest-portada.jpg","Robert Zemeckis",1994,"https://www.youtube.com/watch?v=bLvqoHBptjg",71)
// const movie33 = new fileMovie(33,"Gladiador","assets/img/gladiator-portada.jpg","Ridley Scott",2000,"https://www.youtube.com/watch?v=P5ieIbInFpg",80)
// const movie34 = new fileMovie(34,"Iron Man : el hombre de hierro","assets/img/ironman1-portada.jpg","Jon Favreau",2008,"https://www.youtube.com/watch?v=8ugaeA-nMTc",94)
// const movie35 = new fileMovie(35,"Iron Man 2","assets/img/ironman2-portada.jpg","Jon Favreau",2010,"https://www.youtube.com/watch?v=qsRZghNciIo",71)
// const movie36 = new fileMovie(36,"Iron Man 3","assets/img/ironman3-portada.jpg","Shane Black",2013,"https://www.youtube.com/watch?v=aV8H7kszXqo",79)
// const movie37 = new fileMovie(37,"El extraño mundo de Jack","assets/img/mundojack-portada.jpg","Henry Selick",1993,"https://www.youtube.com/watch?v=wr6N_hZyBCk",95)
// const movie38 = new fileMovie(38,"La Naranja Mecánica","assets/img/naranjamecanica-portada.jpg","Stanley Kubrick",1985,"https://www.youtube.com/watch?v=T54uZPI4Z8A",88)
// const movie39 = new fileMovie(39,"El Padrino","assets/img/padrino1-portada.jpg","Francis Ford Coppola",1972,"https://www.youtube.com/watch?v=1x0GpEZnwa8",97)
// const movie40 = new fileMovie(40,"El Padrino 2","assets/img/padrino2-portada.jpg","Francis Ford Coppola",1974,"https://www.youtube.com/watch?v=tF_v4ZZkQWE",96)
// const movie41 = new fileMovie(41,"El Padrino 3","assets/img/padrino3-portada.jpg","Francis Ford Coppola",1991,"https://www.youtube.com/watch?v=UUkG37KSWf0",66)
// const movie42 = new fileMovie(42,"Pulp Fiction","assets/img/pulpfiction-portada.jpg","Quentin Tarantino",1995,"https://www.youtube.com/watch?v=5ZAhzsi1ybM",92)
// const movie43 = new fileMovie(43,"Scarface","assets/img/scarface-portada.jpg","Brian De Palma",1984,"https://www.youtube.com/watch?v=oSMOEKEcjqk",79)
// const movie44 = new fileMovie(44,"La Lista de Schlinder","assets/img/schlinder-portada.jpg","Steven Spielberg",1994,"https://www.youtube.com/watch?v=gG22XNhtnoY",98)
// const movie45 = new fileMovie(45,"Taxi Driver","assets/img/taxidriver-portada.jpg","Martin Scorsese",1976,"https://www.youtube.com/watch?v=UUxD4-dEzn0",96)
// const movie46 = new fileMovie(46,"El Resplandor","assets/img/theshining-portada.jpg","Stanley Kubrick",1980,"https://www.youtube.com/watch?v=FZQvIJxG9Xs",82)
// const movie47 = new fileMovie(47,"Titanic","assets/img/titanic-portada.jpg","James Cameron",1997,"https://www.youtube.com/watch?v=CHekzSiZjrY",88)
// const movie48 = new fileMovie(48,"The Truman Show","assets/img/truman-portada.jpg","Peter Weir",1998,"https://www.youtube.com/watch?v=dlnmQbPGuls",95)
// const movie49 = new fileMovie(49,"John Wick","assets/img/wick1-portada.jpg","Chad Stahelski",2014,"https://www.youtube.com/watch?v=C0BMx-qxsP4",86)
// const movie50 = new fileMovie(50,"John Wick: capitulo 2","assets/img/wick2-portada.jpg","Chad Stahelski",2017,"https://www.youtube.com/watch?v=mGPk9e03230",89)
// const movie51 = new fileMovie(51,"John Wick: capitulo 3","assets/img/wick3-portada.jpg","Chad Stahelski",2019,"https://www.youtube.com/watch?v=KsSPMDe_YWY",89)
// const movie52 = new fileMovie(52,"John Wick: capitulo 4","assets/img/wick4-portada.jpg","Chad Stahelski",2023,"https://www.youtube.com/watch?v=uSTqokEHbig",94)
// const movie53 = new fileMovie(53,"Volver al Futuro 2","assets/img/backfuture2-portada.jpg","Robert Zemeckis",1989,"https://www.youtube.com/watch?v=MdENmefJRpw",63)
// const movie54 = new fileMovie(54,"Volver al Futuro 3","assets/img/backfuture3-portada.jpg","Robert Zemeckis",1990,"https://www.youtube.com/watch?v=3C8c3EoEfw4",80)



// //agrego todas las pelis al array


// const cargarData = async () =>{
//     const res = await fetch("data.json")
//     const data = await res.json()
    
//     for(let peli of data){
//         let nuevaPeli = new fileMovie(peli.id, peli.title, peli.image, peli.director, peli.year, peli.trailer, peli.val)
//         arrayAllMovies.push(nuevaPeli)
//     }
//     console.log(arrayAllMovies)

//     localStorage.setItem("arrayFull", JSON.stringify(arrayAllMovies))
// }

//  let arrayAllMovies = [] 

// arrayAllMovies.push(movie1)
// arrayAllMovies.push(movie2)
// arrayAllMovies.push(movie3)
// arrayAllMovies.push(movie4)
// arrayAllMovies.push(movie5)
// arrayAllMovies.push(movie6)
// arrayAllMovies.push(movie7)
// arrayAllMovies.push(movie8)
// arrayAllMovies.push(movie9)
// arrayAllMovies.push(movie10)
// arrayAllMovies.push(movie11)
// arrayAllMovies.push(movie12)
// arrayAllMovies.push(movie13)
// arrayAllMovies.push(movie14)
// arrayAllMovies.push(movie15)
// arrayAllMovies.push(movie16)
// arrayAllMovies.push(movie17)
// arrayAllMovies.push(movie18)
// arrayAllMovies.push(movie19)
// arrayAllMovies.push(movie20)
// arrayAllMovies.push(movie21)
// arrayAllMovies.push(movie22)
// arrayAllMovies.push(movie23)
// arrayAllMovies.push(movie24)
// arrayAllMovies.push(movie25)
// arrayAllMovies.push(movie26)
// arrayAllMovies.push(movie27)
// arrayAllMovies.push(movie28)
// arrayAllMovies.push(movie29)
// arrayAllMovies.push(movie30)
// arrayAllMovies.push(movie31)
// arrayAllMovies.push(movie32)
// arrayAllMovies.push(movie33)
// arrayAllMovies.push(movie34)
// arrayAllMovies.push(movie35)
// arrayAllMovies.push(movie36)
// arrayAllMovies.push(movie37)
// arrayAllMovies.push(movie38)
// arrayAllMovies.push(movie39)
// arrayAllMovies.push(movie40)
// arrayAllMovies.push(movie41)
// arrayAllMovies.push(movie42)
// arrayAllMovies.push(movie43)
// arrayAllMovies.push(movie44)
// arrayAllMovies.push(movie45)
// arrayAllMovies.push(movie46)
// arrayAllMovies.push(movie47)
// arrayAllMovies.push(movie48)
// arrayAllMovies.push(movie49)
// arrayAllMovies.push(movie50)
// arrayAllMovies.push(movie51)
// arrayAllMovies.push(movie52)
// arrayAllMovies.push(movie53)
// arrayAllMovies.push(movie54)

//agregado de movies

function agregaMoviesCat(){
    let formAgrega = document.getElementById("formularioAgregaMovie")
    formAgrega.onsubmit = (event) => {
        event.preventDefault()
        let nombreMovie = document.getElementById("inputTitulo")
        let directorMovie = document.getElementById("inputDirector")
        let estrenoMovie = document.getElementById("inputEstreno")
        let trailerMovie = document.getElementById("inputTrailer")
        let valoracionMovie = document.getElementById("inputValoracion")
        let nuevoID = JSON.parse(localStorage.getItem("arrayFull"))
        const nuevaMovie = new fileMovie(nuevoID.length+1,nombreMovie.value,"assets/img/default.png",directorMovie.value,estrenoMovie.value,trailerMovie.value,valoracionMovie.value)
        let agregados = []
        agregados.push(nuevaMovie)
        Toastify({
            text: `"${nombreMovie.value}" se ha agregado al catálogo`,
            duration: 1500,
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
        nombreMovie.value=``
        directorMovie.value=``
        estrenoMovie.value=``
        trailerMovie.value=``
        valoracionMovie.value=``
        localStorage.setItem("agregados", JSON.stringify(agregados))
    }
}