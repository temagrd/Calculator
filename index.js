buttonPlus.onclick = function () {
    document.getElementById("3").innerText = "+";
}
buttonMinus.onclick = function () {
    document.getElementById("3").innerText = "-";
}
buttonMult.onclick = function () {
    document.getElementById("3").innerText = "*";
}
buttonDivide.onclick = function () {
    document.getElementById("3").innerText = ":";
}
buttonSquare.onclick = function () {
    document.getElementById("3").innerText = "x^y";
}
buttonRadical.onclick = function () {
    document.getElementById("3").innerText = "/x";
}
buttonPercent.onclick = function () {
    document.getElementById("3").innerText = "%";
}


button1.onclick = function () {
    let a = +document.getElementById("1").value;
    let b = +document.getElementById("2").value;
    switch (document.getElementById("3").innerText) {
        case "+":
            document.getElementById("result").value = a + b;
            break;
        case "-":
            document.getElementById("result").value = a - b;
            break;
        case "*":
            document.getElementById("result").value = a * b;
            break;
        case ":":
            document.getElementById("result").value = a / b;
            break;
        case "x^y":
            document.getElementById("result").value = a ** b;
            break;
        case "/x":
            document.getElementById("result").value = a ** (1 / b);
            break;
        case "%":
            document.getElementById("result").value = a / b * 100;
            break;


    }
}
