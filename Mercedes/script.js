const carImages = [
  "img/Rojo_Jacinto_Metalizado.png",
  "img/1.jpg",
  "img/2022-E-COUPE-clr-2.webp"
];

const carVideos = [
  "https://www.youtube.com/embed/9fqU2UaEzdg",
  "https://www.youtube.com/embed/stYEuB3Ls-U",
  "https://www.youtube.com/embed/sNBqSGYFLGo"
];

let currentCarIndex = 0;

function changeCar(index) {
  const img = document.getElementById("car-img");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = carImages[index];
    img.style.opacity = 1;
  }, 200);
  currentCarIndex = index;
}

function openVideo() {
  const videoModal = document.getElementById("video-modal");
  const videoFrame = document.getElementById("video-frame");

  videoFrame.src = carVideos[currentCarIndex];
  videoModal.style.display = "block";
}

function closeVideo() {
  const videoModal = document.getElementById("video-modal");
  const videoFrame = document.getElementById("video-frame");

  videoModal.style.display = "none";
  videoFrame.src = ""; // esto pausa el video
}