$(function(){
    $('.slider-container').bxSlider({
        pager:false,
        moveSlides:1,
        minSlides:1,
        touchEnabled:false,
        controls:true,
        slideMargin:0
    });
    
    $(".bx-wrapper").css({
        "border":"none",
        "box-shadow":'none',
        'margin':0
    });

  });




  const formBtn = document.querySelector('.searchBtn').addEventListener('click',(e)=>{
      e.preventDefault();
  });
  

  const input = document.getElementById('datepicker');
  const datepiker = new TheDatepicker.Datepicker(input);
  datepiker.render();
