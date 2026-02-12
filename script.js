const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        document.body.style.background = "#ffffff";
        document.body.style.color = "#000000";
        toggle.textContent = "☀️";
    } else {
        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";
        toggle.textContent = "🌙";
    }
});
