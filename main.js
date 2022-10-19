const ul = document.querySelector("ul");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("li");
const bars = document.querySelector("#bars");
const cross = document.querySelector("#cross");
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

links.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("nav-active");
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
});
