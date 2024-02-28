let totalInput;
totalInput = prompt("What's the bill total?", "Type your answer here.");

let tipTotal;
tipTotal = prompt("How much tip do you want to leave?", "Type your respone here");

let tipCalculator; // crea varibale 
tipCalculator = function(){ //define variable
  let tipAmount;
  tipAmount = totalInput * tipTotal;
  if (tipTotal % 10 === 0) {
    let tipDiv;
    tipDiv = tipTotal / 100;
    $("#response").html("Your tip is $" + (totalInput * tipDiv));
  } else {
    $("#response").html("Your tip is $" + tipAmount);
  }
};
tipCalculator()


/* $("#response").html("<p>This is the list</p>");

for (let i = 1; i <= totalInput; i = i + 1) {
  if (i % 2 === 0) {
      $("#response").append("<br />" + i + " is even");
    } else {
      $("#response").append("<br />" + i + " is odd");
    }
} */