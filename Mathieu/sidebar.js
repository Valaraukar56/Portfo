// Script pour gérer la sidebar mobile
document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menuToggle");
	const header = document.getElementById("header");
	const overlay = document.getElementById("overlay");

	if (!menuToggle || !header || !overlay) {
		console.error("Un ou plusieurs éléments nécessaires n'ont pas été trouvés");
		return;
	}

	// Fonction pour ouvrir/fermer la sidebar
	function toggleMenu() {
		menuToggle.classList.toggle("active");
		header.classList.toggle("active");
		overlay.classList.toggle("active");

		// Empêcher le défilement du body quand la sidebar est ouverte
		document.body.style.overflow = header.classList.contains("active")
			? "hidden"
			: "";
	}

	// Événements pour ouvrir/fermer la sidebar
	menuToggle.addEventListener("click", toggleMenu);
	overlay.addEventListener("click", toggleMenu);

	// Fermer la sidebar quand on clique sur un lien
	const navLinks = document.querySelectorAll("nav a");
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (header.classList.contains("active")) {
				toggleMenu();
			}
		});
	});

	// Ajuster la sidebar en fonction de la taille de l'écran
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768 && header.classList.contains("active")) {
			menuToggle.classList.remove("active");
			header.classList.remove("active");
			overlay.classList.remove("active");
			document.body.style.overflow = "";
		}
	});

	console.log("Script sidebar.js chargé avec succès");
});
