let list = document.querySelector(".link-list");
document.querySelector(".icon").addEventListener("click", function () {
  list.classList.toggle("active-list");
});
window.addEventListener("scroll",()=>{
    let windowscroll=scrollY;
   if(windowscroll=1){
    list.classList.remove("active-list");
   };
   if(scrollY<300){
    BtnBack.style.opacity="0";
   }else{
    BtnBack.style.opacity="1";
   };
});
let BtnBack=document.querySelector(".BtnBack");
BtnBack.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
      });
});
(function() {
  "use strict";

  var carousels = function() {
      $(".owl-carousel1").owlCarousel({
          loop: true,
          center: true,
          margin: 0,
          responsiveClass: true,
          nav: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsive: {
              0: {
                  items: 1,
                  nav: true
              },
              680: {
                  items: 1,
                  nav: true,
                  loop: false
              },
              1000: {
                  items: 1,
                  nav: true
              }
          }
      });
  };

  (function($) {
      carousels();
  })(jQuery);
})();
