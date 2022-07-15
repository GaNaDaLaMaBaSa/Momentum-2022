const images = [
    "배경화면_로봇_2.jpg", "배경화면_로봇.jpg", "배경화면_몽환 배.jpg", "배경화면_물결.jpg", "배경화면_스펙트럼.jpg", "배경화면_종이로봇.jpg", "배경화면_차집그림.jpg", "배경화면_커피와 바다.jpg", "배경화면_Locker.jpg"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;
document.body.appendChild(bgImage);
