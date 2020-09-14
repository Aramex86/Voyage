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
