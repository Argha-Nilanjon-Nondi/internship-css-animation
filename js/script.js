$(document).ready(function () {
  $(".menu-icon ").on("click ", function () {
    $("nav ul ").toggleClass("showing ");
  });
});

// Scrolling Effect

$(window).on("scroll ", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

function hover_me(obj) {
  alert("ready ");
  obj.style.transform = "scale(1.1) ";
  alert("ready ");
}
