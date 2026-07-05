const tripConfig = {
  password: "5aufMalle",
  rememberLogin: true,
  title: "Mallorca 2026",
  region: "Son Catlar d'Alt",
  dates: "17.07. – 26.07.2026"
};

const tripDays = [
  {
    date: "2026-07-17",
    label: "Anreise",
    title: "Hinflug am Abend",
    departure: "später ergänzen",
    note: "Ankommen, Mietwagen und Unterkunft. Keine sensiblen Details eintragen.",
    links: []
  },
  {
    date: "2026-07-18",
    label: "Tag 1",
    title: "Ankommen, Einkauf, Grillen",
    departure: "offen",
    note: "Erster voller Urlaubstag.",
    links: []
  },
  {
    date: "2026-07-19",
    label: "Tag 2",
    title: "Strand / Bucht und WM-Finale",
    departure: "offen",
    note: "WM-Finale um 21:00 Uhr.",
    links: []
  },
  {
    date: "2026-07-20",
    label: "Tag 3",
    title: "Palma",
    departure: "offen",
    note: "Details später ergänzen.",
    links: []
  },
  {
    date: "2026-07-21",
    label: "Tag 4",
    title: "Sóller / Port de Sóller",
    departure: "offen",
    note: "Details später ergänzen.",
    links: []
  },
  {
    date: "2026-07-22",
    label: "Tag 5",
    title: "Tropfsteinhöhle",
    departure: "offen",
    note: "Eine der Höhlen auswählen.",
    links: ["hoehle-1", "hoehle-2"]
  },
  {
    date: "2026-07-23",
    label: "Tag 6",
    title: "Torrent / Schlucht wandern",
    departure: "offen",
    note: "Früh starten, falls es heiß wird.",
    links: []
  },
  {
    date: "2026-07-24",
    label: "Tag 7",
    title: "Rennradtour oder Buchten / Boot mieten",
    departure: "offen",
    note: "Später konkretisieren.",
    links: []
  },
  {
    date: "2026-07-25",
    label: "Tag 8",
    title: "Ballermann",
    departure: "offen",
    note: "Echter Programmpunkt.",
    links: []
  },
  {
    date: "2026-07-26",
    label: "Abreise",
    title: "Rückflug am Abend",
    departure: "später ergänzen",
    note: "Rückgabe Mietwagen und Rückflug. Keine sensiblen Details eintragen.",
    links: []
  }
];

const mapLinks = [
  { id: "hoehle-1", category: "Ausflug", title: "Tropfsteinhöhle 1 – Name prüfen", url: "https://maps.app.goo.gl/SiGou5L6CD7bLsL39?g_st=ic" },
  { id: "hoehle-2", category: "Ausflug", title: "Tropfsteinhöhle 2 – Name prüfen", url: "https://maps.app.goo.gl/q9LriFVtHe7BMmgB6?g_st=ic" },
  { id: "restaurant-argentinier", category: "Restaurant", title: "Argentinier / Fleisch essen – Name prüfen", url: "https://maps.app.goo.gl/58sgTiktTDrKqF2w9?g_st=ic" },
  { id: "restaurant-2", category: "Restaurant", title: "Restaurant 2 – Name prüfen", url: "https://maps.app.goo.gl/51QPqYrwRrPA6Yiq5?g_st=ic" },
  { id: "restaurant-3", category: "Restaurant", title: "Restaurant 3 – Name prüfen", url: "https://maps.app.goo.gl/CztDxNLLZwYnXaDHA?g_st=ic" },
  { id: "restaurant-4", category: "Restaurant", title: "Restaurant 4 – Name prüfen", url: "https://maps.app.goo.gl/zn7ZK8bqGLQFotHE8?g_st=ic" },
  { id: "restaurant-5", category: "Restaurant", title: "Restaurant 5 – Name prüfen", url: "https://maps.app.goo.gl/mmCiLDpchateA3gH7?g_st=ic" },
  { id: "restaurant-6", category: "Restaurant", title: "Restaurant 6 – Name prüfen", url: "https://maps.app.goo.gl/8mTSDk3JkRie2w3n9?g_st=ic" },
  { id: "pinienstrand", category: "Strand", title: "Pinienstrand – Name prüfen", url: "https://maps.app.goo.gl/W9HoGqRYBToKH4nv9?g_st=ic" },
  { id: "cala-murada", category: "Strand", title: "Cala Murada", url: "https://www.google.com/maps/search/?api=1&query=Cala+Murada+Mallorca" },
  { id: "strand-3", category: "Strand", title: "Strand / Bucht – Name prüfen", url: "https://maps.app.goo.gl/TimMHhiSt8qjVX4f8?g_st=ic" }
];
