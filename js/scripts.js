//Business Logic
function zeroToInput(numberStr){
  let number = parseInt(numberStr);
  let rangeArr = [];
  for (let i = 0; i <= number; i++){
    rangeArr.push(i);
  }
  const arrayOfStrings = rangeArr.toString().split(",");
  return arrayOfStrings
};

function numberSubstituter(numberStr){
  let rangeArr = zeroToInput(numberStr);
  for (let i = 0; i < rangeArr.length; i++){
    if (rangeArr[i].includes("1")) {
      rangeArr[i] = "Beep!";
    }
  }
  return rangeArr;
}


//User Interface Logic
jQuery(document).ready(function() {
  
})