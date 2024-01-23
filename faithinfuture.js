// document.addEventListener("DOMContentLoaded", function () {
//     var header = document.getElementById("main-header");
//     var dashboard = document.getElementById("achievements");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY >= 425) {
//             header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
           
         
//         } else {
//             header.style.backgroundColor = "transparent";
          
//         }
//     });

//     function updateLayout() {
//              if (window.innerWidth <= 2000) {
//                 dashboard.style.display="column"
//              }else{
//                 dashboard.style.display = "flex";
//              }
//             }
    
// });

document.addEventListener("DOMContentLoaded", function () {
    var mainHeader = document.getElementById("main-header");
    var achievements = document.getElementById("achievements"); //abouttrandingmain
    var abouttrading = document.getElementById("abouttrandingmain");
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 425) {
            mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            mainHeader.style.backgroundColor = "transparent";
        }
    });

    function updateLayout() {
        if (window.innerWidth <= 900) {
            achievements.style.display = "block";
            abouttrading.style.display=""; // Assuming you want to set it to "block"
        } else {
            achievements.style.display = "flex";
            abouttrading.style.display="";
        }
    }

    // Call the updateLayout function initially
    updateLayout();

    // Attach the updateLayout function to the window resize event
    window.addEventListener("resize", updateLayout);
    
});
