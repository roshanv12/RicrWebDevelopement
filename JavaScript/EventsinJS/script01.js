const bgc = document.getElementById("bg-color");
bgc.addEventListener("change", () => changeBg(bgc.value));

function changeBg(c) {
  document.getElementById("bg").style.backgroundColor = c;
}

const ak = document.getElementById("H-color");
ak.addEventListener("change", () => changeHeading(ak.value));

function changeHeading(text) {
  document.getElementById("heading").style.color = text;
}

const bp = document.getElementById("P-color");
bp.addEventListener("change" , () => changetext(bp.value));

function changetext(kuchhbhi) {
  document.getElementById("text").style.color = kuchhbhi;
}