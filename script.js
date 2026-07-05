function byId(id) {
  return document.getElementById(id);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(new Date(`${dateString}T12:00:00`));
}

function getTodayEntry() {
  const todayISO = new Date().toISOString().slice(0, 10);
  return tripDays.find(day => day.date === todayISO) || tripDays[0];
}

function linkButtons(ids = []) {
  const selected = ids
    .map(id => mapLinks.find(link => link.id === id))
    .filter(Boolean);

  if (!selected.length) return "";

  return `<div class="link-row">${selected.map(link => `<a href="${link.url}" target="_blank" rel="noopener"><span class="link-icon">⌖</span><span>${link.title}</span></a>`).join("")}</div>`;
}

function stars(rating = 0) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  return `${"★".repeat(value)}${"☆".repeat(5 - value)}`;
}

function departureTime(value = "") {
  const clean = String(value).trim();
  if (!clean || clean === "offen" || clean === "später ergänzen") return "offen";
  return clean.replace(/\s*Uhr$/i, "");
}

function dayCard(day) {
  return `
    <article class="card">
      <div class="day-header">
        <div>
          <span class="badge">${day.label}</span>
          <h3>${formatDate(day.date)} · ${day.title}</h3>
        </div>
        <time class="departure-time">${departureTime(day.departure)}</time>
      </div>
      <p><strong>Info:</strong> ${day.note}</p>
      ${linkButtons(day.links)}
    </article>
  `;
}

function foodCard(item) {
  const statusLabel = item.rating > 0 ? item.status : "offen";
  const imageMarkup = item.image
    ? `<figure class="food-card__image"><img src="${item.image}" alt="${item.name}" loading="lazy"><figcaption>${item.imageCredit || "Bildquelle"}</figcaption></figure>`
    : "";

  return `
    <article class="food-card">
      ${imageMarkup}
      <div class="food-card__body">
        <div class="food-card__top">
          <span class="food-category">${item.category}</span>
          <span class="food-status">${statusLabel}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="food-rating" aria-label="Bewertung ${item.rating} von 5">${stars(item.rating)}</p>
        <p>${item.description}</p>
        ${item.note ? `<p class="food-note"><strong>Notiz:</strong> ${item.note}</p>` : ""}
      </div>
    </article>
  `;
}

function renderToday() {
  const today = getTodayEntry();
  byId("today-card").innerHTML = `
    <p class="eyebrow">${formatDate(today.date)} · ${today.label}</p>
    <h3>${today.title}</h3>
    <p><strong>Abfahrt:</strong> ${departureTime(today.departure)}</p>
    <p><strong>Wichtig:</strong> ${today.note}</p>
    ${linkButtons(today.links)}
  `;
}

function renderProgram() {
  byId("program-list").innerHTML = tripDays.map(dayCard).join("");
}

function renderFood() {
  const rated = foodItems.filter(item => Number(item.rating) > 0);
  const average = rated.length
    ? rated.reduce((sum, item) => sum + Number(item.rating), 0) / rated.length
    : 0;
  const favorites = foodItems.filter(item => item.status === "favorit").length;

  byId("food-summary").innerHTML = `
    <article>
      <span>Probiert</span>
      <strong>${rated.length}/${foodItems.length}</strong>
    </article>
    <article>
      <span>Durchschnitt</span>
      <strong>${rated.length ? average.toFixed(1).replace(".", ",") : "–"}</strong>
    </article>
    <article>
      <span>Favoriten</span>
      <strong>${favorites}</strong>
    </article>
  `;

  byId("food-list").innerHTML = foodItems.map(foodCard).join("");
}

function renderLinks() {
  const grouped = mapLinks.reduce((acc, link) => {
    acc[link.category] ||= [];
    acc[link.category].push(link);
    return acc;
  }, {});

  byId("links-list").innerHTML = Object.entries(grouped).map(([category, links]) => `
    <article class="card">
      <h3>${category}</h3>
      <div class="link-row">
        ${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener"><span class="link-icon">⌖</span><span>${link.title}</span></a>`).join("")}
      </div>
    </article>
  `).join("");
}

renderToday();
renderFood();
renderProgram();
renderLinks();
