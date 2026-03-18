const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.onclick = () => {
nav.classList.toggle("active");
};

/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.onclick = function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
nav.classList.remove("active");
}
});

/* skills animation */
const bars = document.querySelectorAll(".fill");
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.width = entry.target.dataset.width;
}
});
});

bars.forEach(bar=>observer.observe(bar));
