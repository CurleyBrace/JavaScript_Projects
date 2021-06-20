//This gets a task from the input
function getTodos() {
    //Creating an array from the input and pulling web memory
    var todos = new Array;
    var todosStr = localStorage.getItem('todo');
    //If input is not null, JSON will create an object
    if(todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

//Adds tasks to the array
function add() {
    //Takes inputed task and creates var
    var task = document.getElementById('task').value;

    var todos = getTodos();
    //Adding task to the end of array
    todos.push(task);
    //Converting input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {
    //Creating var from task that was retreived
    var todos = getTodos();

    //Sets up each task in a list
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '">x</button></li>';
    };
    html += '</ul>';
    //Displays task as list created above
    document.getElementById('todos').innerHTML = html;

    //Adding EventListeners to each remove button
    var removeBtn = document.getElementsByClassName("remove");
    for (var i = 0; i < removeBtn.length; i++){
        removeBtn[i].addEventListener("click", remove);
    }

}

//Function to remove item from and re-initialize local storage
function remove() {
    var keyIndex = this.id;
    var removeArray = getTodos();
    removeArray.splice(keyIndex, 1);
    localStorage.setItem('todo', JSON.stringify(removeArray));
    show();

    return false;
}

//Displays inputed task when Add Item is clicked
document.getElementById('add').addEventListener('click', add);
//Shows everything inputed constantly
show();