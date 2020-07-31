$(function() {
  if (status == "H5") {
      $("#H5_1").css('display', "");
      $("#H5_2").css('display', "");
      $("#H5_3").css('display', "");
      //$("#h12").css('display' , "none");
      $("#h21").css('display', "none");
  } else {

  }
    var online  = setServerOnline();
    document.getElementById('online_service').href = online;
})

function DownSoft() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isiOS) {
      if (status == "H5") {
          $('#screen').fadeIn();
          $('#loadImg').fadeIn(1500, function() {
              $('#loadImg').hide();
              $('#screen').fadeOut();
          });
          openInstall.wakeupOrInstall();
      } else {
          $('#screen').fadeIn();
          $('#loadImg').fadeIn(1500, function() {
              $('#loadImg').hide();
              $('.altBox').fadeIn();
          });
          openInstall.wakeupOrInstall();
      }
  } else {
      $('#screen').fadeIn();
      $('#loadImg').fadeIn(1500, function() {
          $('#loadImg').hide();
          $('#screen').fadeOut();
      });
      openInstall.wakeupOrInstall();
  }
}


var swipergameHot = new Swiper('.gameHot .swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 20,
    freeMode: true,
    autoplay: true,
    loop: true,
});

$('.closeBtn').click(function() {
    $('#screen').fadeOut();
    $('.altBox').fadeOut();
})

$('.closeBtn').click(function() {
    //$(this).parent().parent('.resignBox').fadeOut();
    //$('#screen').fadeOut();
})
$('.share').click(function() {
    $('.shareBar').animate({ 'bottom': '0' }, 500);
    //$('#screen').fadeIn();
})
$('.close').click(function() {
    $('.shareBar').animate({ 'bottom': '-100%' }, 500);
    //$('#screen').fadeOut();
})

function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
var num1 = RandomNumBoth(0, 20);
var num2 = RandomNumBoth(0, 20);
var num3 = RandomNumBoth(0, 20);
console.log(num1);
console.log(num2);
console.log(num3);
$('#num1').html(num1);
$('#num2').html(num2);
$('#num3').html(num3);

var swiperbanner = new Swiper('.banner .swiper-container', {
    autoplay: true,
    loop: true,
});

