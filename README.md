# Juli-Kompass

Mobile Reiseplaner-Website für Mallorca 2026.

Live-Seite über GitHub Pages:

https://hz9d7fb8v5-design.github.io/juli-kompass-a9f3/

## Struktur

- `index.html` – Grundgerüst der Website
- `styles.css` – Gestaltung
- `script.js` – Heute-Ansicht, Tagesprogramm und Linkliste
- `data.js` – editierbare Reisedaten

## Hosting über GitHub Pages

Die Seite ist als statische Website für GitHub Pages aufgebaut.

Empfohlene GitHub-Pages-Einstellungen:

- Repository: öffentlich
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`
- HTTPS: aktiviert

GitHub Pages veröffentlicht die Dateien direkt aus dem Root-Verzeichnis des `main`-Branches. Es ist kein Build-Prozess nötig.

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

## Bildquellen

Die Highlight-Karten nutzen externe Bilddateien von Wikimedia/Wikipedia bzw. Wikimedia Commons:

- Palma: `Kathedrale_von_Palma_II.jpg`
- Sóller: `Port_de_Sóller.JPG`
- Tropfsteinhöhle: `Mallorca_Porto_Cristo_Coves_dels_Hams_asv2023-04_img04.jpg`
- Buchten/Strand: `Cala Torta 08.jpg`

Die Quellen sind in `styles.css` als Hintergrundbilder hinterlegt. Bei späterer öffentlicher Nutzung sollte die jeweilige Lizenz/Attribution der Bilddateien noch einmal geprüft und ggf. sichtbar ergänzt werden.

## Datenschutz

Die Seite enthält bewusst keine Namen, keine genaue Unterkunftsadresse, keine Buchungsnummern und keine detaillierten Flugdaten.

Ein einfacher Passwortschutz ist aktuell nicht aktiv. Er kann am Ende wieder ergänzt werden, wenn Inhalt und Gestaltung stabil sind.
