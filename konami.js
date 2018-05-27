var step = 0

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38' && (step == 0 || step == 1)) {
        step++;
    } else if (e.keyCode == '40' && (step == 2 || step == 3)) {
        step++;
    } else if (e.keyCode == '37' && (step == 4 || step == 6)) {
        step++;
    } else if (e.keyCode == '39' && (step == 5 || step == 7)) {
        step++;
    } else if (e.keyCode == "65" && step == 9) {
        step++;
    } else if (e.keyCode == "66" && step == 8) {
        step++;
    } else {
        step = 0;
    }

    if (step == 10) {
        document.getElementById("status").innerHTML = "Enabled";
        step = 0;
    }
}
