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

saveBtn.addEventListener('click', () => {
    if(date.value === "" || taskName.value === "" || taskDescription === ""){
        alert("Please fill in all information");
    } else {
        if(stat.value === "To-Do"){
            alert("to");
        } else {
            alert("pro");
        }
    }
})
