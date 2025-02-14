function toggleNav() {
  let sidebar = document.querySelector(".sidebar");
  let openbtn = document.querySelector(".openbtn");

  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      openbtn.style.display = "block"; // affiche le boutton
  } else {
      sidebar.style.width = "250px";
      openbtn.style.display = "none"; // cache le boutton
  }
}
