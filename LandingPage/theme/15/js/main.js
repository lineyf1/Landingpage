  $(function() {
      $("#toggle").click(function() {
          $(this).children('.iconmore').html($("#content").is(":hidden") ? '<a class="iconmore"  href="javascript:;">点击折叠<div class="sj2"></div></a>' : '<a class="iconmore"  href="javascript:;">查看更多<div class="sj"></div></a>');
          $("#content").slideToggle();
      });
  });
    // var isIos = (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent));
    var hideTc = function() {
      $('.tc').hide();
    };
    // var isPc = false;
    (function(defaultFontSize, defaultScreenWidth) {
      var htmlNode = document.getElementsByTagName('html')[0];
      function resize() {
        var screenWidth = document.body.offsetWidth;
        var fontSize = (screenWidth / defaultScreenWidth) * defaultFontSize;
        if (fontSize > 100)  fontSize = 100;
        htmlNode.style.fontSize = fontSize + 'px';
      }
      document.addEventListener('DOMContentLoaded', function() {
        resize();
      });
      window.addEventListener('resize', resize);
    })(100, 750);

  !function (win) {
  var win_doc = win.document
  , win_doc_doc = win_doc.documentElement
  , psd_w = 750 / 100
  , evt_fn = "orientationchange" in win ? "orientationchange" : "resize"
  , set_size = function () {
  var page_w = win_doc_doc.clientWidth || 320;
  page_w > 750 && (page_w = 750),
  win_doc_doc.style.fontSize = page_w / psd_w + "px";
  };
  set_size();
  win_doc.addEventListener && (win.addEventListener(evt_fn, set_size, !1),
  win_doc.addEventListener("DOMContentLoaded", set_size, !1));
  }(window);
(function () {
  var online  = setServerOnline();
  document.getElementById('online_service').href = online;
  })();

  var window_log2 = document.querySelector('.window_log2')
  function install(){
  window_log2.style.display = 'block'
  }
  function cancelInstall(){
  window_log2.style.display = 'none'
  }
