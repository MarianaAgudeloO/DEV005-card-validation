function isValid(creditCardNumber) {
  const num = [];
  for (let i = 0; i < creditCardNumber.length; i++) {
    num.push(parseInt(creditCardNumber[i]));
  }
  num.reverse(); 
  let i = 1;
  while (i <= (num.length - 1)) {
    num[i] = num[i] * 2;
    i = i + 2;
  }
  let k = 0;
  for (num[k] of num) {
    if (num[k] > 9) {
      let sep = [];
      sep = num[k].toString().split('').map(digit => parseInt(digit));
      num[k] = sep[0] + sep[1];      
    }
    k++;
  }
  const total = num.map(string => parseInt(string));
  const suma = total.reduce((total, current) => total + current);
  return suma % 10 === 0;
}

function maskify(creditCardNumber) {
  const lastFour = creditCardNumber.slice(-4);
  const masked = '*'.repeat(creditCardNumber.length - 4);
  return masked + lastFour;
}
// 51-55 --- mc dígitos 16
// 4 --- visa dígitos 13 o 16
// 34, 37 --- amex dígitos 15
// 300-305 --- diners carte blanche dígitos 14
// 36 --- diners int dígitos 14
// 6011 --- discover dígitos 16
// 2014, 2149 diners er --- dígitos 14
// 3 --- jcb dígitos 16
// 2131, 1800 --- jcb dígitos 16
function checkFranchise(creditCardNumber){
  let bank='';

  //Banco jcb
  if (creditCardNumber.slice(0, 4) === '1800' && creditCardNumber.length === 16 || creditCardNumber.slice(0, 4) === '2131' && creditCardNumber.length === 16) {
    bank='JCB'    
  }
  //Banco jcb
  else if (creditCardNumber.charAt(0)==='3' && creditCardNumber.length === 16) 
  {
    bank='JCB';    
  }

  //Banco Dinner's Club/ enRoute
  else if (creditCardNumber.slice(0, 4) === '2014' && creditCardNumber.length === 14 || 
      creditCardNumber.slice(0, 4) === '2149' && creditCardNumber.length === 14)
  {    
    bank="Dinner's Club/ enRoute";    
  }

  //Banco Dinner's Club/ Carte Blanche
  else if (creditCardNumber.length === 14 && Number(creditCardNumber.slice(0, 3)) >= 300 && Number(creditCardNumber.slice(0, 3)) <= 305)
  {    
    bank="Dinner's Club/ Carte Blanche";    
  }

  //Banco Dinner's Club/ Carte Blanche
  else if (creditCardNumber.slice(0, 2) === '38' && creditCardNumber.length === 14)
  {    
    bank="Dinner's Club/ Carte Blanche";    
  }

  //Banco Dinner's Club/ International
  else if (creditCardNumber.slice(0, 2) === '36' && creditCardNumber.length === 14)
  {    
    bank="Banco Dinner's Club/ International";    
  }

  //Banco American Express
  else if (creditCardNumber.slice(0, 2) === '34' && creditCardNumber.length === 15 || creditCardNumber.slice(0, 2) === '37' && creditCardNumber.length === 15)
  {    
    bank="American Express";    
  }

  //Banco Visa
  else if ((creditCardNumber.slice(0, 1) === '4' && creditCardNumber.length === 16)||
           (creditCardNumber.slice(0, 1) === '4' && creditCardNumber.length === 13))
  {    
    bank="Visa";    
  }

  //Banco MasterCard
  else if (creditCardNumber.length === 16 && creditCardNumber.slice(0, 2) >= 51 && creditCardNumber.slice(0, 2) <= 55) {
    bank = "MasterCard";
  }

  //Banco Discover
  else if (creditCardNumber.slice(0, 4) === '6011' && creditCardNumber.length === 16)
  {    
    bank="Discover";    
  }

  else{
    bank='No identificado';
  }

  return(alert(bank));
}

export default {
  isValid: isValid,
  maskify: maskify,
  checkFranchise: checkFranchise,
};