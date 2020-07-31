(function () {
  var online  = setServerOnline();
  document.getElementById('online_service').href = online;

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true
  });
})();
