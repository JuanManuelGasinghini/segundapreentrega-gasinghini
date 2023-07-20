/* function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado) 
}

solicitarNombre(); */

//actividad 1

/*let nombre = "Homero";
let apellido = "Simpson";
let edad = 39;
console.log(nombre);
console.log(apellido);
console.log(edad); */

//actividad 2

/*l
const ciudad1 = "Springfield";
const ciudad2 = "Shelbywille";
const ciudad3 = "capital city";
const ciudad4 = "Cypres Creek";
const ciudad5 = "Ogdenville";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

//actividad 3

/* let persona = "BART SIMSPN";
let domicilio = "742 EVERGREEN";
let pais = "USA";
let nacimiento = "02-11-70";
const codigo = "B7U89RE43";
let carnet = "Codigo: "+codigo+" "+
"Nombre: "+persona+ " "+
            "Nacimiento: "+nacimiento+" "+
                          "Domicilio: "+domicilio;
             console.log(carnet); */

             //actividad 4
/*
             let integrante1 = prompt('INGRESAR 1ER INTEGRANTE');
             let integrante2 = prompt('INGRESAR 2DO INTEGRANTE');
             let integrante3 = prompt('INGRESAR 3ER INTEGRANTE');
             let integrante4 = prompt('INGRESAR 4TO INTEGRANTE');
             let integrante5 = prompt('INGRESAR 5TO INTEGRANTE');
             let familia = "1) "+integrante1+" "+
                           "2) "+integrante2+" "+
                           "3) "+integrante3+" "+
                           "4) "+integrante4+" "+
                           "5) "+integrante5;
                           console.log(familia);
*/

//actividad 5

/*
let entrada = prompt('INGRESAR UN NOMBRE');
let nombre = "BART";
if (entrada == nombre) {
    alert("FUI YO");
} else {
    alert("YO NO FUI");
}*/


//ACTIVIDAD 6
/*
let entrada2 = prompt("INGRESAR UN TECLA");
if ((entrada2 == "y") || (entrada2 == "Y")) {
    alert("CORRECTO");
} else {
    alert("ERROR");
}*/

//actividad 7
/*
let entrada3 = prompt("INGRESAR UN NUMERO");
if (entrada3 == 1) {
    alert("ELEGISTE A HOMERO");
}else if (entrada3 ==2) {
    alert("ELEGISTE A MARGE");
}else if (entrada3 ==3) {
    alert("ELEGISTE A BART");
}else if (entrada3 ==4) {
    alert("ELEGISTE A LISA");
}
else {
    alert("ERROR");
}*/

//actividad8
/*
let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >=1001) && (entrada4 <= 3000)) {
    alert("presupuesto medio");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}*/

//actividad9
/*
let producto1 =prompt('INGRESAR 1ER PRODUCTO');
let producto2 =prompt('INGRESAR 2DO PRODUCTO');
let producto3 =prompt('INGRESAR 3ER PRODUCTO');
let producto4 =prompt('INGRESAR 4TO PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 !="") && (producto4 != "")) {
    let heladera = "1) " + producto1 + "" +
    "2) " + producto2 + " " +
    "3) " + producto3 + " "+
    "4) " + producto4;
    console.log(heladera);
 } else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
 } */

 //actividad 10
 /*
 let cantidad = prompt('INGRESANDO CANTIDAD DE REPETICIONES');
 let texto = prompt('INGRSAR TEXTO A REPETIR');
 for (let index = 0; index < cantidad; index++) {
    console.log(texto);
 }*/
 /*
 let lados = prompt('ingresar cantidad de lados');
 for (let index = 0; index <lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
 }*/

 //turnos
/*
 for (let i = 1; i <= 6; i ++) {
    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Turno N° "+i+" Nombre: "+ingresarNombre);
    console.log(ingresarNombre);
    }*/


    //actividad11
    /*
    let alumnos = '';
    for (let index = 0; index < 10; index++) {
        alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
    }
    alert(alumnos);*/

    //actividad12

/*
    let entrada = prompt("INGRESAR NOMBRE");
    let ingresados = '';
    while (entrada != 'VOLDEMORT') {
        ingresados += entrada +"\n";
        entrada      = prompt("INGRESAR NOMBRE");
    }
alert(ingresados);
*/

//actividad
/*
let entrada = prompt("seleccionar producto de 1 a 4");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
            case "2":
                alert("Papa");
                break;
                case "3":
                    alert("Carne");
                    break;
                    case "4":
                    alert("Pollo");
                    break;
                    default:
                        alert("Error");
                        break;
    }
    entrada =prompt("SELECCIONAR PRODUCTO DE 1 A 4");
} */
