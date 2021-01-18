let container = document.querySelector('.VideoPlayer--landscape');
let innerVideo = document.querySelector('.VideoPlayer--landscape video');
let fix = "width:100vw;position:absolute;top:0;left:0;z-index:10;background-color:rgba(0,0,0,0.9)";
container.style.cssText = innerVideo.style.cssText = fix;