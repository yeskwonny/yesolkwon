const btns = document.querySelectorAll(".buttons");
const bioParagraph = document.querySelector(".profile-detail-bio");
const skillParagraph = document.querySelector(".profile-detail-skills");
const deskNav = document.querySelector(".desktop-menu");
const mobileNav = document.querySelector(".mobile-nav");
// navlinks active classlist remove
btns.forEach((b) =>
  b.addEventListener("click", function () {
    let btnId = b.getAttribute("data-id");

    if (btnId === "bio") {
      bioParagraph.classList.toggle("hidden");
      bioParagraph.classList.toggle("visible");
      skillParagraph.classList.remove("visible");
      skillParagraph.classList.add("hidden");
    } else {
      skillParagraph.classList.toggle("hidden");
      skillParagraph.classList.toggle("visible");
      bioParagraph.classList.remove("visible");
      bioParagraph.classList.add("hidden");
    }
  })
);
// how can i do if i click the ohter button close the the ohter part

mobileNav.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  deskNav.classList.toggle("active");
});
