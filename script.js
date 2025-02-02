let currentImageIndex = 0;
const images = [
    "https://getwallpapers.com/wallpaper/full/7/7/c/257695.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.VSvioNnNuID7mfA6Y0IbeQHaE7&pid=Api&P=0&h=180",
    "https://wallup.net/wp-content/uploads/2019/10/336103-sky-clouds-scenery-sunset-beautiful-nature-landscape.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.E-ozCzhmN_a81qeR_avEwAHaE7&pid=Api&P=0&h=180"
];

function showImage(index) {
    document.getElementById("main-image").src = images[index];
    currentImageIndex = index;
    updateActiveThumbnail(index);
}

function moveSlide(step) {
    currentImageIndex += step;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    showImage(currentImageIndex);
}

function updateActiveThumbnail(index) {
    document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
    });
}
