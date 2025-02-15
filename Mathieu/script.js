function toggleNav() {
  let sidebar = document.querySelector(".sidebar");
  let openbtn = document.querySelector(".openbtn");

  if (sidebar.dataset.open) {
    sidebar.style.transform = "translate(-100%)";
    openbtn.style.display = "block"; // affiche le boutton
    sidebar.removeAttribute("data-open");
    sidebar.style.opacity = 0;
  } else {
    sidebar.style.transform = "translate(0)";
    openbtn.style.display = "none"; // cache le boutton
    sidebar.dataset.open = "true";
    sidebar.style.opacity = 1;
  }
}