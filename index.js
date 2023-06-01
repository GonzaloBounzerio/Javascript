
function vendePrenda(){
    let venta=prompt(`Cuántas remeras quieren comprar?`)
    console.log(`Se vendieron ${venta} remeras`)
    if (venta>=5) {
        console.log(`Cliente de lujo`)
    }
}

function ingresaPrenda(){
    let ingreso=prompt(`Cuántas remeras entraron?`)
    console.log(`Ingresaron ${ingreso} remeras`)
    if (ingreso<5) {
        console.log(`Ingresaron pocas remeras :(`)
    }
}

let salirMenu = false
alert("Bienvenido")

do{
    let opcion = prompt(`Ingrese la opción deseada
   1 - Vender remeras
   2 - Ingresar remeras
   0 - Salir`)
   switch (opcion) {
        case "1":
            vendePrenda();
            break;
        case "2":
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