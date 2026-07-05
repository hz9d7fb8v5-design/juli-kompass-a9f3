const moreLinkImages = {
  "restaurant-3": "https://www.mallorcaexperten.de/wp-content/uploads/2022/06/Camp-de-Mar-Illeta.jpg",
  "restaurant-4": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/2e/ae/caption.jpg?w=1100&h=600&s=1",
  "restaurant-5": "https://cdm0lfbn.cloudimg.io/v7/_images_base_/image_uploader/mallorca/photos_d3/original/el_sol_sunshine_bar_photo.jpg",
  "restaurant-6": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/65/28/ef/restaurante-playa-cala.jpg?w=700&h=400&s=1",
  "pinienstrand": "https://fincaservice-meier.de/wp-content/uploads/2019/10/Platja-D-Alcudia_Mallorca-Norden_13.jpg",
  "cala-murada": "https://www.mallorca-momente.com/wp-content/uploads/2018/10/Mallorca-Momente-Blog-Cala-Murada-Strand-Slider-124224.jpg",
  "strand-3": "https://lumaguide.sfo3.digitaloceanspaces.com/media/place_images/2025/06/11/google_place_ChIJR2fJjgaJlxIR9GPpp42Wipo_photo_3.jpg"
};

mapLinks.forEach(link => {
  const image = moreLinkImages[link.id];
  if (!image) return;
  link.fallbackImage = link.image || link.fallbackImage || "";
  link.image = image;
});
