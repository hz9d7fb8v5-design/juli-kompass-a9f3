const tripConfig = {
  title: "Mallorca 2026",
  region: "Son Catlar d'Alt",
  dates: "17.07. – 26.07.2026"
};

const makeIllustrationThumb = (title, subtitle, c1 = "#d88955", c2 = "#184a57", icon = "food") =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
        <radialGradient id="glow" cx="28%" cy="24%" r="58%">
          <stop offset="0%" stop-color="rgba(255,255,255,.28)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="240" height="180" rx="28" fill="url(#bg)"/>
      <rect width="240" height="180" rx="28" fill="url(#glow)"/>
      ${icon === "cave" ? `<path d="M30 122c18-46 31-72 48-72 11 0 17 14 25 14 9 0 14-27 31-27 17 0 24 31 34 31 7 0 10-12 20-12 15 0 24 33 28 66H30z" fill="rgba(255,255,255,.22)"/><path d="M52 126c30 11 107 12 142 0" stroke="rgba(255,255,255,.65)" stroke-width="7" stroke-linecap="round"/>` : `<path d="M140 52c0-10 8-18 18-18h20v76h-14V78h-12c-10 0-12 10-12 18v14h-14V52h14zm24-4h-6c-4 0-6 3-6 7v9h12z" fill="rgba(255,255,255,.88)"/><path d="M72 34h10v33c0 6-4 11-10 12v31H58V79c-6-1-10-6-10-12V34h10v20h4V34h10v20h4z" fill="rgba(255,255,255,.88)"/>`}
      <text x="24" y="136" fill="white" font-size="24" font-family="Arial, Helvetica, sans-serif" font-weight="800">${title}</text>
      <text x="24" y="160" fill="rgba(255,255,255,.86)" font-size="14" font-family="Arial, Helvetica, sans-serif" font-weight="700">${subtitle}</text>
    </svg>
  `)}`;

const destinationCards = [
  {
    id: "palma",
    type: "Stadt",
    title: "Palma",
    description: "Altstadt, Kathedrale, Gassen, Essen und ein entspannter Abend.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6BbM1j1zm0YkK_RMUYUlBEvHbJ0JanWjUsMNfsmFLg&s=10",
    fallbackImage: makeIllustrationThumb("Palma", "Altstadt", "#d98f58", "#154958", "cave")
  },
  {
    id: "soller",
    type: "Berge & Hafen",
    title: "Sóller",
    description: "Tramuntana, Port de Sóller und ein Tag mit Aussicht.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OJkKgylUcScrnotPRJTDetGs5kER03BJrqIFJcJivA&s=10",
    fallbackImage: makeIllustrationThumb("Sóller", "Hafen & Berge", "#d8a45f", "#1d5966", "cave")
  },
  {
    id: "cave",
    type: "Ausflug",
    title: "Tropfsteinhöhle",
    description: "Schlechtwetter-Option oder Pause von der Mittagshitze.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowRJ6ulrmNH68JrvCJVfkBL6jL0Ou0hohLDKWgzjcQ&s=10",
    fallbackImage: makeIllustrationThumb("Höhlen", "Ausflug", "#b8754d", "#123f4d", "cave")
  },
  {
    id: "beach",
    type: "Meer",
    title: "Buchten",
    description: "Strandtage, Pinien, Bootsidee und flexible Stopps.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cala%20Torta%2008.jpg?width=1200",
    fallbackImage: makeIllustrationThumb("Buchten", "Meer", "#d89d5e", "#0d6575", "cave")
  }
];

const tripDays = [
  { date: "2026-07-17", label: "Anreise", title: "Hinflug am Abend", departure: "10:00 Uhr", note: "Ankommen, Mietwagen und Unterkunft. Keine sensiblen Details eintragen.", links: [] },
  { date: "2026-07-18", label: "Tag 1", title: "Ankommen, Einkauf, Grillen", departure: "10:00 Uhr", note: "Erster voller Urlaubstag.", links: [] },
  { date: "2026-07-19", label: "Tag 2", title: "Strand / Bucht und WM-Finale", departure: "10:00 Uhr", note: "WM-Finale um 21:00 Uhr.", links: [] },
  { date: "2026-07-20", label: "Tag 3", title: "Palma", departure: "10:00 Uhr", note: "Details später ergänzen.", links: [] },
  { date: "2026-07-21", label: "Tag 4", title: "Sóller / Port de Sóller", departure: "10:00 Uhr", note: "Details später ergänzen.", links: [] },
  { date: "2026-07-22", label: "Tag 5", title: "Tropfsteinhöhle", departure: "10:00 Uhr", note: "Eine der Höhlen auswählen.", links: ["hoehle-1", "hoehle-2"] },
  { date: "2026-07-23", label: "Tag 6", title: "Torrent / Schlucht wandern", departure: "10:00 Uhr", note: "Früh starten, falls es heiß wird.", links: [] },
  { date: "2026-07-24", label: "Tag 7", title: "Rennradtour oder Buchten / Boot mieten", departure: "10:00 Uhr", note: "Später konkretisieren.", links: [] },
  { date: "2026-07-25", label: "Tag 8", title: "Ballermann", departure: "10:00 Uhr", note: "Echter Programmpunkt.", links: [] },
  { date: "2026-07-26", label: "Abreise", title: "Rückflug am Abend", departure: "10:00 Uhr", note: "Rückgabe Mietwagen und Rückflug. Keine sensiblen Details eintragen.", links: [] }
];

const mapLinks = [
  { id: "hoehle-1", category: "Ausflug", title: "Coves del Drach", detail: "Tropfsteinhöhle · Google Maps", image: makeIllustrationThumb("Drach", "Höhle & See", "#a86644", "#063c57", "cave"), fallbackImage: "", url: "https://maps.app.goo.gl/SiGou5L6CD7bLsL39?g_st=ic" },
  { id: "hoehle-2", category: "Ausflug", title: "Coves de Campanet", detail: "Tropfsteinhöhle · Google Maps", image: makeIllustrationThumb("Campanet", "Stalaktiten", "#c08a52", "#174a3f", "cave"), fallbackImage: "", url: "https://maps.app.goo.gl/q9LriFVtHe7BMmgB6?g_st=ic" },
  { id: "restaurant-argentinier", category: "Restaurant", title: "LA PORTEÑA", detail: "Argentinier · Google Maps", image: makeIllustrationThumb("La Porteña", "Argentinier", "#cf7d51", "#184a57"), fallbackImage: "", url: "https://maps.app.goo.gl/58sgTiktTDrKqF2w9?g_st=ic" },
  { id: "restaurant-2", category: "Restaurant", title: "Can Joan de s'Aigo", detail: "Restaurant · Google Maps", image: makeIllustrationThumb("Can Joan", "Tradition & Süßes", "#d89b5a", "#1b5460"), fallbackImage: "", url: "https://maps.app.goo.gl/51QPqYrwRrPA6Yiq5?g_st=ic" },
  { id: "restaurant-3", category: "Restaurant", title: "Restaurant Illeta", detail: "Restaurant · Google Maps", image: makeIllustrationThumb("Illeta", "Meerblick", "#d38d62", "#175564"), fallbackImage: "", url: "https://maps.app.goo.gl/CztDxNLLZwYnXaDHA?g_st=ic" },
  { id: "restaurant-4", category: "Restaurant", title: "Restaurant Can Gata", detail: "Restaurant · Google Maps", image: makeIllustrationThumb("Can Gata", "Mallorca", "#db8f58", "#1d4f58"), fallbackImage: "", url: "https://maps.app.goo.gl/zn7ZK8bqGLQFotHE8?g_st=ic" },
  { id: "restaurant-5", category: "Restaurant", title: "El Sol Sunshine Bar & Beach Apartments", detail: "Bar & Beach Apartments · Google Maps", image: makeIllustrationThumb("El Sol", "Beach Bar", "#e1a55d", "#1f6170"), fallbackImage: "", url: "https://maps.app.goo.gl/mmCiLDpchateA3gH7?g_st=ic" },
  { id: "restaurant-6", category: "Restaurant", title: "Restaurant Platja Cala Murada", detail: "Restaurant · Google Maps", image: makeIllustrationThumb("Platja", "Strandrestaurant", "#d18a63", "#245d6b"), fallbackImage: "", url: "https://maps.app.goo.gl/8mTSDk3JkRie2w3n9?g_st=ic" },
  { id: "pinienstrand", category: "Strand", title: "Platja d'Alcúdia", detail: "Strand · Google Maps", image: makeIllustrationThumb("Alcúdia", "Strand", "#d7a35b", "#0e6672", "cave"), fallbackImage: "", url: "https://www.google.com/maps/search/?api=1&query=Platja+d%27Alc%C3%BAdia+Mallorca" },
  { id: "cala-murada", category: "Strand", title: "Cala Murada", detail: "Strand · Google Maps", image: makeIllustrationThumb("Cala", "Murada", "#d59a5b", "#0f7180", "cave"), fallbackImage: "", url: "https://www.google.com/maps/search/?api=1&query=Cala+Murada+Mallorca" },
  { id: "strand-3", category: "Strand", title: "Strand / Bucht – Name prüfen", detail: "Strand · Google Maps", image: makeIllustrationThumb("Bucht", "Strand", "#c99659", "#0c5f70", "cave"), fallbackImage: "", url: "https://maps.app.goo.gl/TimMHhiSt8qjVX4f8?g_st=ic" }
];
