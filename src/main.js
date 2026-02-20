import "./style.css";

const bellBtn = document.getElementById("notif");
const bellNumber = document.getElementById("bell-number");
const list = document.getElementById("list");
const markAllBtn = document.getElementById("mark");
const notifications = document.querySelectorAll(".notification-item");

let count = notifications.length;
bellNumber.textContent = count;

bellBtn.addEventListener("click", () => {
  list.classList.toggle("hidden");
});

notifications.forEach((notif) => {
  notif.addEventListener("click", () => {
    if (notif.classList.contains("border-l-4")) {
      notif.classList.remove("border-l-4", "border-text-300");
      count--;
      bellNumber.textContent = count;
    }
  });
});

markAllBtn.addEventListener("click", () => {
  notifications.forEach((notif) => {
    notif.classList.remove("border-l-4", "border-text-300");
  });

  count = 0;
  bellNumber.textContent = count;
});
