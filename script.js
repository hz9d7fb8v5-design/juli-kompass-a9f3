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

  return `<div class="link-row">${selected.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.title}</a>`).join("")}</div>`;
}

function dayCard(day) {
  return `
    <article class="card">
      <div class="day-header">
        <h3>${formatDate(day.date)} · ${day.title}</h3>
        <span class="badge">${day.label}</span>
      </div>
      <p><strong>Abfahrt:</strong> ${day.departure}</p>
      <p><strong>Notiz:</strong> ${day.note}</p>
      ${linkButtons(day.links)}
    </article>
  `;
}

function renderToday() {
  const today = getTodayEntry();
  byId("today-card").innerHTML = `
    <p class="eyebrow">${formatDate(today.date)} · ${today.label}</p>
    <h3>${today.title}</h3>
    <p><strong>Abfahrt:</strong> ${today.departure}</p>
    <p><strong>Wichtig:</strong> ${today.note}</p>
    ${linkButtons(today.links)}
  `;
}

function renderProgram() {
  byId("program-list").innerHTML = tripDays.map(dayCard).join("");
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
        ${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.title}</a>`).join("")}
      </div>
    </article>
  `).join("");
}

renderToday();
renderProgram();
renderLinks();
