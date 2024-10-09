/// <reference types="../@types/jquery" />

// Sidebar Animation
$('.icon').on('click', function () {
  $('aside').animate({ width: 300, paddingInline: "toggle" }, 1000);
  $('.icon').animate({ left: "20%" }, 1000,function () {
    
    $('.icon').css('display', 'none');
  })
  
})

$('.close').on('click', function () {
  $('aside').animate({ width: 0, paddingInline: "toggle" }, 1000);
  $('.icon').animate({left: "1%"},1000)
  $('.icon').css('display', 'block');
  
})

// singers sliding
$('#singers h2').on('click',function (e) {
  $(e.target).next('p').slideToggle(1000)
  $("p").not($(e.target).next()).slideUp(500);
})

// event countdown
function getDate(date) {
  const counter = setInterval(() => {
    let now = new Date();
    let eventDate = new Date(date);
    let duration = eventDate - now;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24))
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    $(".days").html(`${days} `);
    $(".hours").html(`${hours} `);
    $(".minutes").html(`${minutes} `);
    $(".seconds").html(`${seconds} `);

    if (duration < 0) {
      clearInterval(counter);
      $(".days").html(`Soon`);
      $(".hours").html(`Next`);
      $(".minutes").html(`Event`);
      $(".seconds").html(`Time`);
    }
  }, 1000);
}
    
getDate("Nov 7, 2024 12:00:00")

// form counter
let counter = 100; 
$('#inputChars').on('input', function () {
  const currentNum = counter - $(this).val().length
  $('#charCountdown').html(currentNum);
  
})

// smoothing scroll
$("aside ul li a").on("click", function (e) {
  const aHref = $(e.target).attr("href");
  const curSection = $(aHref).offset().top;
  $(e.target).addClass("active");
  $("#home ul li a").not(e.target).removeClass("active");
  $('html,body').animate({ scrollTop: curSection }, 1500);
  
})


