
function getBirthYear(age) { //Function with var parameter
    var thisYear = new Date().getFullYear(); //Using built-in function to initialize a variable with current year
    var birthYear = thisYear - age; //Finding Birth Year by subtracting Current Year and Age
    alert("You were born in the year "+ birthYear +"."); //Returning Value in an Alert
}