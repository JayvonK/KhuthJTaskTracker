const getLocalStorageToDo = () => {
    if(localStorage.getItem("todo") === null){
        return [];
    } else {
        return JSON.parse(localStorage.getItem("todo"));
    }
}

const saveToLocalStorageToDo = () => {
    
}