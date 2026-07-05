# Architekturcheck

Stand: Build `20260705-5`

## Zielbild

Die Seite bleibt eine einfache statische GitHub-Pages-Seite ohne Build-Prozess. Das ist für den Reiseplan richtig: wenig Technik, schnell ladbar, keine Serverkosten und kein Netlify nötig.

## Dateirollen

- `index.html` enthält nur die Grundstruktur und lädt die versionierten Assets.
- `data.js` enthält Reisedaten, Tagesprogramm, Highlight-Karten und Kartenlinks.
- `food.js` enthält Speisen, Getränke, Bilder, Fallback-Bilder und Bewertungen.
- `script.js` rendert die dynamischen Karten, setzt Bild-Fallbacks und prüft die aktuelle Build-Version.
- `styles.css` enthält Basislayout und Hauptdesign.
- `food.css` enthält Ergänzungen für Food-Karten, Link-Chips, Bild-Fallbacks und neue Programmkarten.
- `version.json` ist der Deploy-Marker für Aktualisierungsprüfungen.
- `.nojekyll` verhindert Jekyll-Verarbeitung auf GitHub Pages.

## Aktualisierung

GitHub Pages kann die HTML-Datei kurzzeitig cachen. Deshalb nutzt die Seite jetzt zwei Mechanismen:

1. Alle CSS- und JS-Dateien werden mit fester Build-ID geladen, aktuell `?v=20260705-5`.
2. `script.js` ruft `version.json?t=<Zeitstempel>` mit `cache: "no-store"` ab. Wenn dort eine neuere Build-ID steht, wird die Seite automatisch mit einer frischen URL neu geladen. Wenn das nicht geht, erscheint ein Aktualisierungsbanner.

Wichtig: Bei jeder strukturellen Änderung sollten drei Stellen hochgezählt werden:

- Asset-Versionen in `index.html`
- `APP_BUILD_ID` in `script.js`
- `build` in `version.json`

## Bilder

Problemursache: `encrypted-tbn0.gstatic.com`-URLs sind Google-Vorschaubilder. Sie können funktionieren, sind aber nicht als dauerhafte Bildquelle gedacht.

Verbesserung:

- Die vom Nutzer gewünschten URLs bleiben als Primärbild erhalten.
- Für kritische Bilder gibt es `fallbackImage` mit stabilerer Quelle.
- Wenn ein Bild nicht lädt, tauscht `script.js` automatisch auf das Fallback-Bild.
- Wenn auch das Fallback ausfällt, bleibt die Karte mit einer gestalteten Ersatzfläche sichtbar.

## Datenschutz

Die Seite enthält weiterhin keine Namen, keine genaue Unterkunftsadresse, keine Buchungsnummern und keine detaillierten Flugdaten. Der frühere clientseitige Passwortwert wurde aus `data.js` entfernt, weil ein Passwort in einer öffentlichen JS-Datei kein Schutz ist.

## Offene technische Grenze

Der aktuell verfügbare GitHub-Connector schreibt zuverlässig Textdateien. Lokale Binärbilder wurden deshalb nicht ins Repository geladen. Für maximale Robustheit wäre der nächste technische Schritt, Bilder manuell lokal unter `assets/images/` in GitHub hochzuladen und die externen URLs zu ersetzen.
