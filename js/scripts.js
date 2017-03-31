//Business Logic
//Check if user input is positive integer. If not, return invalid input
let posInteger = function(number){
  if (number > 0){
    return number;
  } else {
    return "Invalid input.  Please enter an integer greater than 0."
  }
};

//User Interface Logic
$(document).ready(function(){
  $("form#ppform").submit(function(event){
    event.preventDefault();
    let userInput = $("input#ppinput").val();

    $("#ppoutput").text(posInteger(userInput));
  }); //Submit form close
}); //Document.ready function close
