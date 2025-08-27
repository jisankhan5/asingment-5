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
    console.log(availabelBalance);
    
    
    if(balance < 20){
        alert(`❌You don't have enough coins!It takes at least 20 coins to make a call.`)
    }
    else{
        const parant = callBtn.parentNode.parentNode.children[1].children[0].children[1].innerText
        const Number =callBtn.parentNode.parentNode.children[1].children[1].children[0].innerText
         alert(`📞Calling ${parant} ${Number}....`)
        document.getElementById("coin-btn").innerText = availabelBalance;
    }
  });
   
}

