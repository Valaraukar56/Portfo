// ─── Data: toutes les classes & spécialisations WoW ───────────────────────────
// aliases: mots-clés FR et EN reconnus pour la correspondance
const DATA = [
  {
    classFR: "Chevalier de la mort",
    classEN: "death-knight",
    color: "#c41e3a",
    specs: [
      { specFR: "Sang",    aliases: ["sang","blood"],               specEN: "blood",  role: "tank" },
      { specFR: "Givre",   aliases: ["givre","frost"],              specEN: "frost",  role: "dps"  },
      { specFR: "Impie",   aliases: ["impie","unholy"],             specEN: "unholy", role: "dps"  },
    ]
  },
  {
    classFR: "Chasseur de démons",
    classEN: "demon-hunter",
    color: "#a330c9",
    specs: [
      { specFR: "Dévastation", aliases: ["dévastation","devastation","havoc"],       specEN: "havoc",      role: "dps"  },
      { specFR: "Vengeance",   aliases: ["vengeance"],                                specEN: "vengeance",  role: "tank" },
    ]
  },
  {
    classFR: "Druide",
    classEN: "druid",
    color: "#ff7c0a",
    specs: [
      { specFR: "Équilibre",   aliases: ["équilibre","equilibre","balance","boomkin"], specEN: "balance",     role: "dps"   },
      { specFR: "Féral",       aliases: ["féral","feral"],                             specEN: "feral",       role: "dps"   },
      { specFR: "Gardien",     aliases: ["gardien","guardian","bear"],                 specEN: "guardian",    role: "tank"  },
      { specFR: "Restauration",aliases: ["restauration","restoration","resto"],        specEN: "restoration", role: "heal"  },
    ]
  },
  {
    classFR: "Évocateur",
    classEN: "evoker",
    color: "#33937f",
    specs: [
      { specFR: "Dévastation",  aliases: ["dévastation","devastation"],              specEN: "devastation",  role: "dps"  },
      { specFR: "Préservation", aliases: ["préservation","preservation","pres"],     specEN: "preservation", role: "heal" },
      { specFR: "Augmentation", aliases: ["augmentation","aug"],                     specEN: "augmentation", role: "dps"  },
    ]
  },
  {
    classFR: "Chasseur",
    classEN: "hunter",
    color: "#aad372",
    specs: [
      { specFR: "Maîtrise des bêtes", aliases: ["maîtrise des bêtes","maitrise des betes","beast mastery","bm"], specEN: "beast-mastery", role: "dps" },
      { specFR: "Précision",          aliases: ["précision","precision","marks","marksmanship","mm"],              specEN: "marksmanship",  role: "dps" },
      { specFR: "Survie",             aliases: ["survie","survival","sv"],                                         specEN: "survival",      role: "dps" },
    ]
  },
  {
    classFR: "Mage",
    classEN: "mage",
    color: "#3fc7eb",
    specs: [
      { specFR: "Arcane", aliases: ["arcane"],        specEN: "arcane", role: "dps" },
      { specFR: "Feu",    aliases: ["feu","fire"],    specEN: "fire",   role: "dps" },
      { specFR: "Givre",  aliases: ["givre","frost"], specEN: "frost",  role: "dps" },
    ]
  },
  {
    classFR: "Moine",
    classEN: "monk",
    color: "#00ff98",
    specs: [
      { specFR: "Maître brasseur",    aliases: ["maître brasseur","maitre brasseur","brewmaster","brew"],           specEN: "brewmaster",   role: "tank" },
      { specFR: "Tisseur de brume",   aliases: ["tisseur de brume","mistweaver","mw"],                             specEN: "mistweaver",   role: "heal" },
      { specFR: "Marche-vent",        aliases: ["marche-vent","marche vent","windwalker","ww"],                    specEN: "windwalker",   role: "dps"  },
    ]
  },
  {
    classFR: "Paladin",
    classEN: "paladin",
    color: "#f48cba",
    specs: [
      { specFR: "Sacré",      aliases: ["sacré","sacre","holy"],          specEN: "holy",       role: "heal" },
      { specFR: "Protection", aliases: ["protection","prot"],             specEN: "protection", role: "tank" },
      { specFR: "Vindicte",   aliases: ["vindicte","ret","retribution"],  specEN: "retribution",role: "dps"  },
    ]
  },
  {
    classFR: "Prêtre",
    classEN: "priest",
    color: "#ffffff",
    specs: [
      { specFR: "Discipline", aliases: ["discipline","disc"],           specEN: "discipline", role: "heal" },
      { specFR: "Sacré",      aliases: ["sacré","sacre","holy"],        specEN: "holy",       role: "heal" },
      { specFR: "Ombre",      aliases: ["ombre","shadow","spriest"],    specEN: "shadow",     role: "dps"  },
    ]
  },
  {
    classFR: "Voleur",
    classEN: "rogue",
    color: "#fff468",
    specs: [
      { specFR: "Assassinat",    aliases: ["assassinat","assassination","assa","sin"],   specEN: "assassination", role: "dps" },
      { specFR: "Hors-la-loi",   aliases: ["hors-la-loi","hors la loi","outlaw"],       specEN: "outlaw",        role: "dps" },
      { specFR: "Finesse",       aliases: ["finesse","subtlety","sub"],                 specEN: "subtlety",      role: "dps" },
    ]
  },
  {
    classFR: "Chaman",
    classEN: "shaman",
    color: "#0070dd",
    specs: [
      { specFR: "Élémentaire",  aliases: ["élémentaire","elementaire","elemental","ele"],  specEN: "elemental",   role: "dps"  },
      { specFR: "Amélioration", aliases: ["amélioration","amelioration","enhancement","enh"], specEN: "enhancement", role: "dps"  },
      { specFR: "Restauration", aliases: ["restauration","restoration","resto"],            specEN: "restoration", role: "heal" },
    ]
  },
  {
    classFR: "Démoniste",
    classEN: "warlock",
    color: "#8788ee",
    specs: [
      { specFR: "Affliction",    aliases: ["affliction","affli"],                       specEN: "affliction",  role: "dps" },
      { specFR: "Démonologie",   aliases: ["démonologie","demonologie","demonology","demo"], specEN: "demonology",  role: "dps" },
      { specFR: "Destruction",   aliases: ["destruction","destro"],                    specEN: "destruction", role: "dps" },
    ]
  },
  {
    classFR: "Guerrier",
    classEN: "warrior",
    color: "#c69b3a",
    specs: [
      { specFR: "Armes",      aliases: ["armes","arms"],          specEN: "arms",       role: "dps"  },
      { specFR: "Fureur",     aliases: ["fureur","fury"],         specEN: "fury",       role: "dps"  },
      { specFR: "Protection", aliases: ["protection","prot"],     specEN: "protection", role: "tank" },
    ]
  },
];

