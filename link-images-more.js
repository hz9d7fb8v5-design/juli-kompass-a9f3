const moreLinkImages = {
  "restaurant-3": "https://www.yachtcharterfleet.com/img/mi/mbb/3209449/restaurant-illeta.jpg"
};

mapLinks.forEach(link => {
  const image = moreLinkImages[link.id];
  if (!image) return;
  link.fallbackImage = link.image || link.fallbackImage || "";
  link.image = image;
});
