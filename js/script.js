
jQuery(document).ready(function (){
  //hiden
  $(".open_hidden").click(function(){
    if($(".hidden").hasClass("active")){
      $(".hidden").removeClass("active");
      $(".open_hidden").removeClass("active");
      $(".show_more").text("ПОКАЗАТЬ ЕЩЕ");
    }
    else{
      $(".hidden").addClass("active");
      $(".open_hidden").addClass("active");
      $(".show_more").text("Скрыть");
    }
  });
  //yakor
  $('.yakor').click(function(e){
    var height = 70;
    var el = $(this).attr('href')        
    $('body,html').animate({scrollTop: $(el).offset().top + height}, 1000)
    e.preventDefault()
  });
  //mPageScroll2id
  (function($){
        $(window).load(function(){
            $(".yakor").mPageScroll2id();
        });
    })(jQuery);
  //menu
  $(".burger").click(function(){
    if($(".menu").hasClass("active")){
      $(".menu").removeClass("active");
      $(".burger").removeClass("active");
    }
    else{
      $(".menu").addClass("active");
      $(".burger").addClass("active");
    }
  });
  // name_form
  $(".form_name").click(function(){
    var text = $(this).attr("data-text");
    $(".form_modal input[name='form_name']").val(text);
  });
  //fixed menu
  var $menu = $(".menu_wrap");
  $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
          $menu.fadeOut('fast',function(){
              $(this).removeClass("default")
                     .addClass("fixed transbg")
                     .fadeIn('fast');
          });
      } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
          $menu.fadeOut('fast',function(){
              $(this).removeClass("fixed transbg")
                     .addClass("default")
                     .fadeIn('fast');
          });
      }
  });
  // Маска номера
  $(function($){
      $.mask.definitions['~']='[+-]';
      $('input[name=tel]').mask("+7(999) 999-9999");
  });
  // Модальное окно
  $(document).ready(function() { 
      var overlay = $('#overlay');
      var open_modal = $('.open_modal');
      var close = $('.modal_close, #overlay'); 
      var modal = $('.modal_div');

       open_modal.click( function(event){
           event.preventDefault(); 
           var div = $(this).attr('href'); 
           overlay.fadeIn(400,
               function(){ 
                   $(div)
                       .css('display', 'block')
                       .animate({opacity: 1, top: '50%'}, 200);
           });
       });
       close.click( function(){
              modal 
               .animate({opacity: 0, top: '45%'}, 200,
                   function(){
                       $(this).css('display', 'none');
                       overlay.fadeOut(400);
                   }
               );
       });
  });
//form send
  $("form").each(function(){
   var it = $(this);
   it.validate({
    rules: {
     name: { required: true },
     textareaa: { required: true },
     tm: { required: true },
     tel: { required: true }
    },
    messages: {
    },
    errorPlacement: function(error, element) {
    },
    submitHandler: function(form) {
     var thisForm =$(form);
     $.ajax({
      type: "POST",
      url: "mail.php",
      data: thisForm.serialize()
     }).done(function() {
      $(this).find("input").val("");
      setTimeout(function() {
        $(".modal_div, #overlay").css('display', 'none');
      },3500);
      $("button").addClass("active");
      var textButton = "Заявка отправлена";
      $("button").text(textButton);
      setTimeout(function() {
        $("button").removeClass("active");
        $("button").text("Отправить заявку");
      },2500);
      $("form").trigger("reset");
     });
     return false;
    },
    success: function() {
    },
    highlight: function(element, errorClass) {
     $(element).addClass('error');
    },
    unhighlight: function(element, errorClass, validClass) {
     $(element).removeClass('error');
    }
   })
  });  
  //open foto
  $(".zoom").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200,
            'overlayShow': false,
            'padding': 0,
            'helpers': {
                overlay: {
                    locked: false
                }
            }
        });
});
