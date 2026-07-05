const APP_BUILD_ID = "20260705-5";

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(new Date(`${dateString}T12:00:00`));
}

function localISODate(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function getTodayEntry() {
  const todayISO = localISODate();
  return tripDays.find(day => day.date === todayISO) || tripDays[0];
}

function imageTag(src, fallback, alt) {
  if (!src) return "";
  const fallbackAttr = fallback ? ` data-fallback="${escapeHtml(fallback)}"` : "";
  return `<img src="${escapeHtml(src)}"${fallbackAttr} alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;
}

function setupImageFallbacks() {
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      const fallback = img.dataset.fallback;
      if (fallback && img.src !== fallback) {
        img.removeAttribute("data-fallback");
        img.src = fallback;
        return;
      }
      img.closest("figure, .destination-card")?.classList.add("image-failed");
      img.remove();
    });
  });
}

function linkButtons(ids = []) {
  const selected = ids
    .map(id => mapLinks.find(link => link.id === id))
    .filter(Boolean);

  if (!selected.length) return "";

  return `<div class="link-row">${selected.map(link => mapLink(link)).join("")}</div>`;
}

function mapLink(link) {
  return `<a class="map-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener"><span class="link-icon">⌖</span><span>${escapeHtml(link.title)}</span></a>`;
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

function destinationCard(item) {
  return `
    <article class="destination-card destination-card--${escapeHtml(item.id)}">
      <figure class="destination-card__image">
        ${imageTag(item.image, item.fallbackImage, item.title)}
      </figure>
      <span>${escapeHtml(item.type)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `;
}

function dayCard(day) {
  return `
    <article class="card">
      <div class="day-header">
        <div>
          <span class="badge">${escapeHtml(day.label)}</span>
          <h3>${formatDate(day.date)} · ${escapeHtml(day.title)}</h3>
        </div>
        <time class="departure-time">${escapeHtml(departureTime(day.departure))}</time>
      </div>
      <p><strong>Info:</strong> ${escapeHtml(day.note)}</p>
      ${linkButtons(day.links)}
    </article>
  `;
}

function foodCard(item) {
  const statusLabel = Number(item.rating) > 0 ? item.status : "offen";
  const imageMarkup = item.image
    ? `<figure class="food-card__image">${imageTag(item.image, item.fallbackImage, item.name)}${item.imageCredit ? `<figcaption>${escapeHtml(item.imageCredit)}</figcaption>` : ""}</figure>`
    : "";

  return `
    <article class="food-card">
      ${imageMarkup}
      <div class="food-card__body">
        <div class="food-card__top">
          <span class="food-category">${escapeHtml(item.category)}</span>
          <span class="food-status">${escapeHtml(statusLabel)}</span>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="food-rating" aria-label="Bewertung ${escapeHtml(item.rating)} von 5">${stars(item.rating)}</p>
        <p>${escapeHtml(item.description)}</p>
        ${item.note ? `<p class="food-note"><strong>Notiz:</strong> ${escapeHtml(item.note)}</p>` : ""}
      </div>
    </article>
  `;
}

function renderToday() {
  const today = getTodayEntry();
  byId("today-card").innerHTML = `
    <p class="eyebrow">${formatDate(today.date)} · ${escapeHtml(today.label)}</p>
    <h3>${escapeHtml(today.title)}</h3>
    <p><strong>Abfahrt:</strong> ${escapeHtml(departureTime(today.departure))}</p>
    <p><strong>Wichtig:</strong> ${escapeHtml(today.note)}</p>
    ${linkButtons(today.links)}
  `;
}

function renderDestinations() {
  byId("destination-list").innerHTML = destinationCards.map(destinationCard).join("");
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
    <article><span>Probiert</span><strong>${rated.length}/${foodItems.length}</strong></article>
    <article><span>Durchschnitt</span><strong>${rated.length ? average.toFixed(1).replace(".", ",") : "–"}</strong></article>
    <article><span>Favoriten</span><strong>${favorites}</strong></article>
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
    <article class="card link-group-card">
      <div>
        <p class="eyebrow">${links.length} Links</p>
        <h3>${escapeHtml(category)}</h3>
      </div>
      <div class="link-list">${links.map(link => mapLink(link)).join("")}</div>
    </article>
  `).join("");
}

function renderBuildInfo() {
  const target = byId("build-id");
  if (target) target.textContent = APP_BUILD_ID;
}

function showUpdateBanner(newBuild) {
  const banner = document.createElement("div");
  banner.className = "update-banner";
  banner.innerHTML = `<span>Neue Version verfügbar: ${escapeHtml(newBuild)}</span><button type="button">Aktualisieren</button>`;
  banner.querySelector("button").addEventListener("click", () => {
    window.location.replace(`${window.location.pathname}?build=${encodeURIComponent(newBuild)}&t=${Date.now()}${window.location.hash}`);
  });
  document.body.appendChild(banner);
}

async function checkBuildVersion() {
  try {
    const response = await fetch(`version.json?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    const version = await response.json();
    if (!version.build || version.build === APP_BUILD_ID) return;

    const reloadKey = `juli-kompass-reloaded-${version.build}`;
    if (!sessionStorage.getItem(reloadKey)) {
      sessionStorage.setItem(reloadKey, "1");
      window.location.replace(`${window.location.pathname}?build=${encodeURIComponent(version.build)}&t=${Date.now()}${window.location.hash}`);
      return;
    }

    showUpdateBanner(version.build);
  } catch (error) {
    console.info("Versionsprüfung übersprungen", error);
  }
}

renderBuildInfo();
renderToday();
renderDestinations();
renderFood();
renderProgram();
renderLinks();
setupImageFallbacks();
checkBuildVersion();
