///////////////////////////////////////////////////////////
// Set current year //
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make nav mobile work //
// nav-open
const btnNav = document.querySelector(".btn-nav-mobile");
const headerEL = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// close the nav when we click a link
// nav-item
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("nav-item"))
      headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Make header sticky (with js functionality)
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting)
      document.querySelector(".header").classList.add("sticky");

    if (ent.isIntersecting)
      document.querySelector("header").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(sectionHeroEl);
