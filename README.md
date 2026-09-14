# Huisgids Markollenweg 2 — website

Meerpagina-website (echte homepage, menu en losse pagina's) van de gastengids,
tweetalig NL/EN, installeerbaar als app (PWA). Statische site, geen build nodig.

Dit is een APARTE versie naast de bestaande one-pager en de PDF; die blijven
gewoon bestaan.

## Structuur
- `index.html` — homepage met introductie en kaarten naar elke pagina
- `aankomst.html`, `het-huis.html`, `zwembad-tuin.html`, `praktisch.html`,
  `omgeving.html`, `eten-drinken.html`, `contact.html` — de pagina's
- `styles.css`, `app.js` — gedeelde stijl, menu en taalwissel
- `img/` — alle foto's (door alle pagina's gedeeld)
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — app-instellingen, offline, iconen
- `vercel.json` — kleine serverinstellingen

## Live zetten
Zelfde als je vorige keer deed: importeer de map als nieuw project in Vercel
(vercel.com/new → Import Git Repository, of sleep de map op vercel.com/drop).
Maak er een NIEUW project van, zodat je bestaande site blijft staan.

## Updates
Wijzig je iets, upload dan het gewijzigde bestand opnieuw in de repo; bij een
Git-koppeling deployt Vercel automatisch.
