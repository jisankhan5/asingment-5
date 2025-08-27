// heart button  section
const heartBtns = document.getElementsByClassName("heart-btn");
for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const redHeart = document.getElementById("red-heart").innerText;
    const currentRedHeart = Number(redHeart) + 1;
    document.getElementById("red-heart").innerText = currentRedHeart;
  });
}

// call button section
const subTitle1 = document
  .getElementById("call-btn1")
  .addEventListener("click", function () {
    alert('Calling National Emergency 999....')
  });
const subTitle2 = document
  .getElementById("call-btn2")
  .addEventListener("click", function () {
    alert('Calling Police 999....')
  });
const subTitle3 = document
  .getElementById("call-btn3")
  .addEventListener("click", function () {
    alert('Calling Fire Service 999....')
  });
const subTitle4 = document
  .getElementById("call-btn4")
  .addEventListener("click", function () {
    alert('Calling Ambulance 1994-999999....')
  });
const subTitle5 = document
  .getElementById("call-btn5")
  .addEventListener("click", function () {
    alert('Calling Woman & Child Helpline 109....')
  });
const subTitle6 = document
  .getElementById("call-btn6")
  .addEventListener("click", function () {
    alert('Calling Anti-Corruption 106....')
  });
const subTitle7 = document
  .getElementById("call-btn7")
  .addEventListener("click", function () {
    alert('Calling Electricity Outage 16216....')
  });
const subTitle8 = document
  .getElementById("call-btn8")
  .addEventListener("click", function () {
    alert('Calling Brac 16445....')
  });
const subTitle9 = document
  .getElementById("call-btn9")
  .addEventListener("click", function () {
    alert('Calling Bangladesh Railway 163....')
  });

const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {});
}
