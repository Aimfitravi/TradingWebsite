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

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
  // Using JavaScript to include another HTML page


document.addEventListener("DOMContentLoaded", function () {
    var mainHeader = document.getElementById("main-header");
  //  const barMenu = document.querySelector("navbar-menu");
    var achievements = document.getElementById("achievements"); //abouttrandingmain
    var abouttrading = document.getElementById("abouttrandingmain");
    var classesimages=document.getElementById("classimages");
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 425) {
            mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
           // barMenu.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            mainHeader.style.backgroundColor = "transparent";
           // barMenu.style.backgroundColor = "transparent";

        }
    });

    function updateLayout() {
        if (window.innerWidth <= 900) {
            achievements.style.display = "block";
            classesimages.style.display="block";
         //abouttrading.style.display="block"; // Assuming you want to set it to "block"
        } else {
            achievements.style.display = "flex";
            classesimages.style.display="flex";
            //abouttrading.style.display="flex";
        }
    }

    // Call the updateLayout function initially
    updateLayout();

    // Attach the updateLayout function to the window resize event
    window.addEventListener("resize", updateLayout);
    
});
