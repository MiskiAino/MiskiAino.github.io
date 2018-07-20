$('.top_slider').slick({
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    centerPadding: '50px',
    autoplay: false,
    infinite: true,
});

$(function(){
  $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
  $('.tab-panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-nav a').click(function(){                         // При клике на вкладку
    $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})
