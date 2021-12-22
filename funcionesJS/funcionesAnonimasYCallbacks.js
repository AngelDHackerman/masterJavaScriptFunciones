'use strict'

//Funciones anonimas
//Es una funcion que no tienen nombre

let pelicula = (nombre) => { 
  return `La pelicula es: ` + nombre;
};

console.log( pelicula('Matrix') );

//Callbacks

const sumame = (numero1, numero2, sumaYMuestra, sumaPorDos) => { 
  let sumar = numero1 + numero2;
  
  sumaYMuestra(sumar);
  sumaPorDos(sumar);
  
  return sumar;
};


sumame(5, 7, dato => { // () => {} es lo mismo que hacer function () {}; si hay solo UN dato se pueden eliminar los ()
  console.log(`La suma es:`, dato);
},
dato => { 
  console.log(`La suma por dos es:`, (dato * 2));
});

