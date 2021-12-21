          //PARAMETROS
  
  const calculadora1 = ( numero1, numero2 ) => { 
    console.group(`Calculadora N.1, Numeros recibidos: ${numero1} & ${numero2}`);
      console.log(`Suma: ${numero1 + numero2} `);
      console.log(`Resta: ${numero1 - numero2} `);
      console.log(`Multiplicacion: ${numero1 * numero2} `);
      console.log(`Division: ${numero1 / numero2} `);
      console.log(`Percentil: ${numero1 % numero2} `);
    console.groupEnd();
    return "Hola soy la calculadora 1";
  };
  
  for (let index = 1; index <= 10; index++) {
    calculadora1(index, 8);
  }

