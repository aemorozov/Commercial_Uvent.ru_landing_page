const textBlock = document.querySelector(".text-on-video-div");
const text = document.querySelector(".text-on-video-p");
const playButton = document.querySelector(".play-button");
const video = document.querySelector(".video");

let play = false;

textBlock.addEventListener("click", () => {
  if (play) {
    play = false;
    // video.pause();
    text.style.opacity = "0.99";
    playButton.style.opacity = "0.5";
  } else {
    play = true;
    // video.play();
    text.style.opacity = "0";
    playButton.style.opacity = "0";
  }
});
