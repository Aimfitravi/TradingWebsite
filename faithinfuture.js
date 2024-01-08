document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 425) {
            header.style.display = "none";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.display = "flex";
        }
    });
    
});
