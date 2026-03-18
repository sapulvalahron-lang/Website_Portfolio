const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.onclick = () => {
nav.classList.toggle("active");
};

/* scroll fix */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.onclick = e=>{
e.preventDefault();
document.querySelector(link.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
nav.classList.remove("active");
};
});

/* skill animation */
const bars = document.querySelectorAll(".fill");
const obs = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.width = e.target.dataset.width;
}
});
});
bars.forEach(b=>obs.observe(b));