// ─── Sites de guides ──────────────────────────────────────────────────────────
const SITES = [
  {
    id: "icyveins",
    name: "Icy Veins",
    emoji: "❄️",
    logoClass: "logo-icyveins",
    desc: "Guides détaillés & BiS",
    // URL directe : /wow/{spec}-{class}-pve-{role}-guide
    buildUrl: (spec, cls, role) =>
      `https://www.icy-veins.com/wow/${spec}-${cls}-pve-${role}-guide`,
    // Fallback recherche
    searchUrl: (q) =>
      `https://www.icy-veins.com/wow/search/?term=${encodeURIComponent(q)}`,
  },
  {
    id: "wowhead",
    name: "Wowhead",
    emoji: "🌐",
    logoClass: "logo-wowhead",
    desc: "DB & guides officiels",
    buildUrl: (spec, cls) =>
      `https://www.wowhead.com/guides/${cls}/${spec}`,
    searchUrl: (q) =>
      `https://www.wowhead.com/search?q=${encodeURIComponent(q)}+guide`,
  },
  {
    id: "maxroll",
    name: "Maxroll",
    emoji: "🎯",
    logoClass: "logo-maxroll",
    desc: "Builds & progression",
    buildUrl: (spec, cls) =>
      `https://maxroll.gg/wow/class-guides/${spec}-${cls}-mythic-plus-guide`,
    searchUrl: (q) =>
      `https://maxroll.gg/wow/class-guides/`,
  },
];

// ─── Normalisation ─────────────────────────────────────────────────────────────
function norm(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .trim();
}

