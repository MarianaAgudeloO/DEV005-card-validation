import validator from './validator.js';
//Llamamos el número de tarjeta solicitado
const send = document.getElementById("send");
send.addEventListener("click", function(event) {
  event.preventDefault();
  //Lista con el número de la tarjeta
  const list = document.getElementsByClassName("num");
  let name = document.getElementById("name");
  name = name.value;

  // Eliminar elementos "p" previos
  const previousResults = document.getElementsByTagName("p");
  while (previousResults.length > 0) {
    previousResults[0].remove();
  }
  // Eliminar elementos "img" previos
  const previousImage = document.getElementsByTagName("img");
  while (previousImage.length > 0) {
    previousImage[0].remove();
  }
  // Eliminar elementos "div" previos
  const previousContainer = document.getElementById("resultContainer");
  if (previousContainer) {
    previousContainer.remove();
  }
  const cardContainer = document.getElementById("cardContainer");
  if (cardContainer) {
    cardContainer.remove();
  }

  //Si el valor ingresado no es vacío, hacer esto:
  if (list[0].value!==''){
    list[0].toString().split('').map(digit => parseInt(digit));
    const num = [];
    for (const elemento of list) {
      num.push(elemento.value);
    }
    //Validación de la tarjeta de crédito
    const creditCardNumber = num.join('');
    let valid='';
    if (validator.isValid(creditCardNumber)) {
      valid='Es válida';
    } else {
      valid='No es válida';
    }
    const franchise = validator.checkFranchise(creditCardNumber);  
    const bank = franchise.bank;  
    const logo = franchise.logo;
    const color = franchise.color;
    //Ocultar número de la tarjeta
    let maskedNumber =0;
    if (creditCardNumber.length>4){
      maskedNumber = validator.maskify(creditCardNumber);
    } else{
      maskedNumber=creditCardNumber;
    }

    const container = document.createElement("div");
    container.id = "resultContainer";
    //Mostrar los resultados
    const nameElement = document.createElement("p");
    nameElement.innerHTML = 'Nombre: '+ name;       

    const bankElement = document.createElement("p");
    bankElement.innerHTML = "Franquicia: " + bank;    
    
    const maskedNumberElement = document.createElement("p");
    maskedNumberElement.innerHTML = "Número de tarjeta: " + maskedNumber;    
    
    const validityElement = document.createElement("p");
    validityElement.innerHTML = "Validación: " + valid;
    
    container.appendChild(nameElement);
    container.appendChild(bankElement);
    container.appendChild(maskedNumberElement);
    container.appendChild(validityElement);

    // Agregar el div al body de la página
    document.body.appendChild(container);    

    const card = document.createElement("div");
    card.id="card";

    //Crear la tarjeta
    // Crear un div y asignar id
    const cardContainer = document.createElement("div");
    cardContainer.id = "cardContainer";
    cardContainer.style.backgroundColor = color;

    const nameCard = document.createElement("p");
    nameCard.classList.add("textCard");
    nameCard.id = "nameCard";
    nameCard.innerHTML = name;

    const bankCard = document.createElement("p");
    bankCard.classList.add("textCard");
    bankCard.id = "bankName";
    bankCard.innerHTML = bank;

    const masked = document.createElement("p");
    masked.classList.add("textCard");
    masked.id = "maskedNumber";
    masked.innerHTML = maskedNumber;

    const validity = document.createElement("p");
    validity.classList.add("textCard");
    validity.id = "validityStatus";
    validity.innerHTML = valid;

    const logoCard = document.createElement("img");
    logoCard.id = "logoCard";
    logoCard.src = logo;

    const chip = document.createElement("img");
    chip.id = "chip";
    chip.src = "images/chip.png";
  

    // Agregar los cinco elementos p al div
    cardContainer.appendChild(nameCard);
    cardContainer.appendChild(bankCard);
    cardContainer.appendChild(masked);
    cardContainer.appendChild(validity);
    cardContainer.appendChild(logoCard);
    cardContainer.appendChild(chip);

    // Agregar el div al body de la página
    document.body.appendChild(cardContainer);

    //No se puede ingresar un espacio vacío
  } else{
    alert('Ingresa un valor para continuar')
  }
  //Eliminar ls datos del input anterior
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
});

