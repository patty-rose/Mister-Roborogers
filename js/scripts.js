//Business Logic
function zeroToInput(numberStr){
  let number = parseInt(numberStr);
  let rangeArr = [];
  for (let i = 0; i <= number; i++){
    rangeArr.push(i);
  }
  const rangeStrArr = rangeArr.toString().split(",");
  return rangeStrArr
};

function numberSubstituter(numberStr){
  let rangeArr = zeroToInput(numberStr);
  for (let i = 0; i < rangeArr.length; i++){
    if(rangeArr[i].includes("3")) {
      rangeArr[i] = '"Won\'t you be my neighbor?"';
    }else if (rangeArr[i].includes("2")) {
      rangeArr[i] = '"Boop!"';
    }else if (rangeArr[i].includes("1")) {
      rangeArr[i] = '"Beep!"';
    }
  }
  return rangeArr.join(", ");
};

//User Interface Logic
jQuery(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    $(".response").hide();
    $(".special").hide();
    

    const number = $("input#number").val();
    console.log(number);
    if (number === "143") {
      $(".special").show();
    } else {
      $(".numberResponse").text(numberSubstituter(number));
      $(".response").show();
    };
  });
})