function on() {
    document.getElementById("bulb").style.backgroundColor = "yellow";
}

function off() {
    document.getElementById("bulb").style.backgroundColor = "white";
}

function onred() {
    document.getElementById("bulb").style.backgroundColor = "red";
}

function ongreen() {
    document.getElementById("bulb").style.backgroundColor = "green";
}

function onblue() {
    document.getElementById("bulb").style.backgroundColor = "blue";
}

const userColor = document.getElementById("color");

userColor.addEventListener("change", () => changeBulbColor(userColor.value));


function changeBulbColor(color) {
    document.getElementById("bulb").style.backgroundColor = color;
}

function SB_Control() {
    const btn = document.getElementById("SB_btn");
    if (btn.innerText === "on") {
        document.getElementById("SB_btn").innerText = "Off";
        document.getElementById("smartBulb").classList.add("on");

    }else {
        document.getElementById("SB_btn").innerText = "On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function SB_Control2() {
    
}

