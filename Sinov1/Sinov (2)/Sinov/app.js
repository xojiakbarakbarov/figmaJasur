const modal = document.getElementById("modal");
const showBtn = document.getElementById("show-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
