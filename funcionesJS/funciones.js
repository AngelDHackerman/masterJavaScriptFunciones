'use strict'

//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Asi se definen las funciones

const calculadora = () => { 
  console.log(`Hola soy la calculadora!!!`);
  console.log(`Si soy yo`);
  
  return "Hola soy la calculadora!!!";
};

// Asi se invocan las funciones

calculadora();

let resultado = calculadora();
console.log(`Resultado: ${resultado}`);

 