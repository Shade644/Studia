const hamburger = document.getElementById('hamburger');
const menuUL = document.getElementById('ul');
const startPlay = document.querySelector('#start-play');
const startPlayIcon = document.querySelector('#start-play-icon');
const video = document.querySelector('#video');


hamburger.addEventListener('click',() => {
    menuUL.classList.toggle('show');
});


startPlay.addEventListener(`click`, () => {
    const icon = startPlay.querySelector('.fas')
    icon.classList.toggle('fa-play-circle')
    icon.classList.toggle('fa-pause-circle');
    if (video.playing) {
        video.play()
    }
})

let modal = document.getElementById("myModal");


let img1 = document.getElementById("myImg1");
let img2 = document.getElementById("myImg2");
let img3 = document.getElementById("myImg3");
let img4 = document.getElementById("myImg4");
let img5 = document.getElementById("myImg5");
let img6 = document.getElementById("myImg6");
let img7 = document.getElementById("myImg7");
let img8 = document.getElementById("myImg8");

let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/1.png"
  captionText.innerHTML = "Kot figurka";
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/2.png"
  captionText.innerHTML = "Lis polarny ";
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/3.png"
  captionText.innerHTML = "Lis";
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/4.png"
  captionText.innerHTML = "Jeż";
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/5.png"
  captionText.innerHTML = "Wiewiórka";
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/6.png"
  captionText.innerHTML = "Wróbel";
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/7.png"
  captionText.innerHTML = "Zając";
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./img/8.png"
  captionText.innerHTML = "Pomarańcza";
}



let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}