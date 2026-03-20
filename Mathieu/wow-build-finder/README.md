# WoW Build Finder — Documentation technique

## Vue d'ensemble

Application web statique (zéro dépendance, zéro serveur) qui prend en entrée une classe et une spécialisation WoW, puis génère des liens directs vers les guides correspondants sur Icy Veins, Wowhead, Archon.gg et Maxroll.

---

## Structure des fichiers

```
wow-build-finder/
├── index.html   → Structure HTML de la page (inputs, zone résultats, chips)
├── style.css    → Thème sombre WoW (variables CSS, layout, animations)
└── script.js    → Toute la logique : données, matching, génération d'URLs, DOM
```

---

## Fonctionnement détaillé

### 1. La base de données locale (`script.js` — tableau `DATA`)

Tout repose sur un tableau d'objets JavaScript défini statiquement. Chaque entrée représente une classe :

```js
{
  classFR: "Chevalier de la mort",   // nom affiché
  classEN: "death-knight",           // slug utilisé dans les URLs
  color: "#c41e3a",                  // couleur de classe WoW (pour les chips)
  specs: [
    {
      specFR: "Impie",               // nom affiché
      aliases: ["impie", "unholy"],  // tous les mots-clés reconnus (FR + EN + abréviations)
      specEN: "unholy",              // slug utilisé dans les URLs
      role: "dps"                    // tank | dps | heal (utilisé par Icy Veins)
    },
    ...
  ]
}
```

Il n'y a pas de base de données externe ni d'API : tout est embarqué dans le fichier JS.

---

### 2. La normalisation des entrées (`norm()`)

Avant toute comparaison, les chaînes passent par cette fonction :

```js
function norm(s) {
  return s
    .toLowerCase()
    .normalize("NFD")                    // décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "")     // supprime les diacritiques (accents)
    .trim();
}
```

Cela permet de matcher "Équilibre", "equilibre", "Equilibre" ou "EQUILIBRE" de façon identique.

---

### 3. Le matching classe / spécialisation

**Recherche de classe (`findClass`)** : compare l'entrée utilisateur contre `classFR` et `classEN` de chaque entrée dans `DATA`. Deux passes :
1. Correspondance exacte (après normalisation)
2. Correspondance partielle (`includes`) dans les deux sens

**Recherche de spé (`findSpec`)** : parcourt le tableau `aliases` de chaque spé de la classe trouvée. Si l'un des alias correspond (exact ou partiel), la spé est sélectionnée.

Exemple :
- Entrée `"dk"` → matche `classEN: "death-knight"` (partiel)
- Entrée `"impie"` → matche l'alias `"impie"` dans les specs du DK

---

### 4. La construction des URLs

Chaque site est décrit dans le tableau `SITES` avec deux fonctions :

| Fonction      | Usage                                      |
|---------------|--------------------------------------------|
| `buildUrl()`  | URL directe vers le guide (spé connue)     |
| `searchUrl()` | URL de recherche fallback (spé inconnue)   |

**Icy Veins** — le rôle est nécessaire dans l'URL :
```
https://www.icy-veins.com/wow/{spec}-{class}-pve-{role}-guide
ex: /wow/unholy-death-knight-pve-dps-guide
```

**Wowhead** :
```
https://www.wowhead.com/guides/{class}/{spec}
ex: /guides/death-knight/unholy
```

**Maxroll** :
```
https://maxroll.gg/wow/class-guides/{spec}-{class}-mythic-plus-guide
ex: /wow/class-guides/unholy-death-knight-mythic-plus-guide
```

Si la classe ou la spé n'est pas reconnue, les URLs de recherche sont utilisées à la place, avec la requête encodée via `encodeURIComponent()`.

---

### 5. L'autocomplétion

Implémentée manuellement sans librairie. Au `input` event de chaque champ :

1. La fonction `getClassSuggestions()` ou `getSpecSuggestions()` filtre les entrées de `DATA`
2. Le résultat est injecté en HTML dans un `<div class="suggestions">` positionné en `absolute` sous l'input
3. Un clic sur une suggestion remplit le champ et ferme le dropdown via `classList.remove("open")`
4. Le `blur` event ferme le dropdown avec un `setTimeout(150ms)` pour laisser le temps au clic de s'enregistrer avant la fermeture

La spécialisation propose uniquement les spés de la classe actuellement saisie (stockée dans `activeClassData`).

---

### 6. Le rendu des résultats

`renderResults()` crée dynamiquement les cards via `document.createElement("a")` et `innerHTML`. Chaque card est un lien `<a target="_blank">` vers le site correspondant. Les cards avec un lien direct reçoivent la classe CSS `.direct`, les fallbacks reçoivent `.search` — ce qui change leur style visuel (badge couleur or vs bleu).

---

### 7. Les quick links

Le tableau `POPULAR` liste 12 builds prédéfinis. `renderChips()` crée un bouton par entrée au chargement de la page. Un clic remplit les deux inputs et appelle directement `doSearch()`.

---

## Limites connues

- Les URLs des sites cibles peuvent changer sans préavis (structure de slug différente selon les mises à jour de chaque site).
- Aucune vérification que le lien généré existe réellement (pas de requête HTTP de validation).
- Les données sont statiques : les nouvelles spés ou classes ajoutées en jeu doivent être ajoutées manuellement dans le tableau `DATA`.
- Archon.gg a été retiré (contenu non à jour).
- Maxroll utilise le suffixe `-mythic-guide` dans ses URLs — si un guide n'existe pas encore pour une spé, le fallback redirige vers la liste complète des guides.
