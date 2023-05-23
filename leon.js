// Some Functions In The Header
let links = document.querySelector(".links");
let ul = document.querySelector("ul");
let body = document.body;
links.onclick = function () {
  ul.style.display = "block";
};
links.onclick = function () {
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
};
document.addEventListener("click", function (event) {
  let targetElement = event.target;
  let isClickedInsideMenu = links.contains(targetElement);
  if (!isClickedInsideMenu) {
    ul.style.display = "none";
  }
});
// End Header
