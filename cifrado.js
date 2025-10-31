const fs = require("fs");
var prompt = require('prompt-sync')();

const Abecedario = () => {
    const data = fs.readFileSync("abecedario.txt", "utf-8");
    const caracteres = data.split("");
    console.log(caracteres);
    return caracteres;
};

let caracteres = Abecedario();

function obtener_posiciones (mensaje_array){
    let posiciones = [];
    for (let i  = 0; i < mensaje_array.length; i++){
        let posicion = caracteres.indexOf(mensaje_array[i]);
        if (posicion !== -1) {
            posiciones.push((posicion + 4) % caracteres.length);
        }
    }
    return posiciones;
}

let mensaje = prompt("Ingrese el mensaje a cifrar: ");
let mensaje_array = mensaje.split("");
console.log(mensaje_array);
mensaje_posiciones = obtener_posiciones(mensaje_array);

let mensaje_cifrado = "";
for (let i = 0; i < mensaje_posiciones.length; i++){
    mensaje_cifrado += caracteres[mensaje_posiciones[i]];
}

console.log("Mensaje cifrado: " + mensaje_cifrado);