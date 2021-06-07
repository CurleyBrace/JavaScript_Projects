//Showing TypeOf and Coercion
document.write("This is coercion; 10" + 5 +".<br> And this is TypeOf: "+ typeof 3); 

//Basic Example of NaN
document.write("<br>This is an example of: "+0/0);

//Vars used for IsNaN logic demo
var x = 15;
var y = "Hello";
document.write("<br>This is an example of isNaN with a number: "+isNaN(x));
document.write("<br>This is an example of isNaN with a string: "+isNaN(y)+"<br>");

//Displaying Boolean Logic
document.write("Is our variable X from NaN greater than 10? ");
document.write(x > 10);
document.write("<br>");

//Displaying False in the Console on the browser
console.log(15<7);

//Returning Boolean Logic with == Operators
document.write("Displaying 15 == 10: ");
document.write(15 == 10);
document.write("<br>Displaying 9 == 5 + 4: ");
document.write(9 == 5+4);
document.write("<br>");

//Displaying Triple Equal Sign Examples
document.write("Displaying matching data types and matching values: ");
document.write(10 === 10);
document.write("<br>Displaying different data types and different values: ");
document.write(10 === "5");
document.write("<br>Displaying different data types but the same value: ");
document.write(10 === "10");
document.write("<br>Displaying same data types but different values: ");
document.write(10 === 5);
document.write("<br>");

//Returning Boolean Logic with And/Or Operator Examples
document.write("Using the And to compare two sets of values for true: ");
document.write(15 == 15 && 10 == 10);
document.write("<br>Using the And to compare two sets of values for false: ");
document.write(15 == 15 && 10 == 9);
document.write("<br>Using the Or operator to compare two sets of values for true: ");
document.write(15 == 15 || 10 == 9);
document.write("<br>Using the Or operator to compare two sets of values for false: ");
document.write(15 == 16 || 10 == 9);
document.write("<br>Using the Not operator to compare two sets of values for true: ");
document.write(15 != 16);
document.write("<br>Using the Not operator to compare two sets of values for false: ");
document.write(15 != 15);
document.write("<br>");

//Function for displaying infinity onclick
function displayInfin(){
    document.getElementById("display").innerHTML = 1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308;
}

