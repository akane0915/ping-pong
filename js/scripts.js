//Business Logic
//Check if user input is positive integer. If not, return invalid input
var posInteger = function(number){
  if (number <= 0){
    return "Invalid input.  Please enter an integer greater than 0."
  }
};

//Creates an array from 1 to the user input number.  Each element in array is a number.
var createArray = function(number) {
  var startArray = [];
  for (var i=1; i<=number; i++){
    startArray.push(i);
  }
  return startArray;
};

//Create new array with all values divisible by 15 replaced with "ping-pong"
var pingPong = function(array){
  var changedArray = [];
  array.forEach(function(number){
    if (number % 15 === 0){
      changedArray.push("ping-pong");
    } else {
      changedArray.push(number);
    }
  });
  return changedArray;
};

//Create new array with all values divisible by 5 replaced with "pong"
var pong = function(array){
  var changedArray = [];
  array.forEach(function(number){
    if (number % 5 === 0){
      changedArray.push("pong");
    } else {
      changedArray.push(number);
    }
  });
  return changedArray;
};

//Create new array with all values divisible by 3 replaced with "ping"
var ping = function(array){
  var changedArray = [];
  array.forEach(function(number){
    if(number % 3 === 0){
      changedArray.push("ping");
    } else {
      changedArray.push(number);
    }
  });
  return changedArray;
};

//User Interface Logic
$(document).ready(function(){
  $("form#ppform").submit(function(event){
    event.preventDefault();
    $("#ppoutput").text(""); //Clear output section
    var userInput = $("input#ppinput").val();
    var finalArray = ping(pong(pingPong(createArray(userInput))));

    //Append each element of array in an unordered list
    for (var i=0; i<finalArray.length; i++){
      $("#ppoutput").append("<li>"+finalArray[i]+"</li>");
    }
    //Display invalid if input is not a positive integer
    $("#ppoutput").text(posInteger(userInput));

    //Reverse order button
    $("button#reverse-button").show();
    $("form#reverse-list").submit(function(event){
      event.preventDefault();
      $("#ppoutput").text("");
      for (var i=0; i<finalArray.length; i++){
        $("#ppoutput").prepend("<li>"+finalArray[i]+"</li>");
      }
    });//Reverse button submit close

    //Reset button
    $("#reload").click(function(){
      location.reload();
    });
  }); //Submit form close
}); //Document.ready function close
