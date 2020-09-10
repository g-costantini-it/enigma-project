Turbolinks.start();
// navigation starts here
$("#toggle").click(function () {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function () {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});

$(".close-btn").click(function () {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});
/*
$(document).on('turbolinks:load', function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});*/

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/* REVEEAL SERVICES IMAGES */
$(function () {
  var elements = $(".text, .img").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 400) {
        $(item).addClass("reveal");
      }
    });
  });
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 400) {
      $(item).addClass("reveal");
    }
  });
});

$(document).on('turbolinks:load', function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});

$(document).on('turbolinks:load', function () { //when document is ready
  $("#clients-slider").owlCarousel({ //owlCarousel settings
    items: 2, //by default there are 2 slides display.
    autoplay: true, //the slides will change automatically.
    smartSpeed: 1700, //speed of changing wil be 700
    loop: true, //infinite loop; after the last slide, first slide starts
    autoplayHoverPause: true, //when you put mouse over Carousel, slide changing will stop
    responsive: { //responsiveness as screen size changes
      // min-width: 0px
      0: {
        items: 1 //on devices with width 0 to 768px show 1 slide
      },
      // min-width: 768px
      768: {
        items: 2 //on devices with width 768px and above show show 2 slides
      },
    }
  });
});

$(document).on('turbolinks:load', function () {

  $(".center").slick({

    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }

    }, {

      breakpoint: 300,
      settings: "unslick" //destroy slick

    }]

  });

});