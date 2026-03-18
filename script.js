/* MENU TOGGLE */
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
nav.classList.toggle("active");
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();

```
const target = document.querySelector(this.getAttribute("href"));

if (target) {
  target.scrollIntoView({
    behavior: "smooth"
  });
}

nav.classList.remove("active"); // auto close menu
```

});
});

/* SKILLS */
const bars = document.querySelectorAll(".fill");

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.width = entry.target.dataset.width;
}
});
});

bars.forEach(bar => observer.observe(bar));
}
