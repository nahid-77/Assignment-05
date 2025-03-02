let completedTasksCount = 0;

function updateTask(btnId, taskElementId, totalTasksDoneId, activityLogId, taskId) {
  const btn = document.getElementById(btnId);
  const taskElement = document.getElementById(taskElementId);
  const totalTasksDone = document.getElementById(totalTasksDoneId);
  const activityLog = document.getElementById(activityLogId);
  const task = document.getElementById(taskId);

  let taskValue = parseInt(taskElement.innerText);
  taskElement.innerText = taskValue - 1;

  let navValue = parseInt(totalTasksDone.innerText);
  totalTasksDone.innerText = navValue + 1;

  btn.disabled = true;
  btn.style.opacity = "0.5";
  btn.style.cursor = "not-allowed";


  let now = new Date();
  let formattedTime = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

 
  let newParagraph = document.createElement("p");
  newParagraph.classList.add(
    "p-3",
    "bg-[#F4F7FF]",
    "rounded-lg",
    "shadow-md",
    "text-gray-700",
    "font-medium",
    "mt-2",
    "ml-2"
  );
  newParagraph.innerText = `You have completed the task ${task.innerText} at ${formattedTime}`;

  activityLog.appendChild(newParagraph);

  completedTasksCount++;

  if (completedTasksCount === 6) {
    alert("Congrats!!! You have completed all the current tasks");
  }
}


function clearActivityLog() {
  const activityLog = document.getElementById("activity-log");
  activityLog.innerHTML = "";
}

const buttons = document.getElementsByClassName("completed-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert("Board updated Successfully");

    updateTask(`completed-btn-${i + 1}`, "total-tasks", "total-tasks-done", "activity-log", `card-title-${i + 1}`);
  });
}

const clearHistoryButton = document.getElementById("clear-history-btn"); 
if (clearHistoryButton) {
  clearHistoryButton.addEventListener("click", clearActivityLog);
}