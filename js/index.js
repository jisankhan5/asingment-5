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

