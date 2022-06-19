$(function () {
  $('.pod__item-link').on('click', function (e) {
    e.preventDefault()
    $('.pod__item').removeClass('pod__item--active')
    $(this).closest('.pod__item').addClass('pod__item--active')
  });
  $('.blog__link').on('click', function (e) {
    e.preventDefault()
    $('.blog__link').removeClass('blog__link--active')
    $(this).addClass('blog__link--active')
  });

  $('.blog__pag-link').on('click', function (e) {
    e.preventDefault()
    $('.blog__pag-item').removeClass('blog__pag-item--active')
    $(this).closest('.blog__pag-item').addClass('blog__pag-item--active')
  });

  $('.company__list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.company__dots'),
  });

  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.overley').toggleClass('overley--open')
    $('.burger').toggleClass('burger--close')
    $('.header__nav').toggleClass('header__nav--open')
  });
  $('.header__list a').on('click', function (e) {
    e.preventDefault()
    $('.overley').removeClass('overley--open')
    $('.burger').removeClass('burger--close')
    $('.header__nav').removeClass('header__nav--open')
  });


  $(".header__list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });
});