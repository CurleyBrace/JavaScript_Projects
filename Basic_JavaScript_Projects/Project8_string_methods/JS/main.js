//Concat Example, combining multiple strings into one
function concatMeth(){
    var stringOne = "I am adding ";
    var stringTwo = "these three strings ";
    var stringThree = "to demonstarate concat.";
    var fullString = stringOne.concat(stringTwo, stringThree);
    document.getElementById("concatMethod").innerHTML = fullString;
}

//Slice Example, seperating a portion of a single string
function sliceMeth(){
    var fullString = "I am seperating these to demonstrate slicing";
    var sectionOne = fullString.slice(24, 44);
    document.getElementById("sliceMethod").innerHTML = sectionOne;
}

//UpperCase Example
function toUpper(){
    var convertCase = document.getElementById("enterLower").value;
    document.getElementById("returnUpper").innerHTML = convertCase.toUpperCase();
}

//To search example with an input
function toSearch(){
    var wordSearch = document.getElementById("enterSearch").value;
    var dogPara = document.getElementById("paraToSearch").innerHTML;
    var returnLoca = dogPara.search(wordSearch);
    if(returnLoca != -1){
        document.getElementById("returnSearch").innerHTML = returnLoca;
    }
    else{
        document.getElementById("returnSearch").innerHTML = "Try again! Check your cases!"
    }
}

//Taking number input and returning it as a string
function numString(){
    var str = document.getElementById("numInput").value;
    var firstVal = str.slice(0,1);
    document.getElementById("returnStr").innerHTML = "The input was: "+str.toString() +" and the first value is: "+firstVal;
    
}

//Precision Method, returns 5 values total from input
function precMethod(){
    var x = document.getElementById("baseVal").value;
    var returnNum = Number(x);
    document.getElementById("numReturn").innerHTML = "ToPrecision Result: "+returnNum.toPrecision(5);
    document.getElementById("valueReturn").innerHTML = "ValueOf Result: "+returnNum.valueOf();
}

//Fixed Method, returns 2 values total
function fixedMethod(){
    var x = document.getElementById("baseVal").value;
    var returnNum = Number(x);
    document.getElementById("numReturn").innerHTML = "ToFixed Result: "+returnNum.toFixed(2);
    document.getElementById("valueReturn").innerHTML = "ValueOf Result: "+returnNum.valueOf();
}