'use strict'

// Parametros Rest y Spread 

const listadoDeFrutas = (fruta1, fruta2, ...resto_de_frutas) => { 
  console.log(`Fruta 1: ${fruta1}`);
  console.log(`Fruta 2: ${fruta2}`);
  console.log(`Todo lo demas: ${resto_de_frutas}`, resto_de_frutas); // fuera de las `` obtenemos un ARRAY
};

let frutas = ['limon', 'lima'];

listadoDeFrutas(...frutas,'naranja', 'Manzana', 'sandia', 'pera', 'coco', 'uva');
// ...frutas hace pasar los valores del array como 2 parametros mas dentro de la funcion.