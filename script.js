var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.transition = "0.01s ease-out";
    } else {
        document.getElementById("nav").style.top = "-114px";
        document.getElementById("nav").style.transition = "0.2s ease-in";

    }
    prevScrollpos = currentScrollPos;
};


function Down() {
    document.getElementById("sub-content-drop").style.display = "flex";
    document.getElementById("down").style.visibility = "hidden";
};
function Up() {
    document.getElementById("sub-content-drop").style.display = "none";
    document.getElementById("down").style.visibility = "visible";
};


