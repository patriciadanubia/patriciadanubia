const estetic = document.querySelector(".navestetic");

const navMenu = document.querySelector(".nav-menu");

estetic.addEventListener("click", () => {
    estetic.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
         estetic.classList.remove("active");
         navMenu.classList.remove("active");
     }))