// ─── Recherche de classe ───────────────────────────────────────────────────────
function findClass(input) {
  const n = norm(input);
  if (!n) return null;
  // Correspondance exacte d'abord
  let match = DATA.find(c => norm(c.classFR) === n || norm(c.classEN) === n);
  if (match) return match;
  // Correspondance partielle
  match = DATA.find(c =>
    norm(c.classFR).includes(n) ||
    n.includes(norm(c.classFR)) ||
    norm(c.classEN).includes(n) ||
    n.includes(norm(c.classEN))
  );
  return match || null;
}

// ─── Recherche de spé ──────────────────────────────────────────────────────────
function findSpec(classData, input) {
  if (!classData || !input.trim()) return null;
  const n = norm(input);
  for (const sp of classData.specs) {
    if (sp.aliases.some(a => norm(a) === n || norm(a).includes(n) || n.includes(norm(a)))) {
      return sp;
    }
  }
  return null;
}

// ─── Suggestions de classes ────────────────────────────────────────────────────
function getClassSuggestions(input) {
  const n = norm(input);
  if (!n) return [];
  return DATA.filter(c =>
    norm(c.classFR).includes(n) ||
    norm(c.classEN).includes(n) ||
    n.includes(norm(c.classFR).split(" ")[0])
  );
}

// ─── Suggestions de spés ───────────────────────────────────────────────────────
function getSpecSuggestions(classData, input) {
  if (!classData) return [];
  const n = norm(input);
  if (!n) return classData.specs;
  return classData.specs.filter(sp =>
    sp.aliases.some(a => norm(a).includes(n) || n.includes(norm(a))) ||
    norm(sp.specFR).includes(n)
  );
}

// ─── Génération des cards ──────────────────────────────────────────────────────
function generateCards(classData, specData) {
  const cards = [];
  const searchQ = classData
    ? `${specData ? specData.specFR + " " : ""}${classData.classFR} WoW`
    : document.getElementById("classInput").value + " " + document.getElementById("specInput").value + " WoW guide";

  SITES.forEach(site => {
    let url, isDirect = false;
    if (classData && specData) {
      url = site.buildUrl(specData.specEN, classData.classEN, specData.role);
      isDirect = true;
    } else if (classData) {
      // Lien vers la section classe si pas de spé reconnue
      url = site.searchUrl(classData.classFR + " WoW guide");
    } else {
      url = site.searchUrl(searchQ);
    }
    cards.push({ site, url, isDirect });
  });
  return cards;
}

// ─── Rendu des résultats ───────────────────────────────────────────────────────
function renderResults(classData, specData) {
  const results  = document.getElementById("results");
  const label    = document.getElementById("resultLabel");
  const cardsDiv = document.getElementById("cards");

  const labelText = classData
    ? (specData ? `${specData.specFR} ${classData.classFR}` : classData.classFR)
    : `"${document.getElementById("classInput").value} ${document.getElementById("specInput").value}"`;

  label.textContent = labelText;
  cardsDiv.innerHTML = "";

  const cards = generateCards(classData, specData);

  cards.forEach(({ site, url, isDirect }) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = `card ${isDirect ? "direct" : "search"}`;

    const badge = isDirect
      ? `<span class="badge badge-direct">Lien direct</span>`
      : `<span class="badge badge-search">Recherche</span>`;

    a.innerHTML = `
      <div class="card-top">
        <div class="card-logo ${site.logoClass}">${site.emoji}</div>
        <div>
          <div class="card-name">${site.name}</div>
          ${badge}
        </div>
      </div>
      <div class="card-bottom">
        <span class="card-desc">${site.desc}</span>
        <span class="card-arrow">→</span>
      </div>
    `;
    cardsDiv.appendChild(a);
  });

  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ─── Quick links populaires ────────────────────────────────────────────────────
const POPULAR = [
  { classFR: "Guerrier",              specFR: "Fureur"         },
  { classFR: "Paladin",               specFR: "Vindicte"       },
  { classFR: "Mage",                  specFR: "Feu"            },
  { classFR: "Voleur",                specFR: "Finesse"        },
  { classFR: "Chasseur",              specFR: "Précision"      },
  { classFR: "Druide",                specFR: "Équilibre"      },
  { classFR: "Chaman",                specFR: "Amélioration"   },
  { classFR: "Chevalier de la mort",  specFR: "Impie"          },
  { classFR: "Démoniste",             specFR: "Destruction"    },
  { classFR: "Prêtre",                specFR: "Ombre"          },
  { classFR: "Moine",                 specFR: "Marche-vent"    },
  { classFR: "Évocateur",             specFR: "Dévastation"    },
];

