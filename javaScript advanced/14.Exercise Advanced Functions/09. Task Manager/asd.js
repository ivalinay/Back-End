
//most functionality with one task

document.body.innerHTML = `
<main>
    <div class="wrapper">
        <section>
            <div>
                <h1 class="gray">Add Task</h1>
            </div>
            <div>
                <form action="">
                    <label for="task">Task</label><br>
                    <input type="text" id="task" name="task" placeholder="JS Advanced Exam"><br>
                    <label for="description">Description</label><br>
                    <textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"></textarea>
                    <label for="date">Due Date</label><br>
                    <input type="text" id="date" name="date" placeholder="2020.04.08"><br>
                    <button id="add">Add</button>
                </form>
            </div>
        </section>

        <section>
            <div>
                <h1 class="orange">Open</h1>
            </div>
            <div>
                
            </div>
        </section>
        <section>
            <div>
                <h1 class="yellow">In Progress</h1>
            </div>
            <div id="in-progress">
                
            </div>
        </section>
        <section>
            <div>
                <h1 class="green">Complete</h1>
            </div>
            <div>
                
            </div>
        </section>
    </div>
</main>
`;

result();

let elements = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
}
elements["addButton"] = document.getElementById("add");

//add first task
elements.task.value = "JS Advanced Exam";
elements.description.value = "Lern DOM, Unit Testing and Classes";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections[1];
let inProgress = sections[2];
let complete = sections[3];

//testing if task is added
assert.equal(open.children[1].children[0].children[0].textContent, "JS Advanced Exam", "'JS Advanced Exam' is missing in 'Open' section ");

//moving the task to "In Progress" section
let startBtn = open.children[1].children[0].children[3].children[0];
startBtn.click();

//testing if the task is in "In Progress" section
assert.equal(inProgress.children[1].children[0].children[1].textContent, "Description: Lern DOM, Unit Testing and Classes", "'Lern DOM, Unit Testing and Classes' is missing in 'In Progress' section ");

//moving the task to "Completed" section
let finishBtn = inProgress.children[1].children[0].children[3].children[1];
finishBtn.click();

//testing the task in "Completed" section
assert.equal(complete.children[1].children[0].children[2].textContent, "Due Date: 2020.04.08" , "'2020.04.08' is missing in 'Completed' section ");
