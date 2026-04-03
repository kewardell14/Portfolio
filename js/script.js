
function initComparisons() {
    var x, i;
    x = document.getElementsByClassName("img-comp-container");
    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(cont) {
        var slider, clicked = 0, w, h;
        w = cont.offsetWidth;
        h = cont.offsetHeight;
        cont.style.width = (w / 2) + "px"; // Initially set the width to 50%

        // Create slider
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        cont.parentElement.insertBefore(slider, cont);
        slider.style.top = "0px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        // Add event listener to drag the slider
        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            if (clicked == 0) return false;
            pos = getCursorPos(e);
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            a = cont.getBoundingClientRect();
            x = e.pageX - a.left;
            return x;
        }

        function slide(x) {
            cont.style.width = x + "px";
            slider.style.left = cont.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

// Call initComparisons function when the window loads
window.onload = function () {
    initComparisons();
};