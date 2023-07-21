const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg"];
const randomImg =images[Math.floor(Math.random() * images.length)]
const bgImg = document.createElement("img");

bgImg.src = randomImg;
bgImg.id = "bgImage";
document.body.appendChild(bgImg);