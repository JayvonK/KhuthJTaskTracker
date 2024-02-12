const getLocalStorageToDo = () => {
    if(localStorage.getItem("todo") === null){
        return [];
    } else {
        return JSON.parse(localStorage.getItem("todo"));
    }
}

const saveToLocalStorageToDo = (arr) => {
    let data = getLocalStorageToDo();
    let work = true;

    for(let i = 0; i < data.length; i++){
        if(data[i][i] === arr[i][i]){
            work = false;
        }
    }
    if(work){
        data.push(arr);
    }

    localStorage.setItem("todo", JSON.stringify(data));
}

const removeFromLocalStorageToDo = (name) => {
    let data = getLocalStorageToDo();
    let index = 0;

    for(let i = 0; i < data.length; i++){
        console.log(data[i][0] + name)
        if(data[i][0] === name){
            index = i; 
        }
    }
    data.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(data));
    
}

const getLocalStorageProgress = () => {
    if(localStorage.getItem("progress") === null){
        return [];
    } else {
        return JSON.parse(localStorage.getItem("progress"));
    }
}


const saveToLocalStorageProgress = (arr) => {
    let data = getLocalStorageProgress();
    let work = true;

    for(let i = 0; i < data.length; i++){
        if(data[i][i] === arr[i][i]){
            work = false;
        }
    }
    if(work){
        data.push(arr);
    }

    localStorage.setItem("progress", JSON.stringify(data));
}

export {saveToLocalStorageToDo, getLocalStorageToDo, removeFromLocalStorageToDo}