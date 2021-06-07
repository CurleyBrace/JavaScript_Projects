function varAssignVariables() { //Pulling two variables from HTML and changing them both on button click event
    var para = document.getElementById("varOne");
    var headerThree = document.getElementById("varTwo");
    para.style.color = "green";
    headerThree.style.color = "blue";
}

function plusEqualsFunction() {  //Two Variables being initialized and then concatenated using the += operator
    var sentence = "This is the "; 
    sentence += "plus/equals operator assignment.";
    document.getElementById("plusEquals").innerHTML = sentence;
}