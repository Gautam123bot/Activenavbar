var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = doucment.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active";
    })
}