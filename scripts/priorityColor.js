const priColor = (priority) => {
    if(priority === "Low"){
        return "bgGray";
    } else if(priority === "Medium"){
        return "bgYellow";
    } else if(priority === "High"){
        return "bgRed"
    }
}

export {priColor}