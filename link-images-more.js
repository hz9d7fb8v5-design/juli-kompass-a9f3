const moreLinkImages = {
  "restaurant-3": "https://www.yachtcharterfleet.com/img/mi/mbb/3209449/restaurant-illeta.jpg",
  "restaurant-5": "https://cdm0lfbn.cloudimg.io/v7/_images_base_/image_uploader/mallorca/photos_d3/original/el_sol_sunshine_bar_photo.jpg"
};

mapLinks.forEach(link => {
  const image = moreLinkImages[link.id];
  if (!image) return;
  link.fallbackImage = link.image || link.fallbackImage || "";
  link.image = image;
});
