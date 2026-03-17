document.getElementById("title").onclick = function () {
    if (document.getElementById("title").textContent === "DOM Event Demo") {
        document.getElementById("title").innerHTML = "Nội dung đã thay đổi";
    }
    else {
        document.getElementById("title").innerHTML = "DOM Event Demo";
    }
};

function hoverChangeColor() {
    document.getElementById("onmouseover").style.color = "red";
}

document.getElementById("nameInput").onkeyup = function () {
    document.getElementById("result").innerHTML = "Chào mừng "
        + document.getElementById("nameInput").value;
}

document.getElementById("color").onchange = function () {

    document.getElementById("result").style.backgroundColor
        = document.getElementById("color").value;
}

// document.getElementById("nameInput").addEventListener("keyup", function () {
//     document.getElementById("result").innerHTML = "Chào mừng "
//         + document.getElementById("nameInput").value;
// });
