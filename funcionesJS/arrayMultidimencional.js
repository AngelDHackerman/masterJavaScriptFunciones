'use strict'

let categorias = ['Accion', 'Terror', 'Comedia',];
let peliculas = ['La verdad duele', 'La vida es bella', 'Matrix', 'Buenas noches'];

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
} while (elemento != 'acabar');

peliculas.pop(); // ESTE ES PARA ELIMINAR EL 'ACABAR' QUE SE AGREGA AL FINAL





//ELIMINAR UN ELEMENTO EN ESPECIFICO, (eliminaremos Matrix)

let indice = peliculas.indexOf('Matrix');//Localizamos lo que queremos eliminar y nos devuelve su indice.

if (indice > -1 ) {
  peliculas.splice(indice, 1);// el metodo splice puede eliminar los elemenos desde el indice indicado + el N. de pasos mas a eliminar;
}

console.log(peliculas);

let peliculaString = peliculas.join();
console.log(`${peliculaString} con .join convertimos un array a string`);





      //CONVERTIR STRING A ARRAY

let cadena = "texto1, texto2, texto3";
let cadenaArrya = cadena.split(', ');

console.log(`String convertido en array: ${cadenaArrya}`);






      //Ordenar Arrays 
      //Sort para ordernarlo por orden alfabetico

 let peliculasSort = [...peliculas];    //... spread operator para solo copiar los valores del array sin modificar el original
 peliculasSort.sort();
 console.log(peliculasSort, `Array reordenado`); 
 
 //Metodo Reverse 
 
 let peliculasReverse = [...peliculas];
 peliculasReverse.reverse();
 console.log(peliculasReverse, `Array pero en reverse`);
 
 console.log(peliculas, `Array sin ordenar(en su estado original sin ser modificado)`);
 



        //Recorer un array usando forIn

console.group(`Recorer array con for In`);
for (let index in peliculas) { 
    console.log(peliculas[index]);
}
console.groupEnd();





        //Busquedas en un array

/* let busquedaArray = categorias.find((categoria) => { 
  return categoria == 'Terror';
});
 */

    //Metodo find

let busquedaArray = categorias.find(categoria => categoria == 'Terror'); // Es lo mismo que lo de arriba
console.log(busquedaArray, `, busqueda dentro del array y nos devuleve si el valor esta o no dentro del array`);

    //Metodo findIndex

let busquedaFindIndex = categorias.findIndex(categoria => categoria == 'Terror');// Devuelve no el valor sino el indice de donde esta lo que buscamos;
console.log(busquedaFindIndex, `Devuele no el valor si esta en el array sino el indice del valor buscado`);

    //Metodo some

let precios = [10,20,83,45,500,];

let busquedaSome = precios.some(precio => precio >= 20); //Devuelve si hay un valor mayo o igual a 20.
console.log(busquedaSome);






