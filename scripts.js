let userInput;
userInput = prompt("Choose a number", "Type your answer here.");

$("#response").html("<p>This is the list</p>");

for (let i = 1; i <= userInput; i = i + 1) {
  if (i % 2 === 0) {
      $("#response").append("<br />" + i + " is even");
    } else {
      $("#response").append("<br />" + i + " is odd");
    }
}


let tipCalculator; // crea varibale 
tipCalculator = function(total, tipRate){ //define variable
  let tipAmount;
  tipAmount = tipRate * total;

  $("#response").html("Your tip is $" + tipAmount)

};

tipCalculator(50.00, 0.2)
