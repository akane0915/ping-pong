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
    let userInput = $("input#ppinput").val();

    $("#ppoutput").text(ping(pong(pingPong(createArray(userInput))))); //Must call pingPong first because divisible by 15 must be evaluated before divisible by 5 or 3
    console.log("createArray = " + createArray(userInput));
    console.log("ping = " + ping(pong(pingPong(createArray(userInput)))));
    console.log("pong = " + pong(pingPong(createArray(userInput))));
    console.log("ping-pong = " + pingPong(createArray(userInput)));
    $("#ppoutput").text(posInteger(userInput));
  }); //Submit form close
}); //Document.ready function close
