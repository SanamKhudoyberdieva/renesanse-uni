$(".re-partners-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow slick-white-arrow" aria-label="Previous" type="button"><img src="./img/ic_slick_left.svg"/></button>',
  nextArrow:
    '<button class="slick-next slick-arrow slick-white-arrow" aria-label="Next" type="button"><img src="./img/ic_slick_right.svg"/></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

let t = $("#back-top");
$(window).on("scroll", function () {
  ($scrollTop = $(window).scrollTop()),
    (t = $("#back-top")),
    $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");
});
($htmlBody = $("html, body")),
  t.length &&
    t.on("click", function (t) {
      $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
    });