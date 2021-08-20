const addTask = document.getElementById("add-task");
const addTaskInput = document.getElementById("add-task-input");
const searchTask = document.getElementById("search-task");
const searchTaskInput = document.getElementById("search-task-input");
const taskLists = document.getElementById("task-ol");
const singleTask = document.getElementsByClassName("task-li");
let totalTask = document.getElementById("total-task");
let doneTask = document.getElementById("compleated-task");
let unfinishedTask = document.getElementById("unfinished-task");
let doneBtn = document.getElementsByClassName("done");


addTask.addEventListener("click", function addingTask(){
if(addTaskInput.value==""){
    alert("Task can't be empty , Please enter a task");
}
else{
   const list = document.createElement("li");
   list.classList.add("task-li", "mb-2", "border", "border-light", "p-3");
   list.innerHTML = `${addTaskInput.value} <br>  <button class="mt-1 btn btn-info done">Done</button>`;
   taskLists.appendChild(list);
   addTaskInput.value = " ";
   totalTask.innerText = Number(totalTask.innerText)+1;
   unfinishedTask.innerText = Number(unfinishedTask.innerText)+1 ;
}
});



    taskLists.addEventListener('click',function(e){
        console.log(e.target.tagName);
        if(e.target.tagName=="BUTTON"){  
         e.target.disabled = true;
         console.log(doneTask.innerText+" first");
         doneTask.innerText = Number(doneTask.innerText)+1;
         console.log(doneTask.innerText+" secont");
         unfinishedTask.innerText = Number(unfinishedTask.innerText)-1 ;

        }
    
         
        })



        function inputChange(event) {
            const searchKey = event.target.value;
          
          console.log(searchKey);
          
            filterNotes(searchKey);
          }



        function filterNotes(searchKey) {
        for (let i = 0; i < singleTask.length; i++){

            if(singleTask[i].innerText.toLowerCase().includes(searchKey.toLowerCase())){
                singleTask[i].style.display ="block";
            }
            else{
                singleTask[i].style.display ="none";
            }
        }
    }




