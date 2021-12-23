'use strict'

let categorias = ['Accion', 'Terror', 'Comedia',];
let peliculas = ['La verdad duele', 'La vida es bella', 'Matrix',];

let cine = [categorias, peliculas,];

console.group(`Accediendo al array multidimensional`);
  console.log(cine);
  console.log(cine[0][1]);
  console.log(cine[1][2]);
console.groupEnd();

    //Metodo push para agregar mas elementos al array.

let elemento = '';

do {
  elemento = prompt('Introduce tu pelicula:');
  peliculas.push(elemento);
} while (elemento != 'ACABAR');

peliculas.pop(); // ESTE ES PARA ELIMINAR EL 'ACABAR' QUE SE AGREGA AL FINAL



//ELIMINAR UN ELEMENTO EN ESPECIFICO, (eliminaremos Matrix)

let indice = peliculas.indexOf('Matrix');//Localizamos lo que queremos eliminar y nos devuelve su indice.

if (indice > -1 ) {
  peliculas.splice(indice, 1);// el metodo splice puede eliminar los elemenos desde el indice indicado + el N. de pasos mas a eliminar;
}

console.log(peliculas);

let peliculaString = peliculas.join();
console.log(`${peliculaString} con .join convertimos un array a string`);