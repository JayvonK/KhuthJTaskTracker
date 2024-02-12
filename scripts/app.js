import { addTodo} from "./addTasks.js";
import { saveToLocalStorageToDo, getLocalStorageToDo} from "./localStorage.js";

let saveBtn = document.getElementById("saveBtn");
let date = document.getElementById("date");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
let stat = document.getElementById("stat");
let priority = document.getElementById("priority");
let closeBtn = document.getElementById("closBtn");
let taskRow1 = document.getElementById("taskRow1");
let taskRow2 = document.getElementById("taskRow2");
let taskRow3 = document.getElementById("taskRow3");
let todoTab = document.getElementById("todoTab");
let progressTab = document.getElementById("progressTab");
let completedTab = document.getElementById("completedTab");

const updatePage = () => {
    taskRow1.innerHTML = "";
    let arr = getLocalStorageToDo();

    for(let i = 0; i < arr.length; i++){
        addTodo(arr[i][0], arr[i][1], arr[i][2], arr[i][3])
    }
}

updatePage();

saveBtn.addEventListener('click', () => {
    if(date.value === "" || taskName.value === "" || taskDescription.value === ""){
        alert("Please fill in all information");
    } else {
        if(stat.value === "To-Do"){
            let todo = [];
            todo.push(taskName.value);
            todo.push(taskDescription.value);
            todo.push(priority.value);
            todo.push(date.value);
            saveToLocalStorageToDo(todo);
            updatePage();
        } else {
            alert("pro");
        }
    }
})




export { taskRow1, taskRow2, taskRow3 }