// Ask for a number and tell if it is an integer or not.

let promptBox, numDiv, numberType, truthTest;

promptBox = prompt("Is your number prime or even?", "Insert it here");
numDiv = (promptBox / 2);
numberType = Number.isInteger(numDiv);

truthTest = function() {
if (numberType === true) {
    $("#response").html("Your number is even!");
  } else {
    $("#response").html("Your number is odd!");
  }
};

truthTest();



/* // Task: wrtie a function that always returns the lasgt item in whatever array you pass it

let list, practiceFunction;

list = [1, 2, 3, 4];
listReverse = list.reverse();

$("#response").html("The last element of the list is " + listReverse[0]);


/* let myHabaneroSauceSquirts, myBurritoObject;
// First, define and assign a variable for how 
// spicy the burrito is.
myHabaneroSauceSquirts = 3;
// Now assign the burrito object.
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  // Make use of the variable above.
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  // Use the variable again in a function.
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();










/* let totalInput;
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


$("#response").html("<p>This is the list</p>");

for (let i = 1; i <= totalInput; i = i + 1) { // 'for' es un loop
  if (i % 2 === 0) {
      $("#response").append("<br />" + i + " is even");
    } else {
      $("#response").append("<br />" + i + " is odd");
    }
} */