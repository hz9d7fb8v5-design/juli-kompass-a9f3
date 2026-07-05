const researchedLinkImages = {
  "hoehle-1": "https://img0.oastatic.com/img2/75402636/600x300r/variant.jpg",
  "hoehle-2": "https://www.palmaweekly.com/wp-content/uploads/2025/10/Coves-de-Campanet-2-1000x0-c-default.webp"
};

mapLinks.forEach(link => {
  const researchedImage = researchedLinkImages[link.id];
  if (!researchedImage) return;
  link.fallbackImage = link.image || link.fallbackImage || "";
  link.image = researchedImage;
});
