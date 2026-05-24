
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
}, 3000);


let music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


setInterval(() => {
  console.log("Fresh Fruits ❤️ Happiness");
}, 5000);