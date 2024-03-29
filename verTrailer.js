
//muestra trailer

function abreTrailer(indic){     
    const data = arrayAllMovies.find((array) => array.id == indic)
    window.scroll({
        top: 0,
        behavior: 'smooth'
        }) 
        Swal.fire({
            title: `Hecha un vistazo al trailer de ${data.title}`,
            text: 'El siguiente link te llevará a verlo',
            icon: 'info',
            position: `top`,
            toast: `center`,
            showCancelButton: `true`,
            cancelButtonText: `Mejor más tarde`,
            confirmButtonText: 'Vamos!'
        }).then((result) => {
            if (result.isConfirmed){
                window.open(data.trailer,'_blank')
            }
            })
}