'use strict'

let numero = 444,
    texto1 = '  Bienvenido al curso de JavaScript curso mejorado  ',
    texto2 = 'Es un muy buen curso';


let busqueda = texto1.replace('JavaScript', 'python');
let busqueda1 = texto1.slice(14, 23);
let busqueda2 = texto1.split(' ');
let busqueda3 = texto1.trim();





console.group(`Funciones de remplazo`);
  console.log(`${busqueda}, replace: remplaza la palabra que se le da por parametro por el otro parametro dado`);
  console.log(`${busqueda1}, slice: develve un string/array desde el caracter pasado por parametro`);
  console.log(busqueda2,` separa el string y lo mete en un array, lo puede hacer dandole un separador en los parametros como un spacio " "`);
  console.log(busqueda3, `trim: Elimina los espacios al principio y al final del string`);
console.groupEnd();