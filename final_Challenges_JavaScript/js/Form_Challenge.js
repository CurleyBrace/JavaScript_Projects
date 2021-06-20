function validateForm(){
    var phoneNumb = document.forms["testForm"]["phoneNum"].value;

    //Splitting input into a string to allow for splitting at dashes
    var phoneStr = phoneNumb.toString().split('-');
    
    //Checking to ensure each string only contains digits and text was not entered to bypass the format requirements
    for(let i = 0; i < phoneStr.length; i++) {
        let isNum = /^\d+$/.test(phoneStr[i]);
        if(isNum == false){
            alert("Please only enter numbers.");
            return false;
        }
    }

    //Checking the length of each split to ensure the format is correct and a full phone number was entered
    if (phoneStr[0].length != 3 || phoneStr[1].length != 3 || phoneStr[2].length != 4){
        alert("Please fill out the form in the format listed below.");
        return false;
    } else {
        alert("Thank you for your entry!");
    }

}
