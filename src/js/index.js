$(function () {

    //Slider
  $(".slider-container").bxSlider({
    pager: false,
    moveSlides: 1,
    minSlides: 1,
    maxSlides: 1,
    touchEnabled: true,
    controls: true,
    slideMargin: 0,
    responsive: true,
  });

  $(".bx-wrapper").css({
    border: "none",
    "box-shadow": "none",
    margin: 0,
  });

  $(document).on("click", ".burger-menu", function () {
    $(".nav").slideToggle();
    $(".nav").css("display", "flex");
  });

  //if()
//   $(document).on("click", ".footer-heading:eq(0)", function () {
//     $(".newsleter").slideToggle();
    
//   });
//   $(document).on("click", ".footer-heading:eq(1)", function () {
//     $(".latestnews").slideToggle();
    
//   });
//   $(document).on("click", ".footer-heading:eq(2)", function () {
//     $(".tags").slideToggle();
    
//   });
//   $(document).on("click", ".footer-heading:eq(3)", function () {
//     $(".address").slideToggle();
    
//   });
});

const formBtn = document
  .querySelector(".searchBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });

//datepiker
const input = document.getElementById("datepicker");
const datepiker = new TheDatepicker.Datepicker(input);
datepiker.render();
