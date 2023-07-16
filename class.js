
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

//agregado de movies

function agregaMoviesCat(){
    let agregados = []
    if (localStorage.getItem("agregados")){
        agregados = JSON.parse(localStorage.getItem("agregados"))
    }
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