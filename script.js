// Dark / Light Toggle
const toggle = document.getElementById("themeToggle");

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

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});
