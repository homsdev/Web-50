const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeAllActiveClassOnPanels();
    panel.classList.add("active");
  });
});

function removeAllActiveClassOnPanels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
