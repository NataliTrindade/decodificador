let textToEncrypt = document.querySelector("#text-to-encrypt"); 
let decryptBtn = document.querySelector("#decrypt-btn"); 
let noMessage = document.querySelector("#no-message"); 
let showContainer = document.querySelector("#show-container"); 
let copyBtn = document.querySelector("#copy-btn"); 
let encryptedMessageResult = document.querySelector(
  "#encrypted-message-result"); 
let resetButton = document.querySelector("#reset-btn"); 

textToEncrypt.addEventListener("click", encrypt);
textToEncrypt.addEventListener("click", hideContainerAndShowContainer);
textToEncrypt.addEventListener("click", moveTheText);
textToEncrypt.addEventListener("click", disableArea);
copyBtn.addEventListener("click", copyEncryptedText);
decryptBtn.addEventListener("click", decrypt);
resetButton.addEventListener("click", reset);

function encrypt() {
  let getText = document.querySelector("#get-text").value;
  let replace = "";

  for (let i = 0; i < getText.length; i++) {
    let letter = getText[i];
    if (letter === "a") {
      replace += "ai";
    } else if (letter === "e") {
      replace += "enter";
    } else if (letter === "i") {
      replace += "imes";
    } else if (letter === "o") {
      replace += "ober";
    } else if (letter === "u") {
      replace += "ufat";
    } else {
      replace += letter;
    }
  }
  replace;

  encryptedMessageResult.value = replace;

  textToEncrypt.disabled = true;
  getText.disabled = true;
}

function hideContainerAndShowContainer() {
  noMessage.style.display = "none";
  showContainer.style.display = "block";
}

function moveTheText() {
  let encryptedMessage = getText.value;
  encryptedMessageResult.value = encryptedMessage;
  getText.value = "";
}

function disableArea() {
  let getText = document.querySelector("#get-text");
  getText = getText.setAttribute("readonly", true);
}

function copyEncryptedText() {
  navigator.clipboard.writeText(encryptedMessageResult.value).then(() => {
    copyBtn.innerHTML = "SEGREDO COPIADO! &#x1F92B;";
  });
}

function decrypt() {
  let encryptedMessageResult = document.querySelector(
    "#encrypted-message-result"
  );
  let getText = document.querySelector("#get-text").value;
  let replace = "";

  for (let i = 0; i < encryptedMessageResult.length; i++) {
    let letter = encryptedMessageResult[i];
    if (letter === "ai") {
      replace += "a";
    } else if (letter === "enter") {
      replace += "e";
    } else if (letter === "imes") {
      replace += "i";
    } else if (letter === "ober") {
      replace += "o";
    } else if (letter === "ufat") {
      replace += "u";
    } else {
      replace += letter;
    }
  }
  replace;

  encryptedMessageResult.value = replace;

  encryptedMessageResult.value = getText;
}

function reset() {
  window.location.href = "./index.html";
}
