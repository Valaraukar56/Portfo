document.addEventListener("DOMContentLoaded", () => {
  // Si tu veux rajouter des traductions, dans fr et en tu rajoutes une ligne avec le texte en français et un en anglais le premier "" est le nom de la clé, le deuxième est le texte
  // Tu peux ensuite utiliser ces clés dans ton HTML en ajoutant un attribut data-i18n="nomDeLaClé" sur l'élément que tu veux traduire
  const translations = {
    fr: {
      "nav.home": "Accueil",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "about.greeting": "👋 Bonjour",
      "about.intro":
        'Je suis Mathieu, étudiant en BTS à L\'<strong><a href="https://www.aftec.fr/ecole-commerce-vannes" target="_blank">AFTEC</a></strong> Vannes',
      "about.portfolio":
        "Tout ce que vous voyez a été développé par moi. En haut à droite, vous trouverez mes <strong><a href=\"projects.html\">projets</a></strong>, qu'ils soient terminés ou en cours, créés au fur et à mesure que je continuais à m'améliorer.",
      "about.projectsLink": "projets",
      "about.skills": "J'ai mis à profit mes compétences en JavaScript pour développer mon projet Shoot 'em up",
      "contact.h2": "Contactez-moi",
      "contact.p": "N'hésitez pas à me contacter via ce formulaire ou directement par email",
      "contact.name_placeholder": "Nom et prénom *",
      "contact.email_placeholder": "Adresse e-mail *",
      "contact.message_placeholder": "Message *",
      "contact.send": "Envoyer",
      "skill" : "Mes principales compétences",
      "casse-brique": "Casse-brique",
    },
    en: {
      "nav.home": "Home",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "about.greeting": "👋 Hello there",
      "about.intro":
        'I\'m Mathieu, a student in BTS at <strong><a href="https://www.aftec.fr/ecole-commerce-vannes" target="_blank">AFTEC</a></strong> Vannes',
      "about.portfolio":
        'Everything you see has been developed by me. In the top right, you\'ll find my <strong><a href="projects.html">projects</a></strong>, whether completed or in progress, created as I continued to improve.',
      "about.projectsLink": "projects",
      "about.skills": "I leveraged my JavaScript skills to develop my Shoot 'em up project",
      "contact.h2": "Contact me",
      "contact.p": "Feel free to contact me via this form or directly by email",
      "contact.name_placeholder": "Name and first name *",
      "contact.email_placeholder": "Email address *",
      "contact.message_placeholder": "Message *",
      "contact.send": "Send",
      "skill" : "My main skills",
      "casse-brique": "Brick breaker",
    },
  }

  // Get language switcher button
  const languageSwitcher = document.getElementById("languageSwitcher")
  const languageText = document.getElementById("languageText")

  // Get saved language or default to French
  let currentLanguage = localStorage.getItem("preferredLanguage") || "fr"

  // Set the document language attribute
  document.documentElement.lang = currentLanguage

  // Update button text based on current language
  languageText.textContent = currentLanguage === "fr" ? "EN" : "FR"

  // Apply translations on page load
  applyTranslations(currentLanguage)

  // Add click event to language switcher
  languageSwitcher.addEventListener("click", () => {
    // Toggle language
    currentLanguage = currentLanguage === "fr" ? "en" : "fr"

    // Save preference to localStorage
    localStorage.setItem("preferredLanguage", currentLanguage)

    // Update document language attribute
    document.documentElement.lang = currentLanguage

    // Update button text
    languageText.textContent = currentLanguage === "fr" ? "EN" : "FR"

    // Apply translations
    applyTranslations(currentLanguage)
  })

  // Function to apply translations
  function applyTranslations(language) {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]")

    // Update each element's content
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n")
      if (translations[language] && translations[language][key]) {
        element.innerHTML = translations[language][key]
      }
    })

    // Get all elements with data-i18n-placeholder attribute
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]")

    // Update each element's placeholder
    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder")
      if (translations[language] && translations[language][key]) {
        element.placeholder = translations[language][key]
      }
    })

    // Update page title based on language
    document.title = language === "fr" ? "Portfolio" : "Portfolio"
  }
})

