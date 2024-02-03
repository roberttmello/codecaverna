// Dark and light mode setup
const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

document.body.className = mode;

toggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light" ? "" : "light");
    body.classList.toggle("light");
});

// Dynamic year on footer 
const yearSpan = document.getElementById('year');
const year = new Date().getFullYear();
yearSpan.innerText = year;