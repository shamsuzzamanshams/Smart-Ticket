let selectedSeatCount = 0;
let availableSeatCount = 12;
let totalPrice;
let grandTotal;
totalPrice = parseFloat(totalPrice);
grandTotal = parseFloat(grandTotal);
function now(id, className) {
  console.log(id);
  const bgColor = document.getElementById(id);
  bgColor.style.backgroundColor = "#1DD100";
  selectedSeatCount++;
  availableSeatCount--;
  const disableBtn = document.getElementsByClassName(className);
  const btnId = document.getElementById(id);

  if (btnId) {
    btnId.disabled = true;
  }

  if (selectedSeatCount === 4) {
    for (let btn of disableBtn) {
      btn.disabled = true;
    }
  }

  const setSeatCount = document.getElementById("availableSeat");
  console.log(availableSeatCount);
  setSeatCount.innerText = availableSeatCount;

  document.getElementById("seatCount").innerText = selectedSeatCount;
  totalPrice = selectedSeatCount * 550;
  const getTotal = document.getElementById("totalAmount");
  getTotal.innerText = totalPrice;
}

function apply() {
  const get = document.getElementById("inputCoupon");
  console.log(get.value);
  if (get.value === "NEW15") {
    grandTotal = totalPrice - totalPrice * (15 / 100);
    console.log(typeof grandTotal);
    const grand = document.getElementById("grandTotal");
    grand.innerText = grandTotal;
    const join = document.getElementById("join");
    join.classList.add("hidden");
  } else if (get.value === "Couple 20") {
    grandTotal = totalPrice - totalPrice * (20 / 100);
    console.log(typeof grandTotal);
    const grand = document.getElementById("grandTotal");
    grand.innerText = grandTotal;
    const join = document.getElementById("join");
    join.classList.add("hidden");
  } else {
    const errorModal = document.getElementById("my_modal_6");
    errorModal.showModal();
  }
}

function addSeatList(idSeat) {
  var newListContainer = document.createElement("div");
  newListContainer.className = "flex justify-between mb-4 font-light";

  newListContainer.innerHTML = `
      <p>${idSeat}</p>
      <p>Economy</p>
      <p>550</p>
  `;

  document.querySelector(".seatDetail").appendChild(newListContainer);
}