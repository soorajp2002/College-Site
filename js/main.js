
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: true,
  smartSpeed: 3000,
  autoplayTimeout: 7000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    800: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
})

$("a[href]").click(function (e) {
  if (this.hash != '' && $(this.hash).offset().top != 0) {
    e.preventDefault();
    var position = $(this.hash).offset().top - 70
    $('html, body').animate({
      scrollTop: position,
    }, 1000);
  }
});

scrollActive();
$(window).scroll(function (i) {
  scrollActive();

});
function scrollActive() {
  try {
    console.log($(window).scrollTop());
    var values = {};
    values.events = $('#events').offset().top - 100;
    values.eventsh = document.getElementById("events").scrollHeight;
    values.scholarship = $('#scholarship').offset().top - 100;
    values.scholarshiph = document.getElementById("scholarship").scrollHeight;
    values.department = $('#department').offset().top - 80;
    values.departmenth = document.getElementById("department").scrollHeight;
    values.contactus = $('#contactus').offset().top - 100;
    values.contactush = document.getElementById("contactus").scrollHeight;
    if ($(window).scrollTop() >= values.events && $(window).scrollTop() <= (values.events + values.eventsh)) {
      $("a[class*=active]").removeClass("active");
      $("a[href$=events]").addClass("active");
    } else if ($(window).scrollTop() >= values.scholarship && $(window).scrollTop() <= (values.scholarship + values.scholarshiph)) {
      $("a[class*=active]").removeClass("active");
      $("a[href$=scholarship]").addClass("active");
    } else if ($(window).scrollTop() >= values.contactus && $(window).scrollTop() <= (values.contactus + values.contactush)) {
      $("a[class*=active]").removeClass("active");
      $("a[href$=contactus]").addClass("active");
    }else if ($(window).scrollTop() >= values.department && $(window).scrollTop() <= (values.department + values.departmenth)) {
      $("a[class*=active]").removeClass("active");
      $("a[href$=department]").addClass("active");
    } else {
      $("a[class*=active]").removeClass("active");
      $("a[href='index.html']").addClass("active");
    }
  } catch (err) {

  }

}




window.onscroll = function () {
  fixedMenu();
}
window.onresize = function () {
  fixedMenu();
}

if (scrollY >= 50) {
  fixedMenu();
}
function fixedMenu() {

  if (scrollY >= 100) {
    $(".navbar").css("position", "fixed");

  } else {
    $(".navbar").css("position", "");

  }
}