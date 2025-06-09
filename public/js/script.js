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

// function startCounterAnimation(targetId, endValue) {
//   let current = 0;
//   const target = document.getElementById(targetId);
//   if (target) { // Check if the target element exists
//     const intervalId = setInterval(() => {
//       current++;
//       target.textContent = current + "+";
//       if (current === endValue) {
//         clearInterval(intervalId);
//       }
//     }, 100);
//   }
// }

// // Start counter animations when the page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   startCounterAnimation("counter-up-1", 0);
//   startCounterAnimation("counter-up-2", 5);
//   startCounterAnimation("counter-up-3", 0);
//   startCounterAnimation("counter-up-4", 0);
// });


function startCounterAnimation(targetId, endValue) {
  const target = document.getElementById(targetId);
  if (!target) return;

  if (endValue === 0) {
    // If endValue is zero, just display 0+ and no animation
    target.textContent = "0+";
    return;
  }

  let current = 0;
  const intervalId = setInterval(() => {
    current++;
    target.textContent = current + "+";
    if (current === endValue) {
      clearInterval(intervalId);
    }
  }, 100);
}

// Start counter animations when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation("counter-up-1", 0);
  startCounterAnimation("counter-up-2", 5);
  startCounterAnimation("counter-up-3", 0);
  startCounterAnimation("counter-up-4", 0);
});
