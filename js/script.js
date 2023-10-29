function randNum(i) {
  return Math.trunc(Math.random() * i);
}
let rotateRight = document.getElementById("right");
let rotateLeft = document.getElementById("left");
let captchaImage = document.getElementById("captcha");
let pointer = document.getElementById("pointer");
let submit = document.getElementById("submit");
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", captchaRefresh);
submit.addEventListener("click", captchaCheck);
let rotate;
let position;
let realPos;
rotateRight.addEventListener("click", () => {
  if (position % 5 == 0 && position != 0) {
    position = 0;
  } else {
    position += 1;
  }
  changePos();
});
rotateLeft.addEventListener("click", () => {
  if (position == 0) {
    position = 5;
  } else {
    position -= 1;
  }
  changePos();
});
function captchaRefresh() {
  captchaImage.src = `./media/${randNum(2)}.jpg`;
  position = randNum(6);
  realPos = randNum(6);
  rotate = realPos * 60;
  changePos();
}
function changePos() {
  pointer.style.transform = `rotate(-${rotate}deg)`;
  captchaImage.style.transform = `translateX(-${position * 200}px)`;
}
captchaRefresh();
function captchaCheck() {
  if (realPos == Math.abs(position % 6)) {
    alert("welcome");
    captchaRefresh();
  } else {
    alert("you were recognised as a robot please try again");
    captchaRefresh();
  }
}
