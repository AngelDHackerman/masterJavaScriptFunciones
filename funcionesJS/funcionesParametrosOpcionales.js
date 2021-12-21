          //PARAMETROS

const porConsola = ( numero1, numero2, mostrar ) => { 
  console.group(`Calculadora N.1, Numeros recibidos: ${numero1} , ${numero2}, ${mostrar}`);
  
    console.log(`Suma: ${numero1 + numero2} `);
    console.log(`Resta: ${numero1 - numero2} `);
    console.log(`Multiplicacion: ${numero1 * numero2} `);
    console.log(`Division: ${numero1 / numero2} `);
    console.log(`Percentil: ${numero1 % numero2} `);
    console.log(`Parametro opcional: ${mostrar}`);
  
  console.groupEnd();
  return "Hola soy la calculadora 1";
};

const porPantalla = ( numero1, numero2, mostrar ) => { 
  document.write( `<p>Parametros recibidos "${numero1}", "${numero2}" & "${mostrar}" </p>` )
  document.write(`<p> Suma: ${numero1 + numero2}  </p>`);
  document.write(`<p> Resta: ${numero1 - numero2}  </p>`);
  document.write(`<p> Multiplicacion: ${numero1 * numero2} </p> `);
  document.write(`<p> Division: ${numero1 / numero2} </p> `);
  document.write(`<p> Percentil: ${numero1 % numero2} </p> `);
  document.write(`<p> Parametro opcional: ${mostrar} </p>`);
};




  
  const calculadora1 = ( numero1, numero2, mostrar = false ) => { // asi se agregan los parametros opcionales
    if (mostrar == false) {      
      porConsola( numero1, numero2, mostrar );
    } else { 
      porPantalla( numero1, numero2, mostrar );
    };
  };

calculadora1(2,5);
calculadora1(1, 4, true);