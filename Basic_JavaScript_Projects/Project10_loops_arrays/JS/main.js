
//Looping to display a count up to a number entered into the inputCount value
function callLoop(){

    var numCount = document.getElementById("inputCount").value;
    var x = 1;
    var numPrint = "";

    //Input check to make sure there was anything entered
    if(numCount < 1){
        numPrint = "Please enter a value greater than 0.";

    }

    //Integrated both a continue statement to skip the number 7, and a break statement to 
    //end the loop whenever it gets to a number greater than 20 to prevent bloat
    while(x <= numCount){
        if(x === 7) {
            x++;
            continue;
        }
        if(x > 20){
            break;
        }        
        numPrint += "<br>" + x;
        x++
    }
    document.getElementById("countLoop").innerHTML = numPrint;
    document.getElementById("inputCount").value = "";
}


//Finding the string length of text entered into the inputString value
function strLength(){
    var countStr = document.getElementById("inputString").value;
    var printStrLen = countStr.length;
    document.getElementById("outputString").innerHTML = "The length is: "+printStrLen;
    document.getElementById("inputString").value = "";
}


//Demonstrating a for loop, made vars local because no other functions 
//  are utilizing these so making them global seemed like a waste
function forLoop(letPrint){
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Cello", "Saxaphone", "Harmonica"];
    var content = "";

        //For Loop printing, with an if statement to check for which button was pressed
        //Will use let to change the y variable to replace a value in the array
        for (var y = 0; y < instruments.length; y++){
            if(letPrint == 1){;
                let y = Math.floor(Math.random()*10);
                instruments[y] = "This was replaced.";
                letPrint = 0;
            }
            content += instruments[y] + "<br>";        
        }

    document.getElementById("listOfInstruments").innerHTML = content;
}


//Displaying arrays, taking an input from checkbox and resetting to display up to two pre-set arrays
function printArray(){

    //Initiating arrays to be printed, the input selection, and a counter for a loop to print the entire array
    var dogBreeds = ["Shiba", "Poodle", "Bulldog", "Pitbull", "Dachshund", "Corgi"];
    var catBreeds = ["Persian", "British Shorthair", "Sphynx", "Bengal", "Siamese", "Maine Coon"];
    var dogSelect = document.getElementById("dogInput");
    var catSelect = document.getElementById("catInput");
    returnArray = "";

    //If nothings checked prompts the user to select an input
    if(catSelect.checked == false && dogSelect.checked == false){
        returnArray = "Please make a selection";
    }

    //Checking the dogCheck first and changing the array with breeds if true
    if(dogSelect.checked == true){ 
        returnArray += "<br>List of dog breeds: <br>";
        for(var arrayCounter = 0; arrayCounter < dogBreeds.length; arrayCounter ++){
            returnArray += dogBreeds[arrayCounter] + "<br>";
        }
        document.getElementById("dogInput").checked = false; //Resetting the checkbox
    }

    //Comparing the value of the checkbox to true, if true adding the breeds to the array
    if(catSelect.checked == true){ 
        returnArray += "<br>List of cat breeds: <br>";
        for(var arrayCounter = 0; arrayCounter < catBreeds.length; arrayCounter ++){
            returnArray += catBreeds[arrayCounter] + "<br>";
        }
        document.getElementById("catInput").checked = false; //Resetting the checkbox
    }

    //Displying the result based on user choice
    document.getElementById("arrayText").innerHTML = returnArray;
}


//Seperate function to allow for a full reset without submitting input with printArray
function arrayReset(){
    document.getElementById("catInput").checked = false;
    document.getElementById("dogInput").checked = false;
    document.getElementById("arrayText").innerHTML = "";
}


//Initiating a Constant and displays properties and then changes them if the user wants
function consFunction(displayProp){
    const myCar = {model: "Scion", price: "20,000", color: "Red"}

    //Displays the original const with two variables
    if(displayProp == 'default'){
        document.getElementById("consText").innerHTML = "My car is a " + myCar.color +" " + myCar.model;
    }

    //Displays the const with a changed variable and an added variable
    else if(displayProp == 'altered'){
        myCar.brand = "Honda";
        myCar.model = "Civic";
        document.getElementById("consText").innerHTML = "My car is a " + myCar.brand + " " + myCar.model;
    }

}


//Returning information based on the object selected from the dropdown menu
function objectFunc(){
    objectChoice = document.getElementById("objectInput").value;

//I wanted to give an option between multiple objects to display and when I was doing that I thought
//man it'd be easier if I could just make a function to create each object instead of repeating code
//so here we are, this is a function that will allow you to create the objects I wanted much easier
    function housePet(sleep, age, feed){
        this.age = age;
        this.feed = feed;
        this.sleep = sleep;
        this.description = function(){
            return "These pets sleep around "+this.sleep+" a day, should eat "+this.feed+" And on average live to be around "+this.age+" old.";
        }
    }

    //Actually creating each object
    let dog = new housePet("10-12 hours", "11-13 years", "twice a day");
    let cat = new housePet("12-16 hours", "10-15 years", "two to three times a day");
    let fish = new housePet("8-10 hours", "3-5 years", "once.")
    
    //Output depends on input from user based on selection box
    if(document.getElementById("objectInput").value == "dogs"){
        document.getElementById("objectText").innerHTML = dog.description();
    }
    else if(document.getElementById("objectInput").value == "cats"){
        document.getElementById("objectText").innerHTML = cat.description();
    }
    else if(document.getElementById("objectInput").value == "fish"){
        document.getElementById("objectText").innerHTML = fish.description();
    }


    
}
