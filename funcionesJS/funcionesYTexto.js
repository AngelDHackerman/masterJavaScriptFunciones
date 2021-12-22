'use strict'

//Transformacion de textos

//  TO STRING

let numero = 444,
    texto1 = 'Bienvenido al curso de JavaScript curso mejorado',
    texto2 = 'Es un muy buen curso';

console.group(`Transformacion de textos`);
console.log(`numero = ${numero} type of numero:`, typeof(numero));
let dato = numero.toString();
console.log(`usando el toString: ${dato}; type of dato:`,  typeof(dato));

// TO UPPER CASE & TO LOWER CASE

console.log(texto1);
let dato1 = texto1.toUpperCase();
console.log(dato1, `"usando toUpperCase"`);

let dato1_1 =  dato1.toLocaleLowerCase();
console.log(dato1_1, `"usando toLowerCase"`);
console.groupEnd();

// CALCULAR LONGITUD

let nombre = 'Angel Hernandez',
    array = ['hola', 1, 'adios'];
console.group(`Calcular longitudes`);
  console.log(`el largo del string es de: ${nombre.length} caracteres`);
  console.log(`el largo del array es de: ${array.length} valores`);
console.groupEnd();

//CONCATENACION DE TEXTOS

let textoTotal = `${texto1} ${texto2}`;
console.group(`Concatenacion`);
  console.log(textoTotal);
console.groupEnd();


        // METODOS DE BUSQUEDA

let busqueda = texto1.indexOf('curso');
let busqueda2 = texto1.lastIndexOf("curso");
let busqueda3 = texto1.search('curso');
let busqueda4 = texto1.match(/curso/g);//'curso' entre comillas solo encuentra 1 coincidencia /curso/g hace una expresion regular para buscar mas coincidencias
let busqueda5 = texto1.substr(14,5)//apartir del caracter 14 sacame 5 letras mas.
let busqueda6 = texto1.charAt(44);
let busqueda7 = texto1.startsWith('Bienvenido al curso');
let busqueda8 = texto1.endsWith('mejorado');
let busqueda9 = texto1.includes('JavaScript')



console.group(`Metodos de busqueda`);
  console.log(busqueda, `indexOf Nos dice en que caracter se ubica la pablabra buscada`);
  console.log(busqueda2, `lastIndexOf muestra la ultima ubicacion de la pablabra buscada`);
  console.log(busqueda3, `search es lo mismo que indexOf pero es un alias`);
  console.log(busqueda4, `Match devuelve un array con las palabras encontradas, tambien funciona con expresiones regulares /curso/g`);
  console.log(busqueda5, `sbustr(14,5), apartir del caracter 14 saca 5 letras mas`);
  console.log(busqueda6, `:chartAt saca la letra que este en el indice pasado por el parametro`);
  console.log(busqueda7, `startsWith da true si la palabra selecionada esta al principio del string`)
  console.log(busqueda8, `endsWith da true si el string termina con la palabra seleccionada.`)
  console.log(busqueda9, `includes, busca la palabra pasada por parametro, es key sensitive`);
console.groupEnd();

