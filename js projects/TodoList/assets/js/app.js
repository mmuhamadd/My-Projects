var num = 1;

var tasks = document.querySelectorAll(".task");

var arrayOfTasks = [];

if(window.localStorage.getItem("todoList_tasks")){
    arrayOfTasks = JSON.parse(window.localStorage.getItem("todoList_tasks"));

}
var arrayOfDeleted = [];

if(window.localStorage.getItem("deleted")){
    arrayOfDeleted = JSON.parse(window.localStorage.getItem("deleted"));
}

window.onload = function(){
    addTask(document.getElementById("addTaskButton"));
     setTasks();
     document.getElementById("newDay").onclick = function(){
         window.localStorage.removeItem("deleted");
     }
}


function addTask(addTaskButton){
    addTaskButton.onclick = function(){
       taskInner =  prompt("Type...");
       if(taskInner.length >= 0){
        arrayOfTasks.push(taskInner);
        window.localStorage.setItem("todoList_tasks",JSON.stringify(arrayOfTasks));
       }
    }


    for(let i = 0; i < arrayOfTasks.length; i++){
        const el = document.createElement("button");
        el.classList.add('task');
        el.innerHTML = arrayOfTasks[i];
        el.id = `x${num}`;
        num++;
        document.getElementById("taskDiv").appendChild(el);
        tasks = document.querySelectorAll(".task");
    }
}


function setTasks(){
  
      for(let x = 0; x < arrayOfDeleted.length; x++){
        document.getElementById(arrayOfDeleted[x]).setAttribute("disabled","");
        document.getElementById(arrayOfDeleted[x]).style.textDecoration = 'line-through'
        document.getElementById(arrayOfDeleted[x]).style.textDecorationColor = 'darkred'
   
     }

     


    
    for(let i = 0; i < tasks.length; i++){
    
        tasks[i].ondblclick = function(){
              arrayOfDeleted.push(tasks[i].getAttribute("id"));
              window.localStorage.setItem("deleted",JSON.stringify(arrayOfDeleted));
              tasks[i].setAttribute("disabled","")
              tasks[i].style.textDecoration = 'line-through'
              tasks[i].style.textDecorationColor = 'darkred'
          }
     
           }
}