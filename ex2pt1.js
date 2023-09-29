//2.a + 2.b + 2.c
const DataRep = (myValue, num1, num2) => {
    console.log(myValue, "\n", num1 + num2);
}

DataRep("Data Representation & Querying", 2, 2);



//2.d
const ages = [25, 31, 42, 77];

const test = ages.map((item) => {

    if (item < 70) {
        return item * 2;
    }
    else if (item > 70) {
        return item;
    }
})

console.log(test)

//3.a
let myArray = [];
//3.b
let addTask = (task) => {
    let length = myArray.push(task);
    console.log("Task: " + task + " has been added to the Tasks!");
    return length;
}

//3.c
let listAllTasks = () => {

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

}

//3.d
let deleteTasks = (task) => {
    let index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Task: " + task + " has been deleted from the array.")
        return myArray.length;
    } else {
        console.log("Task: " + task + " not found in the array.")
    }

}

addTask("task 1");
addTask("task 2")
listAllTasks();
deleteTasks("task 1");

