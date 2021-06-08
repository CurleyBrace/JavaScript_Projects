//Comparing the input taken from "height" and returning a boolean based on the var
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value; 
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

//Comparing the input taken from "age" and returning a boolean based on the var
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote.";
}

//initializing a class with several variables tied to it
function vehicle(make, model, year, color) { //
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

//several different instances of the vehicle class
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

//returning an output to show an object of the vehicle class
function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML = "Erik drives a " + Erik.vehicleColor + "-colored " + Erik.vehicleModel + " manufactured in " + Erik.vehicleYear;
}

//initiating a new keyword and utilizing it
function newThisFunction() {
    document.getElementById("newAndThis").innerHTML = "Utilized";
}

//Creating a custom object constructor
function genshinChar(element, gender, weapon, rank) {
    genshinChar.charElem = element;
    genshinChar.charGender = gender;
    genshinChar.charWeap = weapon;
    genshinChar.charRank = rank;
}

//Utilizing the custom constructor
var Amber = new genshinChar("Pyro", "Female", "Bow", 4);


//Creating a nested function
function nestedFunctionEx(){
    document.getElementById("nestedFunction").innerHTML = "Next year you will be "+subFunc()+" years old.";
//Creating a nested function that will grab age from the input box and add to it everytime addYear is called
    function subFunc(){
        var ageStart = document.getElementById("age").value;
        function addYear() {ageStart ++;}
        addYear();
        return ageStart;
    }
}
