let container = document.querySelector(".container");

let input = document.querySelector('input[type="text"]');

let form = document.querySelector("#form");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task)=>{

    createTask(task);

});

form.addEventListener('submit',(event)=>{

    event.preventDefault();

    // Empty input check
    if(input.value === ""){
        return;
    }

    // Array me task add
    tasks.push(input.value);

    // Local Storage update
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Screen pe task show
    createTask(input.value);

    // Input clear
    input.value = "";

});

function createTask(task){

  

    // Create task div
    let newDiv = document.createElement('div');

    newDiv.classList.add('list');

    // Create paragraph
    let para = document.createElement('p');

    para.textContent = task;

    // Create delete button
    let btn = document.createElement("button");

    btn.classList.add('btn');

    btn.textContent = "❌";

    // Add paragraph and button inside div
    newDiv.appendChild(para);

    newDiv.appendChild(btn);

    // Add div inside container
    container.appendChild(newDiv);

    // Delete task
    btn.addEventListener('click',(event)=>{

        event.stopPropagation();

        newDiv.remove();
        tasks=tasks.filter((t)=>t!==task);
         
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

    // Complete task
    newDiv.addEventListener('click',()=>{

        if(para.style.textDecoration === "line-through"){

            para.style.textDecoration = "none";

        }else{

            para.style.textDecoration = "line-through";

        }

    });



}