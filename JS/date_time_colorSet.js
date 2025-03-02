// Updating the date dynamically

function updateDate() {
  const now = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);

  // Split the formatted date
  const [weekday, month, day, year] = formattedDate.split(" ");

  document.getElementById("day").textContent = `${weekday}`;
  document.getElementById("full-date").textContent = `${month} ${day} ${year}`;
}

updateDate();

// Theme button related code :
document.getElementById("theme-btn").addEventListener("click", function () {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  document.body.style.backgroundColor = getRandomColor();
});

// discover new button to new page :
document.getElementById("discover-new")
.addEventListener("click",
    function(){
        window.location.href="./blog.html";
    }
)
 // Back to desk button
 function backToDesk() {
    window.location.href = "./index.html";
    }


