let myArray = [];

//inserts a string into the array
let addTask = (task) => {
    myArray.push(task);
    console.log("Inserted " + task + " to array.");
    console.log("Array length = " + myArray.length);//displays the length of array
    //return myArray.length;
}

//goes through array and displays each variable
let listAllTasks = () => {
    //callback function
    myArray.forEach((task) => {
        console.log(task);
    })
}

//deletes a value in the array
let deleteTask = (task) => {
    let index = myArray.indexOf(task);//get position of array item
    if (index > -1) {
        myArray.splice(index, 1);
        console.log(task + " was deleted from array.");
    } else {
        //if the value isn't in the array
        console.log(task + " could not be found.");
    }
    console.log("Array length = " + myArray.length);
}

addTask("hello");
addTask("goodbye");
addTask("testing");
listAllTasks();
deleteTask("hello");
deleteTask("nope");
listAllTasks();