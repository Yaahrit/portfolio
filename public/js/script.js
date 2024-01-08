$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the copyright text with the current year
  document.querySelector(".copyright").innerHTML =
    "&copy; " +
    currentYear +
    ' <a href="#" class="copyright-link">Yash Raj</a>. All Rights Reserved';
});

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Frontend Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = " Backend Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = " Addiction to code";
  }, 8000);
  setTimeout(() => {
    text.textContent = " Fun to code";
  }, 12000);
};

textLoad();
setInterval(textLoad, 16000);

