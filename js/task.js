
const taskButtons = document.querySelectorAll(".task-btn");

for(const taskButton of taskButtons)
{
    taskButton.addEventListener('click', function(event){
        
        event.preventDefault();

        alert('Board updated successfully');

        taskButton.classList.add("btn-disabled");
        const tasks = document.getElementById('assigned-task');
        const completeTasks = document.getElementById('completed-task')
        
        const tasksConvert = parseInt(tasks.innerText);
        const completeTasksConvert = parseInt(completeTasks.innerText);

        const remainTasks = tasksConvert - 1;
        const totalTaskCompleted = completeTasksConvert + 1;

        tasks.innerText = remainTasks;

        completeTasks.innerText = totalTaskCompleted;
        
        
        const cardTitle = taskButton.parentElement.parentElement.parentElement.childNodes[3].innerText


        const now = new Date();
        const time = now.toLocaleTimeString();

        const div = document.createElement('div');

        div.innerHTML = `
        <h2 class = "bg-[#F4F7FF] mt-5 p-2 rounded-lg"> You have successfully completed the task ${cardTitle} at ${time};
        `
        
        document.getElementById('activity-log-history').appendChild(div);
        
    });

}


document.getElementById('activity-log-btn').addEventListener('click', function(event){
    event.preventDefault();

    const parentDiv = document.getElementById('activity-log-history');

    while(parentDiv.firstChild)
    {
        parentDiv.removeChild(parentDiv.firstChild);
    }

})


