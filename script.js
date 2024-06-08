const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-Task");

inputBox.focus(); //one time thing
inputBox.select(); // always

inputBox.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === 13) {
    click();
  }
});

addBtn.addEventListener("click", function click(event) {
  event.preventDefault();
  if (inputBox.value.trim() === "") {
    alert("You must first enter something");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
    // console.log(event, "event");
  }
  inputBox.value = "";
  saveData();
});

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
