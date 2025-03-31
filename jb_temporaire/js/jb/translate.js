document.addEventListener("DOMContentLoaded", () => {
    const translations = {
      fr: {
        "slider.title": "Jean-Baptiste Noblet",
        "slider.subtitle": "Je suis étudiant en BTS SIO option Slam",
        "about.title": "A propos de moi",
        "about.text": "Passionné par l'informatique et les nouvelles technologies, je suis étudiant en BTS SIO SLAM à Vannes, en reconversion professionnelle. J'ai développé des compétences solides en développement web (HTML, CSS, JavaScript, etc.), en gestion de bases de données (SQL) et j'explore activement les structures réseau. Mon objectif : contribuer à des projets innovants et relever de nouveaux défis dans le monde du développement.",
        "skills.title": "Mes compétences",
        "projects.title": "Mes réalisations et projets",
        "cv.download": "Télécharger mon CV",
        "cookie.title": "🍪 Gestion des Cookies",
        "cookie.text": "Ce site utilise un cookie pour stocker votre nom et compter le nombre de visites. Aucune autre donnée personnelle ne sera collectée.",
        "cookie.accept": "J'accepte",
      },
      en: {
        "slider.title": "Jean-Baptiste Noblet",
        "slider.subtitle": "I am a student in BTS SIO option Slam",
        "about.title": "About me",
        "about.text": "Passionate about computer science and new technologies, I am a student in BTS SIO SLAM in Vannes, in professional retraining. I have developed solid skills in web development (HTML, CSS, JavaScript, etc.), database management (SQL) and I actively explore network structures. My goal: to contribute to innovative projects and take on new challenges in the world of development.",
        "skills.title": "My skills",
        "projects.title": "My achievements and projects",
        "cv.download": "Download my Resume",
        "cookie.title": "🍪 Cookies Management",
        "cookie.text": "This site uses a cookie to store your name and count the number of visits. No other personal data will be collected.",
        "cookie.accept": "I Accept",
      },
    };
  
    const languageSwitcher = document.getElementById("langToggle");
    let currentLanguage = localStorage.getItem("preferredLanguage") || "fr";
  
    document.documentElement.lang = currentLanguage;
    languageSwitcher.textContent = currentLanguage === "fr" ? "🌐 EN" : "🌐 FR";
  
    applyTranslations(currentLanguage);
  
    languageSwitcher.addEventListener("click", () => {
      currentLanguage = currentLanguage === "fr" ? "en" : "fr";
      localStorage.setItem("preferredLanguage", currentLanguage);
      document.documentElement.lang = currentLanguage;
      languageSwitcher.textContent = currentLanguage === "fr" ? "🌐 EN" : "🌐 FR";
      applyTranslations(currentLanguage);
    });
  
    function applyTranslations(language) {
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[language] && translations[language][key]) {
          element.innerHTML = translations[language][key];
        }
      });
    }
  });