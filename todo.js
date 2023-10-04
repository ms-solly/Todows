document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">-</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".delete").addEventListener("click", function() {
                li.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtn.click();
        }
    });
});
