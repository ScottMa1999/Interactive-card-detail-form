
// Pages 
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");

// Buttons
const confirm = document.getElementById("confirm-button");
const continueButton = document.getElementById("continue-button");

confirm.addEventListener("click", () => {
    container1.classList.add("hidden");
    container2.classList.remove("hidden");
})

continueButton.addEventListener ("click", () => {
  container1.classList.remove("hidden");
  container2.classList.add("hidden");
})



// sync functions with card
function getCardHolderName() {

  // change the name on the card
  var cardHolderName = document.getElementById("holderName").value;
  document.getElementById("name").innerHTML = cardHolderName;

  // if no name being input, the display the placeholder name on the card
  if (cardHolderName == "") {
    var attrPlaceHolder = document.getElementById("holderName").getAttribute("placeholder");
    document.getElementById("name").innerHTML = attrPlaceHolder;
  }
}

function getCardNumber() {

  // change the card number on the card
  var cardNumber = document.getElementById("CardNumber").value;
  document.getElementById("number").innerHTML = cardNumber;

  // if no number being input, diaplay all 0s on the card 
  if (cardNumber == "") {
    document.getElementById("number").innerHTML = "0000 0000 0000 0000";
  }
}

function getExpM() {
  var ExpM = document.getElementById("EM").value;
  document.getElementById("EMY").innerHTML = ExpM;
  if (ExpM == "") {
    document.getElementById("EMY").innerHTML = "MM/YY";
  }
  return ExpM;
}

var ExpirationM = getExpM();

function getExpY() {
  var ExpirationM = getExpM();
  var ExpY = document.getElementById("EY").value;
  document.getElementById("EMY").innerHTML = ExpirationM + "/" + ExpY;

  if (ExpirationM == "") {
    document.getElementById("EMY").innerHTML = "MM/YY";
  }
}

function getCVC() {
  var CVC = document.getElementById("CVC").value;
  document.getElementById("cvc").innerHTML = CVC;

  if (CVC == "") {
    document.getElementById("cvc").innerHTML = "000";
  }
}


