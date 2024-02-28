let totalInput;
totalInput = prompt("What's the bill total?", "Type your answer here.");

let tipTotal;
tipTotal = prompt("How much tip do you want to leave?", "Type your respone here");

let tipCalculator; // crea varibale 
tipCalculator = function(){ //define variable como funcion
  let tipAmount;
  tipAmount = totalInput * tipTotal;
  if (tipTotal % 10 === 0) { // test si el numero introducido tiene un remainder de 0
    let tipDiv; // crea nueva variable para numeros enteros
    tipDiv = tipTotal / 100; // transforma numero introducido en decimal
    $("#response").html("Your tip is $" + (totalInput * tipDiv));
  } else {
    $("#response").html("Your tip is $" + tipAmount);
  }
};
tipCalculator()


/* $("#response").html("<p>This is the list</p>");

for (let i = 1; i <= totalInput; i = i + 1) { // 'for' es un loop
  if (i % 2 === 0) {
      $("#response").append("<br />" + i + " is even");
    } else {
      $("#response").append("<br />" + i + " is odd");
    }
} */