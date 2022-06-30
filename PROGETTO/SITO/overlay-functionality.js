const images = document.getElementsByClassName("gallery-image");
const overlayImage = document.getElementById("overlay-image");
const overlay = document.getElementById("overlay");
const overlayItem = document.getElementById("overlay-item");
Array.from(images).forEach((image) => {
  image.addEventListener("click", (e) => {
    overlay.style.display = "block";
    const imageSrc = e.target.src;
    overlayImage.src = imageSrc;
  });
});

document.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
