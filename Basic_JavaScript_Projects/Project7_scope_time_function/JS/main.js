//Global variable example
var globalX = 15;

//local variable example
function localVar(){
    var localX = 10;
}

//forced error using local variables not available to function
function errorFunc(){
    document.getElementById("errorTest").innerHTML = localX + 5;
}

//Date Method Assignment
function methodFunction(){
    var t = new Date();
    if(t.getHours() > 0 && t.getHours() < 8){
        document.getElementById("methodAssign").innerHTML = "Go to bed, it's too early!";
    } 
    else{
        document.getElementById("methodAssign").innerHTML = "It's prime-time! Be productive!a";
    }
}

//Function that contains condition statements to compare my age versus the input given, also contains conditions for plural vs singular output
function ageCompare(){
    var inputAge = document.getElementById("ageGet").value;

//If input is greater than my 28
    if(inputAge > 28){  
        var ageDiff = inputAge - 28;
        if(ageDiff == 1){
            document.getElementById("returnAgeDif").innerHTML = "You're older than me by " + ageDiff +" year.";
        } else {
            document.getElementById("returnAgeDif").innerHTML = "You're older than me by " + ageDiff +" years.";
        }
    }
//If input is the same as 28
    else if(inputAge == 28){
        document.getElementById("returnAgeDif").innerHTML = "We're the same age! Both of us are "+inputAge+" years old!";
    }
//If input is less than 28
    else {
        var ageDiff = 28 - inputAge;
        if(ageDiff == 1){
            document.getElementById("returnAgeDif").innerHTML = "I'm older than you by " + ageDiff +" year.";
        } else {
            document.getElementById("returnAgeDif").innerHTML = "I'm older than you by " + ageDiff +" years.";
        }
    }
}

//Time Function for Step 153
function timeFunction(){
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0){
        reply = "It is morning time!";
    }
    else if ( time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}