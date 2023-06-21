
class prenda { 
    constructor(id, tipo, talle, precio){
        this.id = id;
        this.tipo = tipo;
        this.talle = talle;
        this.precio = precio;
    }
}

const prendas = [];

let prendasDiv = document.getElementById("stock")

function ingresoPagina(prendas){
    for (let prenda of prendas){
        let nuevoDiv = document.createElement("div")
        nuevoDiv.className = "content"
        nuevoDiv.innerHTML = `<div class="prendaStock" id="${prenda.id}">
                                <div class="data">
                                    <h5>${prenda.tipo}</h5>
                                    <h5>${prenda.talle}</h5>
                                    <h6>${prenda.precio}</h5>
                                </div>
                              </div>`
    prendasDiv.appendChild(nuevoDiv)    
    }
}

function ingresaPrenda(){
    let ingreso=prompt(`¿Qué prenda ingresó?`)
    let talle = prompt(`¿Qué talle?`)
    let precio = parseInt(prompt(`Indique precio`))
    const nuevaPrenda = new prenda(prendas.length+1,ingreso.toUpperCase(),talle.toUpperCase(),precio)
    prendas.push(nuevaPrenda)
}

let salirMenu = false
alert("Bienvenido")

do{
    let opcion = prompt(`Ingrese la opción deseada
   1 - Ingresar prendas
   0 - Salir`)
   switch (opcion) {
        case "1":
            ingresaPrenda();
            break;
        case "0":
            alert("Finalizando programa");
            salirMenu = true;
            break;
        default:
            alert("Opción invalida. Intente nuevamente");
            break;
   }
}while(!salirMenu)
ingresoPagina(prendas)