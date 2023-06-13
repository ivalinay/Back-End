function solve() {
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", addButtonClicked);

  function addButtonClicked() {
    let taskInput = document.getElementById("task");
    let descriptionInput = document.getElementById("description");
    let dateInput = document.getElementById("date");

    if (taskInput.value === "" || descriptionInput.value === "" || dateInput.value === "") return;
    let sections = document.getElementsByTagName("section");
    let openSection = sections[1];

    let openDiv = openSection.getElementsByTagName("div")[1];

    let startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", moveToProgress);
    startButton.classList.add("green");

    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", deleteArticle);
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("red");

    let div = document.createElement("div");
    div.classList.add("flex");

    div.appendChild(startButton);
    div.appendChild(deleteButton);

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(taskInput.value);
    h3.appendChild(h3Text);

    let p1 = document.createElement("p");
    let p1Text = document.createTextNode(`Description: ${descriptionInput.value}`);
    p1.appendChild(p1Text);

    let p2 = document.createElement("p");
    let p2Text = document.createTextNode(`Due Date: ${dateInput.value}`);
    p2.appendChild(p2Text);

    let article = document.createElement("article");
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(div);

    openDiv.appendChild(article);
  }
  function moveToProgress(e) {
    let openArticle = e.target.parentElement.parentElement;
    let inProgressDiv = document.getElementById("in-progress");

    inProgressDiv.appendChild(openArticle);

    let buttonsDiv = openArticle.getElementsByTagName("div")[0];
    buttonsDiv.innerHTML = "";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("red");
    deleteButton.addEventListener("click", deleteArticle);
    buttonsDiv.appendChild(deleteButton);

    let finishButton = document.createElement("button");
    finishButton.textContent = "Finish";
    finishButton.addEventListener("click", completeArticle);
    finishButton.classList.add("orange");

    buttonsDiv.appendChild(finishButton);
  }
  function deleteArticle(e) {
    let article = e.target.parentElement.parentElement;
    article.remove();
  }
  function completeArticle(e) {
    let article = e.target.parentElement.parentElement;

    let div = document.querySelector("section:nth-child(4) > div:nth-child(2)");
    div.appendChild(article);

    let buttonsDiv = article.getElementsByTagName("div")[0];
    buttonsDiv.remove();
  }
}
