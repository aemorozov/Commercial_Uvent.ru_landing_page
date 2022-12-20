const textBlock = document.querySelector(".text-on-video-div1");
const text: HTMLElement | null = document.querySelector(".text-on-video-p");
const playButton: HTMLElement | null = document.querySelector(".play-button");
const video: HTMLMediaElement | null = document.querySelector(".video");

let play = false;

if (textBlock && text && playButton && video) {
    textBlock.addEventListener("click", () => {
        if (play) {
          play = false;
          video.pause();
          text.style.opacity = "0.99";
          playButton.style.opacity = "0.5";
        } else {
          play = true;
          video.play();
          text.style.opacity = "0";
          playButton.style.opacity = "0";
        }
      });
} else {
    throw Error('Can`t fined elements with classes (.text-on-video-div || .text-on-video-p || .play-button || .video)')    
}