let todo = [];
let req = prompt("please enter your request")
while(true){
    if(req == "quit"){
        console.log("quitting app")
        break;
    }

    if(req == "list") {
        console.log("-------------")
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i])
        }
           console.log("-------------")
    } else if(req == 'add'){
      let task = prompt("Please enter the task who you want to add ")
      todo.push(task)
      console.log("task is added")
    }else if(req == "delete"){
    let indx = prompt("Please enter the task index")
    todo.splice(indx, 1)
    console.log("Task deleted")
 
    } else {
        console.log("wrong request")
    }
req = prompt("please enter your request")
}