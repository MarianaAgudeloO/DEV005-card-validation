// //import validator from './validator.js';
// //console.log(validator);

// const enviar = document.getElementById("enviar");
// enviar.addEventListener("click", function(event) {
//   event.preventDefault();
//   //Lista con el número de la tarjeta
//   const lista = document.getElementsByClassName("num");
  
//   const numero = [];
//   for (const elemento of lista) {
//     numero.push(elemento.value);
//   }
//   //Reversamos la lista
//   numero.reverse(); 
//   //Multiplicamos las posiciones pares por dos
//   let i=1;
//   while(i <=(numero.length-1)){
//     numero[i]=numero[i]*2;
//     i=i+2;
//   }
//   let k=0;
//   for (numero[k] of numero){
//     if (numero[k]>9){
//       let sep=[];
//       sep = numero[k].toString().split('').map(digit => parseInt(digit));
//       numero[k]=sep[0]+sep[1];      
//     }
//     k++;
//   }
//   const total = numero.map(string => parseInt(string));
//   const suma = total.reduce((total, current) => total + current);
//   if (suma%10===0){
//     alert('Es válida');
//   }
// });
import validator from './validator.js';
//Llamamos el número de tarjeta solicitado
const enviar = document.getElementById("enviar");
enviar.addEventListener("click", function(event) {
  event.preventDefault();
  //Lista con el número de la tarjeta
  const lista = document.getElementsByClassName("num");
  //Si el valor ingresado no es vacío, hacer esto:
  if (lista[0].value!==''){
    lista[0].toString().split('').map(digit => parseInt(digit));
    const numero = [];
    for (const elemento of lista) {
      numero.push(elemento.value);
    }
    //Validación de la tarjeta de crédito
    const creditCardNumber = numero.join('');
    if (validator.isValid(creditCardNumber)) {
      alert('Es válida');
    } else {
      alert('No es válida');
    }
    //Ocultar número de la tarjeta
    let maskedNumber =0;
    if (creditCardNumber.length>4){
      maskedNumber = validator.maskify(creditCardNumber);
    } else{
      maskedNumber=creditCardNumber;
    }
    //No se puede ingresadr un espacio vacío
    console.log(validator.checkFranchise(creditCardNumber));
  } else{
    alert('Ingresa un valor para continuar')
  }
});

