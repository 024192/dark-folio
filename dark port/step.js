const menu = document.querySelector(".fa-bars"),
 navigation = document.querySelector(".navigation"),
 sections = document.querySelectorAll("section"),
 navLinks = document.querySelectorAll(".navigation a"),
 moon = document.querySelector(".fa-moon"),
 dots = document.querySelectorAll(".dot"),
 scrollTop = document.querySelector(".fa-arrow-up");

// for bright feature
// moon.onclick = function () {
//   moon.classList.toggle("fa-sun");
//   document.body.classList.toggle("dark-mode");
// };

// header sticky
window.onscroll = function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 95);
  sections.forEach((section) => {
    section.classList.add("transition");
  })

  navigation.classList.remove("nav-toggle");

  // // scrool section
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
      menu.classList.toggle("fa-bar");
    }
  });
};

// menu toggle
menu.onclick = function () {
  menu.classList.toggle("fa-times");
  navigation.classList.toggle("nav-toggle");
};

// changing pics
function changePic(change) {
  document.querySelector(".slides").src = change;
}

// navlinks active
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    menu.classList.remove("fa-times");
  });
});

// active dot
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dots.forEach((dot) => dot.classList.remove("active"));
    this.classList.add("active");
  });
});
