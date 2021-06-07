//Changes text based on sum of addition when called
function myAddition(){
    var sum = 5 + 7;
    document.getElementById("addClick").innerHTML = sum;  
}

//Changes text based on division of subtraction when called
function mySubtraction(){
    var diff = 31 - 11;
    document.getElementById("subClick").innerHTML = diff;   
}

//Changes text based on product of multiplication when called
function myMultiplication(){
    var product = 9 * 17;
    document.getElementById("prodClick").innerHTML = product;   
}

//Changes text based on quotient of division when called
function myDivision(){
    var quot = 180 / 20;
    document.getElementById("quotClick").innerHTML = quot;  
}

//Changes text based on answer to all problems
function myMultiMath(){
    var ans = (13 + 7) * 6 / 3;
    document.getElementById("multiClick").innerHTML = ans;
}

//Changes text to remainder left after dividing var
function myRemainder() {
    var modu = 196 % 10;
    document.getElementById("moduClick").innerHTML = modu; 
}

//Changes text to negative version of var
function myNegation() {
    var neg = 121;
    document.getElementById("negClick").innerHTML = -neg; 
}

//Changes text to var + 1
function myIncrement() {
    var incre = 5.15;
    incre ++;
    document.getElementById("incrClick").innerHTML = incre; 
}

//Changes text to var - 1
function myDecrement() {
    var decre = 5.15;
    decre --;
    document.getElementById("decrClick").innerHTML = decre; 
}

//Changes text to random number between 0 and 100
function myRandom(){
    var rand = Math.random() * 100;
    document.getElementById("randClick").innerHTML = rand;
}

//Change text to PI as provided by Math.Object
function myMathObject(){
    var mathOb = Math.PI;
    document.getElementById("mathObClick").innerHTML = mathOb;
}
