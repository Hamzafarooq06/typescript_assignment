//Modify your for loop to print a sentence using the name of the pizza
//instead of printing just the name of the pizza. For each pizza you should
//have one line of output containing a simple statement like I like pepperoni
//pizza.
var pizza = ["fajita", "tandori", "chiken cheez"];
for (var i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (var i = 0; i < pizza.length; i++) {
    console.log("i like  " + pizza[i] + " pizza.");
}
console.log("i like chiken cheez \n ");
