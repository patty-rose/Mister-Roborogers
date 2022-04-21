//Business Logic
function zeroToInput(numberStr){
  let number = parseInt(numberStr);
  let rangeArr = [];
  for (let i=0; i<=number; i++){
    rangeArr.push(i);
  }
  const arrayOfStrings = rangeArr.toString().split(",");
  return arrayOfStrings
};

function numberSubstituter(numberStr){
  let numberArr = zeroToInput(numberStr);
}


//User Interface Logic
jQuery(document).ready(function() {
  
})