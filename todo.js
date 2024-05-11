document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("add");
    const taskList = document.getElementById("task-list");
    const doneList = document.getElementById("done-list");
    const doneSection = document.querySelector(".done-section");

    function moveTaskToDone(taskElement) {
        const taskText = taskElement.querySelector("span").innerText;
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">🗑</button>
        `;
        doneList.appendChild(li);
        taskElement.remove();
        li.querySelector(".delete").addEventListener("click", function() {
            li.remove();
        });
    }

    addBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="done">✔️</button>
                <button class="delete">🗑</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".done").addEventListener("click", function() {
                moveTaskToDone(li);
            });

            li.querySelector(".delete").addEventListener("click", function() {
                li.remove();
            });

            if (doneSection.classList.contains("hidden")) {
                doneSection.classList.remove("hidden");
            }
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtn.click();
        }
    });
});
