document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const cookieOverlay = document.getElementById("cookieOverlay");
    const acceptButton = document.getElementById("acceptCookie");
    const contentContainer = document.querySelector(".content-container"); // Sélectionne le conteneur du contenu principal

    // Affiche le bandeau à chaque chargement de la page
    cookieBanner.classList.add("show-cookie");
    cookieOverlay.classList.add("show-cookie");
    contentContainer.classList.add("show-cookie");

    // Fonction pour accepter le cookie
    acceptButton.addEventListener("click", function () {
        document.cookie = "siteAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 30; // 30 jours
        cookieBanner.classList.remove("show-cookie");
        cookieOverlay.classList.remove("show-cookie");
        contentContainer.classList.remove("show-cookie");
    });
});