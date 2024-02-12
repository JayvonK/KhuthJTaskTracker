import { addTodo, addProgress} from "./addTasks.js";
import { saveToLocalStorageToDo, getLocalStorageToDo, getLocalStorageProgress, saveToLocalStorageProgress} from "./localStorage.js";

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
let todoVal = document.getElementById("todoVal");
let progressVal = document.getElementById("progressVal");
let completeVal = document.getElementById("completeVal");

const updatePage = () => {
    taskRow1.innerHTML = "";
    let arr = getLocalStorageToDo();
    let arr2 = getLocalStorageProgress();

    for(let i = 0; i < arr.length; i++){
        addTodo(arr[i][0], arr[i][1], arr[i][2], arr[i][3]);
    }

    for(let i = 0; i < arr2.length; i++){
        addProgress(arr2[i][0], arr2[i][1], arr2[i][2], arr2[i][3]);
    }
    todoVal.textContent = arr.length;
    progressVal.textContent = arr2.length;

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
            let todo = [];
            todo.push(taskName.value);
            todo.push(taskDescription.value);
            todo.push(priority.value);
            todo.push(date.value);
            saveToLocalStorageProgress(todo);
            updatePage();
        }
    }
})

progressTab.addEventListener('click', () => {
    taskRow2.classList.remove("hidden");
    progressTab.classList.add("active");
    taskRow1.classList.add("hidden");
    todoTab.classList.remove("active");
})

todoTab.addEventListener('click', () => {
    taskRow1.classList.remove("hidden");
    todoTab.classList.add("active");
    taskRow2.classList.add("hidden");
    progressTab.classList.remove("active");
})





export { taskRow1, taskRow2, taskRow3, updatePage }