function renderChips() {
  const chips = document.getElementById("chips");
  POPULAR.forEach(({ classFR, specFR }) => {
    const cls = DATA.find(c => c.classFR === classFR);
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.innerHTML = `
      <span class="chip-dot" style="background:${cls ? cls.color : "#888"}"></span>
      ${specFR} ${classFR}
    `;
    btn.addEventListener("click", () => {
      document.getElementById("classInput").value = classFR;
      document.getElementById("specInput").value  = specFR;
      doSearch();
    });
    chips.appendChild(btn);
  });
}

// ─── Autocomplete logic ───────────────────────────────────────────────────────
let activeClassData = null;

function setupAutocomplete() {
  const classInput    = document.getElementById("classInput");
  const specInput     = document.getElementById("specInput");
  const classSugEl    = document.getElementById("classSuggestions");
  const specSugEl     = document.getElementById("specSuggestions");

  function showClassSug(val) {
    const suggestions = getClassSuggestions(val);
    if (!suggestions.length || !val.trim()) {
      classSugEl.classList.remove("open");
      return;
    }
    classSugEl.innerHTML = suggestions.map(c =>
      `<div class="suggestion-item" data-class="${c.classFR}">
        <span class="chip-dot" style="background:${c.color}"></span>
        ${c.classFR}
        <span class="sug-en">${c.classEN}</span>
      </div>`
    ).join("");
    classSugEl.classList.add("open");

    classSugEl.querySelectorAll(".suggestion-item").forEach(el => {
      el.addEventListener("mousedown", e => {
        e.preventDefault();
        classInput.value = el.dataset.class;
        activeClassData = DATA.find(c => c.classFR === el.dataset.class);
        classSugEl.classList.remove("open");
        specInput.focus();
        showSpecSug(specInput.value);
      });
    });
  }

  function showSpecSug(val) {
    const suggestions = getSpecSuggestions(activeClassData, val);
    if (!suggestions.length) {
      specSugEl.classList.remove("open");
      return;
    }
    specSugEl.innerHTML = suggestions.map(s =>
      `<div class="suggestion-item" data-spec="${s.specFR}">
        ${s.specFR}
        <span class="sug-en">${s.specEN} · ${s.role}</span>
      </div>`
    ).join("");
    specSugEl.classList.add("open");

    specSugEl.querySelectorAll(".suggestion-item").forEach(el => {
      el.addEventListener("mousedown", e => {
        e.preventDefault();
        specInput.value = el.dataset.spec;
        specSugEl.classList.remove("open");
      });
    });
  }

  classInput.addEventListener("input", () => {
    activeClassData = findClass(classInput.value);
    showClassSug(classInput.value);
  });

  classInput.addEventListener("focus", () => showClassSug(classInput.value));
  classInput.addEventListener("blur",  () => setTimeout(() => classSugEl.classList.remove("open"), 150));

  specInput.addEventListener("input",  () => showSpecSug(specInput.value));
  specInput.addEventListener("focus",  () => {
    activeClassData = findClass(classInput.value);
    showSpecSug(specInput.value);
  });
  specInput.addEventListener("blur",   () => setTimeout(() => specSugEl.classList.remove("open"), 150));

  // Entrée → rechercher
  [classInput, specInput].forEach(inp => {
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter") doSearch();
    });
  });
}

// ─── Recherche principale ─────────────────────────────────────────────────────
function doSearch() {
  const classVal = document.getElementById("classInput").value.trim();
  const specVal  = document.getElementById("specInput").value.trim();

  if (!classVal && !specVal) return;

  const classData = findClass(classVal);
  const specData  = classData ? findSpec(classData, specVal) : null;

  renderResults(classData, specData);
}

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderChips();
  setupAutocomplete();
  document.getElementById("searchBtn").addEventListener("click", doSearch);
});
