const ul = document.querySelector("ul");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("li");
const bars = document.querySelector("#bars");
const cross = document.querySelector("#cross");

//burger menu function
console.log(navLinks);
burger.addEventListener("click", () => {
  ul.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fadeNavLinks 0.3s ease forwards ${
        index / 7 + 0.3
      }s `;
    }
  });
});
