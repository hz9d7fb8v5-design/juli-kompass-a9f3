const tripConfig = {
  title: "Mallorca 2026",
  region: "Son Catlar d'Alt",
  dates: "17.07. – 26.07.2026"
};

const destinationCards = [
  {
    id: "palma",
    type: "Stadt",
    title: "Palma",
    description: "Altstadt, Kathedrale, Gassen, Essen und ein entspannter Abend.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6BbM1j1zm0YkK_RMUYUlBEvHbJ0JanWjUsMNfsmFLg&s=10",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kathedrale_von_Palma_II.jpg/1200px-Kathedrale_von_Palma_II.jpg"
  },
  {
    id: "soller",
    type: "Berge & Hafen",
    title: "Sóller",
    description: "Tramuntana, Port de Sóller und ein Tag mit Aussicht.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OJkKgylUcScrnotPRJTDetGs5kER03BJrqIFJcJivA&s=10",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Port_de_S%C3%B3ller.JPG/1200px-Port_de_S%C3%B3ller.JPG"
  },
  {
    id: "cave",
    type: "Ausflug",
    title: "Tropfsteinhöhle",
    description: "Schlechtwetter-Option oder Pause von der Mittagshitze.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowRJ6ulrmNH68JrvCJVfkBL6jL0Ou0hohLDKWgzjcQ&s=10",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mallorca_Porto_Cristo_Coves_dels_Hams_asv2023-04_img04.jpg/1200px-Mallorca_Porto_Cristo_Coves_dels_Hams_asv2023-04_img04.jpg"
  },
  {
    id: "beach",
    type: "Meer",
    title: "Buchten",
    description: "Strandtage, Pinien, Bootsidee und flexible Stopps.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cala%20Torta%2008.jpg?width=1200",
    fallbackImage: ""
  }
];

const tripDays = [
  {
    date: "2026-07-17",
    label: "Anreise",
    title: "Hinflug am Abend",
    departure: "10:00 Uhr",
    note: "Ankommen, Mietwagen und Unterkunft. Keine sensiblen Details eintragen.",
    links: []
  },
  {
    date: "2026-07-18",
    label: "Tag 1",
    title: "Ankommen, Einkauf, Grillen",
    departure: "10:00 Uhr",
    note: "Erster voller Urlaubstag.",
    links: []
  },
  {
    date: "2026-07-19",
    label: "Tag 2",
    title: "Strand / Bucht und WM-Finale",
    departure: "10:00 Uhr",
    note: "WM-Finale um 21:00 Uhr.",
    links: []
  },
  {
    date: "2026-07-20",
    label: "Tag 3",
    title: "Palma",
    departure: "10:00 Uhr",
    note: "Details später ergänzen.",
    links: []
  },
  {
    date: "2026-07-21",
    label: "Tag 4",
    title: "Sóller / Port de Sóller",
    departure: "10:00 Uhr",
    note: "Details später ergänzen.",
    links: []
  },
  {
    date: "2026-07-22",
    label: "Tag 5",
    title: "Tropfsteinhöhle",
    departure: "10:00 Uhr",
    note: "Eine der Höhlen auswählen.",
    links: ["hoehle-1", "hoehle-2"]
  },
  {
    date: "2026-07-23",
    label: "Tag 6",
    title: "Torrent / Schlucht wandern",
    departure: "10:00 Uhr",
    note: "Früh starten, falls es heiß wird.",
    links: []
  },
  {
    date: "2026-07-24",
    label: "Tag 7",
    title: "Rennradtour oder Buchten / Boot mieten",
    departure: "10:00 Uhr",
    note: "Später konkretisieren.",
    links: []
  },
  {
    date: "2026-07-25",
    label: "Tag 8",
    title: "Ballermann",
    departure: "10:00 Uhr",
    note: "Echter Programmpunkt.",
    links: []
  },
  {
    date: "2026-07-26",
    label: "Abreise",
    title: "Rückflug am Abend",
    departure: "10:00 Uhr",
    note: "Rückgabe Mietwagen und Rückflug. Keine sensiblen Details eintragen.",
    links: []
  }
];

const mapLinks = [
  { id: "hoehle-1", category: "Ausflug", title: "Coves del Drach", detail: "Tropfsteinhöhle · Google Maps", url: "https://maps.app.goo.gl/SiGou5L6CD7bLsL39?g_st=ic" },
  { id: "hoehle-2", category: "Ausflug", title: "Coves de Campanet", detail: "Tropfsteinhöhle · Google Maps", url: "https://maps.app.goo.gl/q9LriFVtHe7BMmgB6?g_st=ic" },
  { id: "restaurant-argentinier", category: "Restaurant", title: "Argentinier / Fleisch essen – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/58sgTiktTDrKqF2w9?g_st=ic" },
  { id: "restaurant-2", category: "Restaurant", title: "Restaurant 2 – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/51QPqYrwRrPA6Yiq5?g_st=ic" },
  { id: "restaurant-3", category: "Restaurant", title: "Restaurant 3 – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/CztDxNLLZwYnXaDHA?g_st=ic" },
  { id: "restaurant-4", category: "Restaurant", title: "Restaurant 4 – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/zn7ZK8bqGLQFotHE8?g_st=ic" },
  { id: "restaurant-5", category: "Restaurant", title: "Restaurant 5 – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/mmCiLDpchateA3gH7?g_st=ic" },
  { id: "restaurant-6", category: "Restaurant", title: "Restaurant 6 – Name prüfen", detail: "Restaurant · Google Maps", url: "https://maps.app.goo.gl/8mTSDk3JkRie2w3n9?g_st=ic" },
  { id: "pinienstrand", category: "Strand", title: "Pinienstrand – Name prüfen", detail: "Strand · Google Maps", url: "https://maps.app.goo.gl/W9HoGqRYBToKH4nv9?g_st=ic" },
  { id: "cala-murada", category: "Strand", title: "Cala Murada", detail: "Strand · Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cala+Murada+Mallorca" },
  { id: "strand-3", category: "Strand", title: "Strand / Bucht – Name prüfen", detail: "Strand · Google Maps", url: "https://maps.app.goo.gl/TimMHhiSt8qjVX4f8?g_st=ic" }
];
