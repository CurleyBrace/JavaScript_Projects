//Var to track who's turn
let activePlayer = 'X';
//Array to store past moves, also used to determine win conditions
let selectedSquares = [];

//Function for placing x or o
function placeXOrO(squareNumber) {
    //Checking to see if the space is open
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //Retrieves the square that was selected
        let select = document.getElementById(squareNumber);

        //Checking Turn and placing img
        if(activePlayer === 'X'){
            select.style.backgroundImage = 'url("img/dog.png")';
            
            //Playing Dog Placement Sound
            audio('./media/bark.wav');
        } else {
            select.style.backgroundImage = 'url("img/cat.png")';

            //Playing Cat Placement Sound
            audio('./media/meow.mp3');
        }

        //Concatenting an array with squareNumber and activePlayer
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        //Changing Active Player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }


        //Checking for computer's turn
        if(activePlayer === 'O'){
            disableClick();
            //Waits 1s before computer placing image and re-enabling click
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        return true;
    }

//Selecting Random Square during computers Turn
    function computersTurn() {
        let success = false;
        let pickASquare;

        while(!success) {
            //Selecting Random number for square
            pickASquare = String(Math.floor(Math.random() *9));

            //Checking to see if square is already selected
            if(placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//Parsing through selectedSquares array to check for win conditions
//drawWinLine will draw a line and end game if conditions are met
function checkWinConditions() {
    //X 0, 1, 2 condition
    if      (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100) }
    //X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
    //X 0 , 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    //O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    //O 0 , 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }

    //Checking for Tie, if all squares are filled and no conditions are fulfilled
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        //Setting a .3s timer before resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    //Checks to see if an array includes 3 strings.
    //Used to check for win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true }
    }
}

//Makes the body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //Makes it clickable again after 1s
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//Takes string parameter and plays audio based on that when called
function audio(audioURL){
    let audio = new Audio(audioURL);
    audio.play();
}

//Using HTML Canvas it will draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('winLines');
    const c = canvas.getContext('2d');

    //indicating where the start and end of each line is
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //Temporary values used to update animation loop
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clearing content from last loop
        c.clearRect(0, 0, 608, 608)
        //Determining Line Path
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        //Line Styling
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        //Checking for end point
        if (x1 <= x2 && y1 <= y2) {
            //Adding 10 to previous end points
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }         
            if( x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        //Necessary for the 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //Clearing Canvas after Win Line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    //Finishing Win Condition Functions, disable clicking until reset,
    //playing win audio, drawing line, and resetting
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Reset game in the event of a tie or win
function resetGame() {
    //Iterates through each square element
    for (let i = 0; i < 9; i ++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}