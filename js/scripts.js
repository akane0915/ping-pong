//Business Logic

//User Interface Logic
$(document).ready(function(){
  $("form#ppform").submit(function(event){
    event.preventDefault();
    let userInput = $("input#ppinput").val();

    $("#ppoutput").text(userInput);
  }); //Submit form close
}); //Document.ready function close
