
const taskButtons = document.querySelectorAll(".task-btn");

for(const taskButton of taskButtons)
{
    taskButton.addEventListener('click', function(){
        
        taskButton.classList.add("btn-disabled");
        const tasks = document.getElementById('assigned-task');
        const completeTasks = document.getElementById('completed-task')
        
        const tasksConvert = parseInt(tasks.innerText);
        const completeTasksConvert = parseInt(completeTasks.innerText);

        if(tasksConvert > 0)
        {
            const remainTasks = tasksConvert - 1;
            const totalTaskCompleted = completeTasksConvert + 1;

            tasks.innerText = remainTasks;

            completeTasks.innerText = totalTaskCompleted;
        }
        
        const cardTitle = taskButton.parentElement.parentElement.parentElement.childNodes[3].innerText

        const div = document.createElement('div');

        div.innerHTML = `
        <h2 class = "bg-[#F4F7FF] mt-5 p-2 rounded-lg"> You have successfully completed the task ${cardTitle};
        `

        document.getElementById('activity-log').appendChild(div);
        
    });

}





