// Some Functions In The Header 
let links = document.querySelector(".links");
let ul = document.querySelector("ul");
let body = document.body;
links.onclick = function () {
  ul.style.display = "block";
};
ul.onmouseleave = function () {
  ul.style.display = "none";
};
// End Header