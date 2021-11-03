const overlayVideo = document.getElementById('overlayVideo');
    const videoElement = document.getElementById('full_video');
    const videoSec = document.querySelector("#videoHolder");
    
    videoSec.addEventListener("mouseover", function() {
        overlayVideo.classList.add("trasform-rotate");
        overlayVideo.classList.remove("trasform-unrotate");
      })
      videoSec.addEventListener("mouseout", function() {
        overlayVideo.classList.remove("trasform-rotate");
        overlayVideo.classList.add("trasform-unrotate");
      })
    
    if(overlayVideo.addEventListener){
        overlayVideo.addEventListener("click", play, false)
      }else if(overlayVideo.attachEvent){
        overlayVideo.attachEvent("onclick", play)
      }
    
    function play() { 
        if (videoElement.paused){
            videoElement.play(); 
            overlayVideo.className = "playing";
        }else {
            videoElement.pause(); 
            overlayVideo.className = "";
        }
    }

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    infinite: false
  });
});

$(document).ready(function(){
  $('.editor__slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    infinite: false
  });
});