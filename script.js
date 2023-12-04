const todoInput = document.querySelector("#todoInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("Please enter a value for the task.");
  } else {
    
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    const todoTaskValue = document.createTextNode(todoInput.value);
    const buttonText = document.createTextNode("X");

    listItem.appendChild(todoTaskValue);
    button.appendChild(buttonText);

    taskList.appendChild(listItem).appendChild(button);

    listItem.addEventListener("click", function (event) {
      const target = event.target;
      target.classList.toggle("done");
    });

    button.addEventListener("click", function (event) {
      const target = event.currentTarget;
      target.closest("li").remove();
    });

    todoInput.value = "";
  }
});