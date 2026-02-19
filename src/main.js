import './style.css'
const bell_btnEl = document.getElementById("bell-btn");
const listEl = document.getElementById("list")
const markEl = document.getElementById("mark")
const notif_newEl = document.getElementById("notif-new");
const notif_youEl = document.getElementById("notif-you");
const notif_orderEl = document.getElementById("notif-order");

bell_btnEl.addEventListener("click", () =>{
    listEl.classList.toggle("!flex");
})


