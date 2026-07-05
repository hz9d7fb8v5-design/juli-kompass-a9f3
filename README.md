# Juli-Kompass

Minimale Testversion für eine mobile Mallorca-Reiseplaner-Website.

## Struktur

- `index.html` – Grundgerüst der Website
- `styles.css` – Gestaltung
- `script.js` – Passwortscreen, Heute-Ansicht, Tagesprogramm, Linkliste
- `data.js` – editierbare Reisedaten

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

Die Seite enthält bewusst keine Namen, keine genaue Unterkunftsadresse, keine Buchungsnummern und keine Flugdaten. Der Passwortschutz ist clientseitig und nur ein einfacher Sichtschutz.

## GitHub Pages

Für GitHub Pages das Repository öffnen und unter `Settings` → `Pages` als Quelle `Deploy from a branch`, Branch `main`, Ordner `/root` auswählen.
