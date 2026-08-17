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
				"Je suis <strong>Mathieu</strong>, jeune développeur front-end. Après avoir obtenu mon BTS, je suis aujourd'hui à la recherche d'une <strong>alternance ou d'un poste</strong> où continuer à progresser.",
			"about.portfolio":
				"Ce portfolio est une réalisation personnelle qui grandit avec moi. En haut à droite, vous trouverez mes <strong><a href=\"projects.html\">projets</a></strong>, terminés ou en cours, que j'enrichis au fil de mon apprentissage.",
			"about.projectsLink": "projets",
			"about.skills":
				"Je m'intéresse de plus en plus à l'<strong>IA générative appliquée au développement front-end</strong> : j'explore des outils comme Claude Code pour concevoir des interfaces et repousser ce que je sais faire.",
			"about.cta":
				"Ouvert aux opportunités, n'hésitez pas à me <strong><a href=\"contact.html\">contacter</a></strong>.",
			"contact.h2": "Contactez-moi",
			"contact.p":
				"N'hésitez pas à me contacter via ce formulaire ou directement par email",
			"contact.name_placeholder": "Nom et prénom *",
			"contact.email_placeholder": "Adresse e-mail *",
			"contact.message_placeholder": "Message *",
			"contact.send": "Envoyer",
			skill: "Mes principales compétences",
			secondary_skill: "Compétences secondaires",
			"casse-brique": "Casse-brique",
			"projet-shmup":
				"Développé en juin 2024, ce projet est mon premier jeu JavaScript de grande envergure. Il s'agit d'un shoot 'em up classique où le joueur doit éliminer des ennemis tout en esquivant leurs attaques.<br/> <em>Pas jouable sur téléphone</em>",
			"projet-bd":
				"Réalisé en mars 2024, ce projet personnel a pour but d'améliorer mes compétences en JavaScript. Il s'agit d'un blind test interactif permettant aux joueurs de deviner des morceaux de musique. ",
			"projet-cb":
				"Projet développé en juin 2024 pour perfectionner mes compétences en JavaScript. Ce casse-brique reprend le concept classique.</br> <em>Pas jouable sur téléphone</em>",
			"projet-bd2":
				"Version améliorée du premier Blind Test, ce projet propose de nouvelles fonctionnalités et une interface plus intuitive pour enrichir l'expérience utilisateur. ",
			"projet-skulltulas":
				"Outil interactif développé en mars 2025 permettant de suivre la progression dans la quête des Skulltulas d'Or dans Zelda: Ocarina of Time. ",
			"projet-wow":
				"Outil développé en mars 2025 pour trouver rapidement les meilleurs guides de build pour chaque spécialisation de World of Warcraft. Propose des liens directs vers Icy Veins, Wowhead et Maxroll.",
			"projet-recette":
				"Projet réalisé en avril 2025 pour m'entraîner au markdown.",
			"projet-pictos-clair":
				"Projet réalisé en mai 2025 pour m'entraîner au markdown. <i>Surtout un coup de coeur pour le jeu</i>",
			"projet-templates":
				"Série de 4 templates de sites web réalisés en avril 2026 pour différents secteurs d'activité : fleuriste, auto-école, restaurant et artisan.",
			"templates-subtitle": "Cliquez sur un template pour l'ouvrir",
			"template-fleuriste-desc": "Flora & Co — Fleuriste artisanal",
			"template-auto-ecole-desc": "Drive Academy — Auto-école moderne",
			"template-restaurant-desc": "Maison Lartigue — Bistrot & Cave",
			"template-artisan-desc": "Bernard Plomberie — Plombier chauffagiste",
			"projet-test-skills":
				"Réalisés en mai 2026 dans le cadre d'une exploration des skills Claude Code, ces quatre projets sont le fruit d'expérimentations avec l'IA générative appliquée au développement front-end, une technologie à laquelle je m'intéresse de plus en plus activement.",
			"test-skills-subtitle":
				"4 esthétiques générées via les skills Claude Code — cliquez pour ouvrir",
			"test-skills-1-desc": "Esthétique luxe — tons or, cramoisi & bleu électrique",
			"test-skills-2-desc": "Design brutaliste — typographie agressive, noir & jaune",
			"test-skills-3-desc": "Futurisme glassmorphique — aurora, néon & effets de verre",
			"test-skills-4-desc": "Brutalist editorial animé — split intro, scroll-pin, particles",
			"explore-hint": "Cliquer pour explorer →",
			"projet-combo":
				"Jeu de cartes multijoueur en temps réel, distribué en application desktop Windows. Développé de A à Z avec une architecture full-stack TypeScript.",
			"combo-status": "En développement actif · v0.1.20",
			"combo-desc":
				"Combo est un jeu de cartes multijoueur en temps réel développé de A à Z. Les joueurs s'affrontent dans des manches de mémoire et de rapidité, avec des mécaniques de snap, de pouvoirs spéciaux et d'appel de combo. L'application est distribuée exclusivement en version desktop Windows via un installeur Electron avec mise à jour automatique.",
			"combo-stack-title": "Stack technique",
			"combo-frontend": "Frontend",
			"combo-backend": "Backend",
			"combo-features-title": "Fonctionnalités",
			"combo-f1": "Multijoueur temps réel (WebSocket)",
			"combo-f2": "Architecture serveur-autoritaire (anti-triche)",
			"combo-f3": "Application desktop Windows via Electron",
			"combo-f4": "Authentification JWT + classements",
			"combo-f5": "Bots IA adversaires",
			"combo-f6": "Mise à jour automatique (GitHub Releases)",
			"combo-f7": "Rooms publiques & privées",
			"combo-f8": "Persistance SQLite (stats & parties)",
			"projet-acp56":
				"Site vitrine professionnel conçu et développé sur mesure pour Perle Hugot, infirmière diplômée d'État et accompagnante périnatale dans le Morbihan. Présentation des services (accompagnement anténatal et postnatal, allaitement, portage, présence jour & nuit), formations, témoignages, prise de rendez-vous en ligne (Cal.com) et gestion du consentement cookies. Design responsive et identité visuelle douce, pensée pour les jeunes parents.",
			"projet-doudream":
				"Portfolio conçu et développé pour DouDream, artiste peintre numérique. Galerie de créations (portraits, paysages, fan-arts) optimisée en WebP, section « À propos », formulaire de contact et lien Instagram, le tout dans une ambiance sombre et dorée mettant les œuvres en valeur. Site statique HTML/CSS/JS avec animation d'introduction.",
			context: "Contexte",
		},
		en: {
			"nav.home": "Home",
			"nav.skills": "Skills",
			"nav.projects": "Projects",
			"nav.contact": "Contact",
			"about.greeting": "👋 Hello there",
			"about.intro":
				"I'm <strong>Mathieu</strong>, a junior front-end developer. Having earned my degree, I'm now looking for a <strong>work-study contract or a position</strong> where I can keep growing.",
			"about.portfolio":
				'This portfolio is a personal project that grows with me. In the top right, you\'ll find my <strong><a href="projects.html">projects</a></strong>, completed or in progress, which I expand as I keep learning.',
			"about.projectsLink": "projects",
			"about.skills":
				"I'm increasingly drawn to <strong>generative AI applied to front-end development</strong>: I explore tools like Claude Code to design interfaces and push what I'm capable of.",
			"about.cta":
				'Open to opportunities, feel free to <strong><a href="contact.html">get in touch</a></strong>.',
			"contact.h2": "Contact me",
			"contact.p": "Feel free to contact me via this form or directly by email",
			"contact.name_placeholder": "Name and first name *",
			"contact.email_placeholder": "Email address *",
			"contact.message_placeholder": "Message *",
			"contact.send": "Send",
			skill: "My main skills",
			secondary_skill: "Secondary skills",
			"casse-brique": "Brick breaker",
			"projet-shmup":
				"Developed in June 2024, this project is my first large-scale JavaScript game. It is a classic shoot 'em up where the player must eliminate enemies while dodging their attacks.<br/> <em>Not playable on mobile.</em>",
			"projet-bd":
				"Developed in March 2024, this personal project aims to improve my JavaScript skills. It is an interactive blind test where players guess music tracks.",
			"projet-cb":
				"Project developed in June 2024 to refine my JavaScript skills. This brick breaker follows the classic concept.<br/> <em>Not playable on mobile.</em>",
			"projet-bd2":
				"Improved version of the first Blind Test, this project offers new features and a more intuitive interface to enrich the user experience",
			"projet-skulltulas":
				"Interactive tool developed in March 2025 to track progress in the quest for the Gold Skulltulas in Zelda: Ocarina of Time.",
			"projet-wow":
				"Tool developed in March 2025 to quickly find the best build guides for each World of Warcraft specialization. Provides direct links to Icy Veins, Wowhead and Maxroll.",
			"projet-recette":
				"Project created in April 2025 to practice markdown.",
			"projet-pictos-clair":
				"Project created in May 2025 to practice markdown. <i>Mostly a love letter to the game</i>",
			"projet-templates":
				"A series of 4 web page templates created in April 2026 for various business sectors: florist, driving school, restaurant and tradesman.",
			"templates-subtitle": "Click on a template to open it",
			"template-fleuriste-desc": "Flora & Co — Artisan florist",
			"template-auto-ecole-desc": "Drive Academy — Modern driving school",
			"template-restaurant-desc": "Maison Lartigue — Bistro & Wine bar",
			"template-artisan-desc": "Bernard Plomberie — Plumber & heating engineer",
			"projet-test-skills":
				"Created in May 2026 as part of an in-depth exploration of Claude Code skills, these four projects are the result of experiments with generative AI applied to front-end development — a technology I am increasingly passionate about.",
			"test-skills-subtitle":
				"4 aesthetics generated via Claude Code skills — click to open",
			"test-skills-1-desc": "Luxury aesthetic — gold, crimson & electric blue tones",
			"test-skills-2-desc": "Brutalist design — aggressive typography, black & yellow",
			"test-skills-3-desc": "Glassmorphic futurism — aurora, neon & glass effects",
			"test-skills-4-desc": "Animated brutalist editorial — split intro, scroll-pin, particles",
			"explore-hint": "Click to explore →",
			"projet-combo":
				"Real-time multiplayer card game distributed as a Windows desktop application. Built from scratch with a full-stack TypeScript architecture.",
			"combo-status": "Actively developed · v0.1.20",
			"combo-desc":
				"Combo is a real-time multiplayer card game built from scratch. Players compete in rounds of memory and speed, featuring snap mechanics, special card powers, and combo calls. The application is distributed exclusively as a Windows desktop installer via Electron, with an automatic update system.",
			"combo-stack-title": "Tech stack",
			"combo-frontend": "Frontend",
			"combo-backend": "Backend",
			"combo-features-title": "Features",
			"combo-f1": "Real-time multiplayer (WebSocket)",
			"combo-f2": "Server-authoritative architecture (anti-cheat)",
			"combo-f3": "Windows desktop application via Electron",
			"combo-f4": "JWT authentication + leaderboards",
			"combo-f5": "AI bot opponents",
			"combo-f6": "Auto-update system (GitHub Releases)",
			"combo-f7": "Public & private rooms",
			"combo-f8": "SQLite persistence (stats & matches)",
			"projet-acp56":
				"Professional showcase website designed and built from scratch for Perle Hugot, a state-registered nurse and perinatal support practitioner in Morbihan (Brittany). Features services (antenatal and postnatal support, breastfeeding, babywearing, day & night care), training courses, testimonials, online booking (Cal.com) and cookie consent management. Responsive design with a soft visual identity tailored to new parents.",
			"projet-doudream":
				"Portfolio designed and built for DouDream, a digital painter. Artwork gallery (portraits, landscapes, fan art) optimised in WebP, an About section, a contact form and an Instagram link, all in a dark and golden atmosphere that showcases the artwork. Static HTML/CSS/JS site with an intro animation.",
			context: "Context",
		},
	};

	// Get language switcher button
	const languageSwitcher = document.getElementById("languageSwitcher");
	const languageText = document.getElementById("languageText");

	// Get saved language or default to French
	let currentLanguage = localStorage.getItem("preferredLanguage") || "fr";

	// Set the document language attribute
	document.documentElement.lang = currentLanguage;

	// Update button text based on current language
	languageText.textContent = currentLanguage === "fr" ? "EN" : "FR";

	// Apply translations on page load
	applyTranslations(currentLanguage);

	// Add click event to language switcher
	languageSwitcher.addEventListener("click", () => {
		// Toggle language
		currentLanguage = currentLanguage === "fr" ? "en" : "fr";

		// Save preference to localStorage
		localStorage.setItem("preferredLanguage", currentLanguage);

		// Update document language attribute
		document.documentElement.lang = currentLanguage;

		// Update button text
		languageText.textContent = currentLanguage === "fr" ? "EN" : "FR";

		// Apply translations
		applyTranslations(currentLanguage);
	});

	// Function to apply translations
	function applyTranslations(language) {
		// Get all elements with data-i18n attribute
		const elements = document.querySelectorAll("[data-i18n]");

		// Update each element's content
		elements.forEach((element) => {
			const key = element.getAttribute("data-i18n");
			if (translations[language] && translations[language][key]) {
				element.innerHTML = translations[language][key];
			}
		});

		// Get all elements with data-i18n-placeholder attribute
		const placeholderElements = document.querySelectorAll(
			"[data-i18n-placeholder]"
		);

		// Update each element's placeholder
		placeholderElements.forEach((element) => {
			const key = element.getAttribute("data-i18n-placeholder");
			if (translations[language] && translations[language][key]) {
				element.placeholder = translations[language][key];
			}
		});

		// Update page title based on language
		document.title = language === "fr" ? "Portfolio" : "Portfolio";
	}
});
