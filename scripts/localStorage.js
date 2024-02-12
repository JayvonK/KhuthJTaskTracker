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

export {saveToLocalStorageToDo, getLocalStorageToDo}