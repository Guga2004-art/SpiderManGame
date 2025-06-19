const Hq = document.querySelector(".Hq");

Hq.addEventListener("click", () => {
  Hq.classList.toggle("flipped");
});

const NextPage = document.querySelector(".Next");
NextPage.addEventListener("click", function () {
  NextPage.style.display = "none";
});
