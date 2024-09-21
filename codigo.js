window.onscroll = function() {
    const header = document.getElementById("header");
    if (window.pageYOffset > 0) {
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        header.style.position = "relative";
    }
}