//Business Logic
//Check if user input is positive integer. If not, return invalid input
var posInteger = function(number){
  if (number <= 0){
    return "Invalid input.  Please enter an integer greater than 0."
  } 
};

//Creates an array from 1 to the user input number.  Each element in array is a number.
var createArray = function(number) {
  debugger;
  var startArray = [];
  for (var i=1; i<=number; i++){
    startArray.push(i);
  }
  return startArray;
};

//User Interface Logic
$(document).ready(function(){
  $("form#ppform").submit(function(event){
    event.preventDefault();
    let userInput = $("input#ppinput").val();

    $("#ppoutput").text(createArray(userInput));
    $("#ppoutput").text(posInteger(userInput));
  }); //Submit form close
}); //Document.ready function close
