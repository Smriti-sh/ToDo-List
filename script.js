const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-Task");

addBtn.addEventListener("click", function (event) {
  if (inputBox.value.trim() === "") {
    alert("You must first enter something");
    return false;
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
    // console.log(event, "event");
    event.preventDefault();
  }
  inputBox.value = "";
  saveData();
});

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      e.preventDefault();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      e.preventDefault();
    }
    e.preventDefault();
  }
  // false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
