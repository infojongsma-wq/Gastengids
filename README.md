# Huisgids Markollenweg 2

Tweetalige (NL/EN) gastengids voor Markollenweg 2 in Holten, als installeerbare
web-app (PWA). Eén statische site — geen build nodig.

## Bestanden
- `index.html` — de complete gids (foto's zitten in het bestand)
- `manifest.webmanifest` — app-instellingen (naam, icoon, kleuren)
- `sw.js` — service worker; laat de gids ook offline werken
- `icon-*.png`, `apple-touch-icon.png`, `favicon-64.png` — app-iconen
- `vercel.json` — kleine serverinstellingen

## Live zetten — kies één route

### Route A · Vercel drag-and-drop (snelst, geen GitHub nodig)
1. Ga naar https://vercel.com/new
2. Sleep de map (of de zip, uitgepakt) naar het venster, of kies "deploy".
3. Klaar. Je krijgt meteen een URL zoals `huisgids-xxx.vercel.app`.

### Route B · GitHub + automatische updates
1. Maak op github.com een nieuwe (privé) repository, bv. `gastengids-holten`.
2. Upload deze bestanden (of `git push` ze).
3. Ga naar https://vercel.com/new, kies "Import Git Repository" en selecteer de repo.
4. Deploy. Elke toekomstige push werkt de site automatisch bij.

## Op de telefoon als app
- iPhone (Safari): deel-knop → "Zet op beginscherm".
- Android (Chrome): menu → "App installeren" / "Toevoegen aan startscherm".

## Eigen domein
In Vercel: project → Settings → Domains → domein toevoegen.
