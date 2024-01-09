document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("main-header");
    var dashboard = document.getElementById("achievements");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 425) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
         
        } else {
            header.style.backgroundColor = "transparent";
            header.style.display = "flex";
        }
    });
    
});
