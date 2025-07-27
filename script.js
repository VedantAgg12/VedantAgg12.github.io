fetch("imageList.json")
  .then(res => res.json())
  .then(imageFiles => {
    const gallery = document.getElementById("gallery");

    imageFiles.forEach(filename => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = `images/${filename}`;
      img.alt = filename;

      const title = document.createElement("div");
      title.className = "card-title";
      title.textContent = filename
        .replace(/\.(jpg|jpeg|png|webp)/i, "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());

      card.appendChild(img);
      card.appendChild(title);
      gallery.appendChild(card);
    });
  })
  .catch(err => {
    console.error("⚠️ Failed to load image list:", err);
  });
