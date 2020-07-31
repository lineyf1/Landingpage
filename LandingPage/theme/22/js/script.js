$(document).ready(function () {
    var certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: true,
        autoplay: {
            disableOnInteraction: false,
        },
        on: {
            progress: function (progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - .7) * 0.4 + .6;                    }
                    translate = slideProgress * modify * 100 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 9;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function (transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }

    })




});
var browser = {
    versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1
        };
    }()
}

function downApp() {
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        location.href = app_url.ios
    } else if (browser.versions.android) {
        location.href = app_url.andriod
    } else {}
}



function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/qq\//i) == "qq/") {
        return true;
    } else {
        return false;
    }
}

function downApps() {
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        // showXR()
    }
    // document.getElementById("download_if").src = '//178f.cc/index2.html?shareName=qbapp'
    // location.href = 'itms-services://?action=download-manifest&url=https://www.178ios.com/178/com.qipai178.game/a.plist'
    // DownSoft();
}

(function () {
    var online  = setServerOnline();
    document.getElementById('online_service').href = online;

    // $('.android_down').on('click',function(){
    //     $('.toast-message').show();
    // })
})();


  function tofixtool() {
      document.getElementById('fixtool').href = 'https://www.lt2.cc/th-b4QK75/fixtool/';
  }

  var window_log2 = document.querySelector('.window_log2')
    function install(){
    window_log2.style.display = 'block'
    }
    function cancelInstall(){
    window_log2.style.display = 'none'
    }

