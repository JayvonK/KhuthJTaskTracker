import { taskRow1, taskRow2, taskRow3, updatePage } from "./app.js"
import { removeFromLocalStorageToDo, saveToLocalStorageToDo, removeFromLocalStorageProgress, saveToLocalStorageProgress, removeFromLocalStorageCompleted, saveToLocalStorageCompleted } from "./localStorage.js";
import { priColor } from "./priorityColor.js";

const addTodo = (name, description, priority, date) => {
    let tName = document.createElement("h4");
    tName.textContent = "Name: ";

    let tNameInput = document.createElement("input");
    tNameInput.type = "text";

    tName.append(tNameInput);

    let tDescription = document.createElement("h4");
    tDescription.textContent = "Description: ";

    let tDescriptionInput = document.createElement("input");
    tDescriptionInput.type = "text";

    tDescription.append(tDescriptionInput);

    let statLabel = document.createElement("label");
    statLabel.textContent = "Status: ";
    statLabel.htmlFor = "status";

    let statSelect = document.createElement("select");
    statSelect.name = "status";

    let statOpt = document.createElement("option");
    statOpt.value = "To-Do";
    statOpt.textContent = "To-Do";

    let statOpt2 = document.createElement("option");
    statOpt2.value = "In Progress";
    statOpt2.textContent = "In Progress";

    let statOpt3 = document.createElement("option");
    statOpt3.value = "Completed";
    statOpt3.textContent = "Completed";

    statSelect.append(statOpt);
    statSelect.append(statOpt2);
    statSelect.append(statOpt3);

    let priLabel = document.createElement("label");
    priLabel.textContent = "Priority: ";
    priLabel.htmlFor = "priority";

    let priSelect = document.createElement("select");
    priSelect.name = "priority";

    let priOpt = document.createElement("option");
    priOpt.value = "Low";
    priOpt.textContent = "Low";

    let priOpt2 = document.createElement("option");
    priOpt2.value = "Medium";
    priOpt2.textContent = "Medium";

    let priOpt3 = document.createElement("option");
    priOpt3.value = "High";
    priOpt3.textContent = "High";

    priSelect.append(priOpt);
    priSelect.append(priOpt2);
    priSelect.append(priOpt3);

    let tDate = document.createElement("h4");
    tDate.textContent = "Due Date: ";

    let tDateInput = document.createElement("input");
    tDateInput.type = "date";

    tDate.append(tDateInput);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    modalBody.append(tName);
    modalBody.append(tDescription);
    modalBody.append(statLabel);
    modalBody.append(statSelect);
    modalBody.append(priLabel);
    modalBody.append(priSelect);
    modalBody.append(tDate);

    let modalTitle = document.createElement("h1");
    modalTitle.className = "modal-title fs-5";
    modalTitle.id = "exampleModalLabel";
    modalTitle.textContent = "Edit Task";

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    modalHeader.append(modalTitle);

    let modalFoot = document.createElement("div");
    modalFoot.className = "modal-footer";
    
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.className = "btn btn-primary";
    saveButton.type = "button";


    let exitButton = document.createElement("button");
    exitButton.textContent = "Close";
    exitButton.className = "btn btn-secondary";
    exitButton.type = "button";

    modalFoot.append(saveButton);
    modalFoot.append(exitButton);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modalContent.append(modalFoot)

    let modalFade = document.createElement("div");
    modalFade.className = "absolute bgwhite hidden";

    modalFade.append(modalContent);

    let cardTitle = document.createElement("h5");
    cardTitle.textContent = `${name} `;
    cardTitle.className = "card-title";

    let cardSub = document.createElement("h6");
    cardSub.textContent = `(${priority}) ${date}`;
    cardSub.className = "card-subtitle mb-2 text-body-secondary";

    let cardtxt = document.createElement("p");
    cardtxt.textContent = description;
    cardtxt.className = "card-text";

    let edit = document.createElement("button");
    edit.type = "button";
    edit.className = "btn btn-primary";
    edit.textContent = "Edit Task";

    edit.addEventListener('click', () => {
        modalFade.className = "absolute bgwhite";
    })

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    cardBody.append(cardTitle);
    cardBody.append(cardSub);
    cardBody.append(cardtxt);
    cardBody.append(edit);
    cardBody.append(modalFade);
    
    let card = document.createElement("div");
    card.className = "card " + priColor(priority);
    card.style = "width: 18rem;";

    card.append(cardBody);
    
    exitButton.addEventListener('click', () => {
        modalFade.className = "modal absolute bgwhite";
    })

    saveButton.addEventListener('click', () => {
        console.log("click");
        if(tNameInput.value === "" || tDateInput.value === "" || tDescriptionInput.value === ""){
            alert("Please fill in all information");
        } else {
            if(statSelect.value === "To-Do"){
                removeFromLocalStorageToDo(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageToDo(ar);
                updatePage();
            } else if(statSelect.value === "In Progress") {
                removeFromLocalStorageToDo(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageProgress(ar);
                updatePage();
            } else {
                removeFromLocalStorageToDo(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageCompleted(ar);
                updatePage();
            }
        }
    })

    taskRow1.append(card);

}


const addProgress = (name, description, priority, date) => {
    let tName = document.createElement("h4");
    tName.textContent = "Name: ";

    let tNameInput = document.createElement("input");
    tNameInput.type = "text";

    tName.append(tNameInput);

    let tDescription = document.createElement("h4");
    tDescription.textContent = "Description: ";

    let tDescriptionInput = document.createElement("input");
    tDescriptionInput.type = "text";

    tDescription.append(tDescriptionInput);

    let statLabel = document.createElement("label");
    statLabel.textContent = "Status: ";
    statLabel.htmlFor = "status";

    let statSelect = document.createElement("select");
    statSelect.name = "status";

    let statOpt = document.createElement("option");
    statOpt.value = "To-Do";
    statOpt.textContent = "To-Do";

    let statOpt2 = document.createElement("option");
    statOpt2.value = "In Progress";
    statOpt2.textContent = "In Progress";

    let statOpt3 = document.createElement("option");
    statOpt3.value = "Completed";
    statOpt3.textContent = "Completed";

    statSelect.append(statOpt);
    statSelect.append(statOpt2);
    statSelect.append(statOpt3);

    let priLabel = document.createElement("label");
    priLabel.textContent = "Priority: ";
    priLabel.htmlFor = "priority";

    let priSelect = document.createElement("select");
    priSelect.name = "priority";

    let priOpt = document.createElement("option");
    priOpt.value = "Low";
    priOpt.textContent = "Low";

    let priOpt2 = document.createElement("option");
    priOpt2.value = "Medium";
    priOpt2.textContent = "Medium";

    let priOpt3 = document.createElement("option");
    priOpt3.value = "High";
    priOpt3.textContent = "High";

    priSelect.append(priOpt);
    priSelect.append(priOpt2);
    priSelect.append(priOpt3);

    let tDate = document.createElement("h4");
    tDate.textContent = "Due Date: ";

    let tDateInput = document.createElement("input");
    tDateInput.type = "date";

    tDate.append(tDateInput);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    modalBody.append(tName);
    modalBody.append(tDescription);
    modalBody.append(statLabel);
    modalBody.append(statSelect);
    modalBody.append(priLabel);
    modalBody.append(priSelect);
    modalBody.append(tDate);

    let modalTitle = document.createElement("h1");
    modalTitle.className = "modal-title fs-5";
    modalTitle.id = "exampleModalLabel";
    modalTitle.textContent = "Edit Task";

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    modalHeader.append(modalTitle);

    let modalFoot = document.createElement("div");
    modalFoot.className = "modal-footer";
    
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.className = "btn btn-primary";
    saveButton.type = "button";


    let exitButton = document.createElement("button");
    exitButton.textContent = "Close";
    exitButton.className = "btn btn-secondary";
    exitButton.type = "button";

    modalFoot.append(saveButton);
    modalFoot.append(exitButton);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modalContent.append(modalFoot)

    let modalFade = document.createElement("div");
    modalFade.className = "absolute bgwhite hidden";

    modalFade.append(modalContent);

    let cardTitle = document.createElement("h5");
    cardTitle.textContent = `${name} `;
    cardTitle.className = "card-title";

    let cardSub = document.createElement("h6");
    cardSub.textContent = `(${priority}) ${date}`;
    cardSub.className = "card-subtitle mb-2 text-body-secondary";

    let cardtxt = document.createElement("p");
    cardtxt.textContent = description;
    cardtxt.className = "card-text";

    let edit = document.createElement("button");
    edit.type = "button";
    edit.className = "btn btn-primary";
    edit.textContent = "Edit Task";

    edit.addEventListener('click', () => {
        modalFade.className = "absolute bgwhite";
    })

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    cardBody.append(cardTitle);
    cardBody.append(cardSub);
    cardBody.append(cardtxt);
    cardBody.append(edit);
    cardBody.append(modalFade);
    
    let card = document.createElement("div");
    card.className = "card " + priColor(priority);
    card.style = "width: 18rem;";

    card.append(cardBody);
    
    exitButton.addEventListener('click', () => {
        modalFade.className = "modal absolute bgwhite";
    })

    saveButton.addEventListener('click', () => {
        console.log("click");
        if(tNameInput.value === "" || tDateInput.value === "" || tDescriptionInput.value === ""){
            alert("Please fill in all information");
        } else {
            if(statSelect.value === "In Progress"){
                removeFromLocalStorageProgress(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageProgress(ar);
                updatePage();
            } else if(statSelect.value === "To-Do") {
                removeFromLocalStorageProgress(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageToDo(ar);
                updatePage();
            } else {
                removeFromLocalStorageProgress(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageCompleted(ar);
                updatePage();
            }
        }
    })

    taskRow2.append(card);

}

const addCompleted = (name, description, priority, date) => {
    let tName = document.createElement("h4");
    tName.textContent = "Name: ";

    let tNameInput = document.createElement("input");
    tNameInput.type = "text";

    tName.append(tNameInput);

    let tDescription = document.createElement("h4");
    tDescription.textContent = "Description: ";

    let tDescriptionInput = document.createElement("input");
    tDescriptionInput.type = "text";

    tDescription.append(tDescriptionInput);

    let statLabel = document.createElement("label");
    statLabel.textContent = "Status: ";
    statLabel.htmlFor = "status";

    let statSelect = document.createElement("select");
    statSelect.name = "status";

    let statOpt = document.createElement("option");
    statOpt.value = "To-Do";
    statOpt.textContent = "To-Do";

    let statOpt2 = document.createElement("option");
    statOpt2.value = "In Progress";
    statOpt2.textContent = "In Progress";

    let statOpt3 = document.createElement("option");
    statOpt3.value = "Completed";
    statOpt3.textContent = "Completed";

    statSelect.append(statOpt);
    statSelect.append(statOpt2);
    statSelect.append(statOpt3);

    let priLabel = document.createElement("label");
    priLabel.textContent = "Priority: ";
    priLabel.htmlFor = "priority";

    let priSelect = document.createElement("select");
    priSelect.name = "priority";

    let priOpt = document.createElement("option");
    priOpt.value = "Low";
    priOpt.textContent = "Low";

    let priOpt2 = document.createElement("option");
    priOpt2.value = "Medium";
    priOpt2.textContent = "Medium";

    let priOpt3 = document.createElement("option");
    priOpt3.value = "High";
    priOpt3.textContent = "High";

    priSelect.append(priOpt);
    priSelect.append(priOpt2);
    priSelect.append(priOpt3);

    let tDate = document.createElement("h4");
    tDate.textContent = "Due Date: ";

    let tDateInput = document.createElement("input");
    tDateInput.type = "date";

    tDate.append(tDateInput);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    modalBody.append(tName);
    modalBody.append(tDescription);
    modalBody.append(statLabel);
    modalBody.append(statSelect);
    modalBody.append(priLabel);
    modalBody.append(priSelect);
    modalBody.append(tDate);

    let modalTitle = document.createElement("h1");
    modalTitle.className = "modal-title fs-5";
    modalTitle.id = "exampleModalLabel";
    modalTitle.textContent = "Edit Task";

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    modalHeader.append(modalTitle);

    let modalFoot = document.createElement("div");
    modalFoot.className = "modal-footer";
    
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.className = "btn btn-primary";
    saveButton.type = "button";


    let exitButton = document.createElement("button");
    exitButton.textContent = "Close";
    exitButton.className = "btn btn-secondary";
    exitButton.type = "button";

    modalFoot.append(saveButton);
    modalFoot.append(exitButton);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modalContent.append(modalFoot)

    let modalFade = document.createElement("div");
    modalFade.className = "absolute bgwhite hidden";

    modalFade.append(modalContent);

    let cardTitle = document.createElement("h5");
    cardTitle.textContent = `${name} `;
    cardTitle.className = "card-title";

    let cardSub = document.createElement("h6");
    cardSub.textContent = `(${priority}) ${date}`;
    cardSub.className = "card-subtitle mb-2 text-body-secondary";

    let cardtxt = document.createElement("p");
    cardtxt.textContent = description;
    cardtxt.className = "card-text";

    let edit = document.createElement("button");
    edit.type = "button";
    edit.className = "btn btn-primary";
    edit.textContent = "Edit Task";

    edit.addEventListener('click', () => {
        modalFade.className = "absolute bgwhite";
    })

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    cardBody.append(cardTitle);
    cardBody.append(cardSub);
    cardBody.append(cardtxt);
    cardBody.append(edit);
    cardBody.append(modalFade);
    
    let card = document.createElement("div");
    card.className = "card " + priColor(priority);
    card.style = "width: 18rem;";

    card.append(cardBody);
    
    exitButton.addEventListener('click', () => {
        modalFade.className = "modal absolute bgwhite";
    })

    saveButton.addEventListener('click', () => {
        console.log("click");
        if(tNameInput.value === "" || tDateInput.value === "" || tDescriptionInput.value === ""){
            alert("Please fill in all information");
        } else {
            if(statSelect.value === "Completed"){
                removeFromLocalStorageCompleted(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageCompleted(ar);
                updatePage();
            } else if(statSelect.value === "In Progress") {
                removeFromLocalStorageCompleted(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageProgress(ar);
                updatePage();
            } else {
                removeFromLocalStorageCompleted(name);
                let ar = [];
                cardTitle.textContent = `${tNameInput.value} (${priSelect.value})`;
                cardSub.textContent = tDateInput.value;
                cardtxt.textContent = tDescriptionInput.value;
                ar.push(tNameInput.value, tDescriptionInput.value, priSelect.value ,tDateInput.value );
                saveToLocalStorageToDo(ar);
                updatePage();
            }
        }
    })

    taskRow3.append(card);

}



export { addTodo, addProgress, addCompleted }