document.addEventListener("DOMContentLoaded", () => {
	const translations = {
		fr: {
			"nav.home": "Accueil",
			"nav.skills": "Compétences",
			"nav.projects": "Projets",
			"nav.contact": "Contact",
			"about.greeting": "👋 Bonjour",
			"about.intro":
				"Je suis <strong>Mathieu</strong>, développeur web junior, diplômé d'un BTS SIO option SLAM. J'ai exercé pendant un an en entreprise comme administrateur et développeur Salesforce et je suis aujourd'hui à la recherche d'un <strong>poste en développement web</strong>.",
			"about.portfolio":
				"Ce portfolio est une réalisation personnelle qui grandit avec moi. En haut à droite, vous trouverez mes <strong><a href=\"projects.html\">projets</a></strong>, terminés ou en cours, que j'enrichis au fil de mon apprentissage.",
			"about.projectsLink": "projets",
			"about.skills":
				"Je travaille avec les outils d'IA générative au quotidien. Cette pratique m'a surtout appris ce qu'ils produisent de mauvais : accessibilité, performance, référencement, maintenabilité.",
			"about.cta":
				"Ouvert aux opportunités, n'hésitez pas à me <strong><a href=\"contact.html\">contacter</a></strong>.",
			"experience.title": "Expérience",
			"experience.role": "Administrateur et développeur Salesforce",
			"experience.company": "CMA Bretagne",
			"experience.period": "Sept. 2025 - Sept. 2026",
			"experience.task1": "Création de flux automatisés",
			"experience.task2": "Modifications de pages Lightning",
			"experience.task3": "Création d'un objet Salesforce de A à Z",
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
			"section.need": "Le besoin",
			"section.done": "Ce que j'ai réalisé",
			"section.tech": "Choix techniques et pourquoi",
			"visit-site": "Visiter le site →",
			"acp56-need":
				"La cliente avait un site généré par un créateur de site automatique, dans lequel elle ne se reconnaissait pas. Elle n'arrivait pas à obtenir un site représentant sa personne et son activité.",
			"acp56-done":
				"Site complet avec présentation des services (accompagnement anténatal et postnatal, allaitement, portage, présence jour et nuit), formations, témoignages, prise de RDV en ligne via Cal.com et bandeau de consentement cookies.",
			"acp56-tech":
				"HTML, CSS et JavaScript natifs, sans CMS ni framework, pour garder la main sur le HTML produit et sur le rendu final. Polices auto-hébergées et aucune requête vers un domaine tiers : le site ne dépend d'aucun service extérieur susceptible de tomber ou de changer ses conditions. Pour le référencement local : données structurées JSON-LD ProfessionalService, URL canonique, et images converties en WebP avec chargement différé. La page d'accueil charge en 11 requêtes pour 327 Ko.",
			"doudream-need":
				"DouDream exposait son travail sur ArtStation. Une plateforme d'artistes impose le même gabarit à tout le monde : son portfolio ressemblait à des milliers d'autres et rien ne l'en distinguait. Elle voulait un site à elle, avec sa propre identité visuelle.",
			"doudream-done":
				"Site statique HTML/CSS/JS avec galerie de créations optimisée en WebP, section À propos, formulaire de contact, lien Instagram et animation d'introduction.",
			"doudream-tech":
				"HTML, CSS et JavaScript natifs, sans framework. La galerie est pilotée par un catalogue JSON : ajouter une œuvre revient à écrire une ligne, et les filtres par catégorie comme leurs compteurs se calculent à partir de ces données. Écrire 142 blocs HTML à la main aurait été ingérable et source d'erreurs. Chaque œuvre existe en deux résolutions (800 et 1600 pixels) servies par srcset : un téléphone télécharge la version légère, un grand écran conserve la définition qu'exige un portfolio d'artiste. Images en WebP et chargement différé : la page s'ouvre en 8 requêtes alors qu'elle contient 144 images.",
			"projet-combo":
				"Jeu de cartes multijoueur en temps réel. Architecture serveur-autoritaire, communication WebSocket, distribué en application desktop Windows via Electron avec mise à jour automatique.",
			"combo-done":
				"Jeu de cartes multijoueur complet développé de A à Z : mécaniques de snap, pouvoirs spéciaux, appel de combo, bots IA, classements, rooms publiques et privées.",
			"combo-tech":
				"Architecture serveur-autoritaire pour empêcher la triche côté client. Socket.IO pour le temps réel. Electron pour la distribution desktop avec mise à jour automatique via GitHub Releases. Stack : React 18, TypeScript, Vite, Node.js, Express, SQLite, JWT.",
			"templates-done":
				"4 templates complets pour des secteurs différents : fleuriste (Flora & Co), auto-école (Drive Academy), restaurant (Maison Lartigue), artisan (Bernard Plomberie).",
			"templates-tech":
				"HTML, CSS et JavaScript natifs, sans framework ni étape de build : un fichier style.css et un script.js par template. Les quatre partagent la même structure de variables CSS dans :root (couleurs, rayons, transitions, polices), ce qui me permet de partir d'une base connue et de produire un nouveau template rapidement. Ce qui change d'un template à l'autre, c'est la palette et le couple de polices : un fleuriste et un plombier n'ont pas les mêmes codes visuels, et c'est précisément là que les créateurs de site automatiques échouent, en appliquant le même gabarit à tous les secteurs. Ce sont des démos, pas des sites livrés : elles n'embarquent ni métadonnées de référencement ni contenu réel, l'objectif étant d'avoir une base réutilisable pour de futurs clients.",
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
			"templates-subtitle": "Cliquez sur un template pour l'ouvrir",
			"template-fleuriste-desc": "Flora & Co - Fleuriste artisanal",
			"template-auto-ecole-desc": "Drive Academy - Auto-école moderne",
			"template-restaurant-desc": "Maison Lartigue - Bistrot & Cave",
			"template-artisan-desc": "Bernard Plomberie - Plombier chauffagiste",
			"explore-hint": "Cliquer pour explorer →",
			"learning-projects-title": "Projets d'apprentissage",
			"projet-acp56":
				"Site vitrine professionnel conçu et développé sur mesure pour Perle Hugot, infirmière diplômée d'État et accompagnante périnatale dans le Morbihan.",
			"projet-doudream":
				"Portfolio conçu et développé pour DouDream, artiste peintre numérique. Galerie de créations optimisée en WebP, dans une ambiance sombre et dorée.",
			"projet-templates":
				"Série de 4 templates de sites web réalisés en avril 2026 pour différents secteurs d'activité : fleuriste, auto-école, restaurant et artisan.",
			"projet-shmup":
				"Développé en juin 2024, ce projet est mon premier jeu JavaScript de grande envergure. Il s'agit d'un shoot 'em up classique où le joueur doit éliminer des ennemis tout en esquivant leurs attaques.<br/> <em>Pas jouable sur téléphone</em>",
			"projet-bd":
				"Réalisé en mars 2024, ce projet personnel a pour but d'améliorer mes compétences en JavaScript. Il s'agit d'un blind test interactif permettant aux joueurs de deviner des morceaux de musique.",
			"projet-cb":
				"Projet développé en juin 2024 pour perfectionner mes compétences en JavaScript. Ce casse-brique reprend le concept classique.</br> <em>Pas jouable sur téléphone</em>",
			"projet-bd2":
				"Version améliorée du premier Blind Test, ce projet propose de nouvelles fonctionnalités et une interface plus intuitive pour enrichir l'expérience utilisateur.",
			"projet-skulltulas":
				"Outil interactif développé en mars 2025 permettant de suivre la progression dans la quête des Skulltulas d'Or dans Zelda: Ocarina of Time.",
			"projet-wow":
				"Outil développé en mars 2025 pour trouver rapidement les meilleurs guides de build pour chaque spécialisation de World of Warcraft. Propose des liens directs vers Icy Veins, Wowhead et Maxroll.",
			"projet-recette":
				"Projet réalisé en avril 2025 pour m'entraîner au markdown.",
			"projet-pictos-clair":
				"Projet réalisé en mai 2025 pour m'entraîner au markdown. <i>Surtout un coup de coeur pour le jeu</i>",
			context: "Contexte",
		},
		en: {
			"nav.home": "Home",
			"nav.skills": "Skills",
			"nav.projects": "Projects",
			"nav.contact": "Contact",
			"about.greeting": "👋 Hello there",
			"about.intro":
				"I'm <strong>Mathieu</strong>, a junior web developer, holding a BTS SIO (SLAM track). I spent a year working professionally as a Salesforce administrator and developer, and I'm now looking for a <strong>position in web development</strong>.",
			"about.portfolio":
				'This portfolio is a personal project that grows with me. In the top right, you\'ll find my <strong><a href="projects.html">projects</a></strong>, completed or in progress, which I expand as I keep learning.',
			"about.projectsLink": "projects",
			"about.skills":
				"I use generative AI tools daily. That practice has mostly taught me where they fall short: accessibility, performance, SEO, maintainability.",
			"about.cta":
				'Open to opportunities, feel free to <strong><a href="contact.html">get in touch</a></strong>.',
			"experience.title": "Experience",
			"experience.role": "Salesforce Administrator and Developer",
			"experience.company": "CMA Bretagne",
			"experience.period": "Sept. 2025 - Sept. 2026",
			"experience.task1": "Building automated flows",
			"experience.task2": "Editing Lightning pages",
			"experience.task3": "Creating a Salesforce object from scratch",
			"contact.h2": "Contact me",
			"contact.p": "Feel free to contact me via this form or directly by email",
			"contact.name_placeholder": "Name and first name *",
			"contact.email_placeholder": "Email address *",
			"contact.message_placeholder": "Message *",
			"contact.send": "Send",
			skill: "My main skills",
			secondary_skill: "Secondary skills",
			"casse-brique": "Brick breaker",
			"section.need": "The need",
			"section.done": "What I built",
			"section.tech": "Technical choices and why",
			"visit-site": "Visit the site →",
			"acp56-need":
				"The client had a site generated by an automated website builder that did not reflect who she was. She could not get it to represent her personally or the work she does.",
			"acp56-done":
				"Full website covering services (antenatal and postnatal support, breastfeeding, babywearing, day & night care), training, testimonials, online booking via Cal.com and a cookie consent banner.",
			"acp56-tech":
				"Plain HTML, CSS and JavaScript, no CMS and no framework, to keep full control over the markup and the final rendering. Self-hosted fonts and zero third-party requests: the site depends on no external service that could go down or change its terms. For local SEO: JSON-LD ProfessionalService structured data, a canonical URL, and images converted to WebP with lazy loading. The home page loads in 11 requests for 327 KB.",
			"doudream-need":
				"DouDream showcased her work on ArtStation. An artist platform imposes the same template on everyone: her portfolio looked like thousands of others and nothing set it apart. She wanted a site of her own, with her own visual identity.",
			"doudream-done":
				"Static HTML/CSS/JS site with a WebP-optimised artwork gallery, an About section, a contact form, an Instagram link and an intro animation.",
			"doudream-tech":
				"Plain HTML, CSS and JavaScript, no framework. The gallery is driven by a JSON catalogue: adding a piece means writing a single line, and the category filters and their counters are computed from that data. Hand-writing 142 HTML blocks would have been unmanageable and error-prone. Each piece exists in two resolutions (800 and 1600 pixels) served through srcset: a phone downloads the light version while a large screen keeps the definition an artist's portfolio demands. WebP images and lazy loading: the page opens in 8 requests despite holding 144 images.",
			"projet-combo":
				"Real-time multiplayer card game. Server-authoritative architecture, WebSocket communication, distributed as a Windows desktop application via Electron with automatic updates.",
			"combo-done":
				"Full multiplayer card game built from scratch: snap mechanics, special powers, combo calls, AI bots, leaderboards, public and private rooms.",
			"combo-tech":
				"Server-authoritative architecture to prevent client-side cheating. Socket.IO for real-time communication. Electron for desktop distribution with automatic updates via GitHub Releases. Stack: React 18, TypeScript, Vite, Node.js, Express, SQLite, JWT.",
			"templates-done":
				"4 complete templates for different sectors: florist (Flora & Co), driving school (Drive Academy), restaurant (Maison Lartigue), tradesman (Bernard Plomberie).",
			"templates-tech":
				"Plain HTML, CSS and JavaScript, no framework and no build step: one style.css and one script.js per template. All four share the same CSS variable structure in :root (colours, radii, transitions, fonts), which lets me start from a known base and produce a new template quickly. What changes from one template to the next is the palette and the font pairing: a florist and a plumber do not share the same visual codes, and that is precisely where automated website builders fail, applying the same layout to every sector. These are demos, not delivered sites: they carry no SEO metadata and no real content, the goal being to have a reusable base for future clients.",
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
			"templates-subtitle": "Click on a template to open it",
			"template-fleuriste-desc": "Flora & Co - Artisan florist",
			"template-auto-ecole-desc": "Drive Academy - Modern driving school",
			"template-restaurant-desc": "Maison Lartigue - Bistro & Wine bar",
			"template-artisan-desc": "Bernard Plomberie - Plumber & heating engineer",
			"explore-hint": "Click to explore →",
			"learning-projects-title": "Learning projects",
			"projet-acp56":
				"Professional showcase website designed and built from scratch for Perle Hugot, a state-registered nurse and perinatal support practitioner in Morbihan.",
			"projet-doudream":
				"Portfolio designed and built for DouDream, a digital painter. WebP-optimised artwork gallery in a dark and golden atmosphere.",
			"projet-templates":
				"A series of 4 web page templates created in April 2026 for various business sectors: florist, driving school, restaurant and tradesman.",
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
			context: "Context",
		},
	};

	const languageSwitcher = document.getElementById("languageSwitcher");
	const languageText = document.getElementById("languageText");

	let currentLanguage = localStorage.getItem("preferredLanguage") || "fr";

	document.documentElement.lang = currentLanguage;
	languageText.textContent = currentLanguage === "fr" ? "EN" : "FR";
	applyTranslations(currentLanguage);

	languageSwitcher.addEventListener("click", () => {
		currentLanguage = currentLanguage === "fr" ? "en" : "fr";
		localStorage.setItem("preferredLanguage", currentLanguage);
		document.documentElement.lang = currentLanguage;
		languageText.textContent = currentLanguage === "fr" ? "EN" : "FR";
		applyTranslations(currentLanguage);
	});

	function applyTranslations(language) {
		document.querySelectorAll("[data-i18n]").forEach((element) => {
			const key = element.getAttribute("data-i18n");
			if (translations[language] && translations[language][key]) {
				element.innerHTML = translations[language][key];
			}
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
			const key = element.getAttribute("data-i18n-placeholder");
			if (translations[language] && translations[language][key]) {
				element.placeholder = translations[language][key];
			}
		});

		document.title = language === "fr" ? "Portfolio" : "Portfolio";
	}
});
