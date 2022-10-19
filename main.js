const ul = document.querySelector("ul");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("li");
const links = document.querySelectorAll(".link");
const body = document.body;
// scroll event

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && !body.classList.contains("scroll-up")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

//burger menu function

burger.addEventListener("click", () => {
  ul.classList.toggle("nav-active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.toggle("nav-active");
  });
});
