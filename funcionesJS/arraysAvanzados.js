'use strict'

let nombre = 'Angel Hernandez';
let nombres = ['Angel Hernandez','Victor Robles', 'Juan Lopez', 'Manolo Garcia', 'Jose Martin', 52, true,];
let lenguajes = ['Php', 'JS', 'go', 'Java', 'Python',];


let elemento = parseInt(prompt(`Que elemento quieres??`, 0));
if (elemento >= nombres.length) {
  console.log(`Introduce el numero correcto menor que ${nombres.length}`);
} else { 
  console.log(`El usuario seleccionado es: ${nombres[elemento]}`);
};

document.write(`<h1>Lenguajes de programcion del 2018</h1>`)

/* for (let index = 0; index < lenguajes.length; index++) {
  const element = lenguajes[index];
  document.write( `${element} </br>` );
}; */

lenguajes.forEach((elemento, indexDelArray, arrayOriginal) => { 
  console.log(arrayOriginal);
  document.write(`${elemento} - ${indexDelArray} </br>`);
});