const fs = require("fs");
var prompt = require('prompt-sync')();

const Abecedario = () => {
    const data = fs.readFileSync("abecedario.txt", "utf-8");
    const caracteres = data.split("");
    return caracteres;
};

let caracteres = Abecedario();

function obtener_posiciones (mensaje_array){
    let posiciones = [];
    for (let i  = 0; i < mensaje_array.length; i++){
        let posicion = caracteres.indexOf(mensaje_array[i]);
        if (posicion !== -1) {
            posiciones.push(((posicion + x) % caracteres.length + caracteres.length) % caracteres.length);
        }
    }
    return posiciones;
}

let x = 4;
let mensaje = prompt("Ingrese el mensaje a cifrar: ");
let opcion = prompt("ingrese 1 para cifrar o 2 para descifrar: ");
if (opcion == "1"){
    x = 4;
}else if (opcion == "2"){
    x = -4;
}
else{
    console.log("Opcion no valida");
    process.exit();
}

let mensaje_array = mensaje.split("");
mensaje_posiciones = obtener_posiciones(mensaje_array);

let mensaje_cifrado = "";
for (let i = 0; i < mensaje_posiciones.length; i++){
    mensaje_cifrado += caracteres[mensaje_posiciones[i]];
}

console.log("mensaje: " + mensaje_cifrado);