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

//   call button  section
const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const balance = parseInt(document.getElementById("coin-btn").innerText);
    const availabelBalance = balance - Number(20);

    if (balance < 20) {
      alert(
        `❌You don't have enough coins!It takes at least 20 coins to make a call.`
      );
    } else {
      const parant =
        callBtn.parentNode.parentNode.children[1].children[0].children[1]
          .innerText;
      const number =
        callBtn.parentNode.parentNode.children[1].children[1].children[0]
          .innerText;
      alert(`📞Calling ${parant} ${number}....`);
      document.getElementById("coin-btn").innerText = availabelBalance;
    }
    const parant =
      callBtn.parentNode.parentNode.children[1].children[0].children[0]
        .innerText;
    const number =
      callBtn.parentNode.parentNode.children[1].children[1].children[0]
        .innerText;
     const now = new Date();
      const time = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka" });
    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div class="bg-gray-100 rounded-lg w-[352px] py-4 pl-4 mx-6
      mb-3 flex justify-between items-center">
       <div>
        <h1 class="font-semibold text-[18px] ">${parant}</h1>
        <p class="text-gray-500 ">${number}</p>
       </div>
        <div>
        <p class="mr-3">${time}</p>
        </div>
      </div>
    `;
    const history = document.getElementById("history");

    history.append(newCart);
  });
}

// copy button

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});
