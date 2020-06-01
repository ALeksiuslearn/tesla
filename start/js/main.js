$(function () {
  // обращаемся к нашему слайдеру все можно найти в документации https://kenwheeler.github.io/slick/
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
  });
  // прописываем, что бы кнопочка меню у нас работала
  // после след 2х строк мы можем кликнуть на нше меню и в инспекторе добавится класс актив
  $(".header-btn").on("click", function () {
    $(".menu").addClass("active");
  });

  // теперь пишем для закрытия меню
  $(".close-btn").on("click", function () {
    $(".menu").removeClass("active");
  });
});
