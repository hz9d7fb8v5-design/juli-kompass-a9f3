const researchedLinkImages = {
  "hoehle-1": "https://img0.oastatic.com/img2/75402636/600x300r/variant.jpg",
  "hoehle-2": "https://www.palmaweekly.com/wp-content/uploads/2025/10/Coves-de-Campanet-2-1000x0-c-default.webp",
  "restaurant-argentinier": "https://cdn.res-menu.net/la-portena-parrilla-argentina/albums-1.jpg",
  "restaurant-2": "https://canjoandesaigo.com/wp-content/uploads/2025/04/La-Semana-Santa-en-Mallorca_-los-dulces-que-nunca-faltan-en-Can-Joan-de-SAigo-scaled.jpg"
};

mapLinks.forEach(link => {
  const researchedImage = researchedLinkImages[link.id];
  if (!researchedImage) return;
  link.fallbackImage = link.image || link.fallbackImage || "";
  link.image = researchedImage;
});
