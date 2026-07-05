# Juli-Kompass

Mobile Reiseplaner-Website für Mallorca 2026.

Live-Seite:

https://precious-chimera-db9da1.netlify.app/

## Struktur

- `index.html` – Grundgerüst der Website
- `styles.css` – Gestaltung
- `script.js` – Heute-Ansicht, Tagesprogramm und Linkliste
- `data.js` – editierbare Reisedaten

## Hosting über Netlify

Die Seite ist als statische Website über Netlify veröffentlicht.

Empfohlene Netlify-Einstellungen:

- Branch: `main`
- Build command: leer lassen
- Publish directory: `.`
- Base directory: leer lassen
- Framework preset: None / Static site

Netlify aktualisiert die Live-Seite automatisch nach Änderungen im `main`-Branch.

## Inhalte ändern

Die meisten Inhalte stehen in `data.js`.

### Abfahrtzeit ändern

```js
departure: "10:00 Uhr"
```

### Tagesprogramm ändern

```js
title: "Palma",
note: "Parkhaus vorher auswählen."
```

### Link ergänzen

```js
{ id: "palma", category: "Ausflug", title: "Palma", url: "https://www.google.com/maps/search/?api=1&query=Palma+Mallorca" }
```

Danach kann die Link-ID beim Tag eingetragen werden:

```js
links: ["palma"]
```

## Datenschutz

Die Seite enthält bewusst keine Namen, keine genaue Unterkunftsadresse, keine Buchungsnummern und keine detaillierten Flugdaten.

Ein einfacher Passwortschutz ist aktuell nicht aktiv. Er kann am Ende wieder ergänzt werden, wenn Inhalt und Gestaltung stabil sind.
