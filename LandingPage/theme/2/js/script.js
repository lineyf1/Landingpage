function downloadGame() {
    toDownload(0);
}

function tofixtool() {
    window.open('fixtool/?agent=' + agent);
}

(function () {
    document.getElementById('online_service').href = setServerOnline();

    if (!showFixTool || isAndroid()) {
        document.getElementById('fixtool').style.display = 'none';
    }

    var ft = document.getElementById('foot');

    if (setting[hostname].qq) {
        document.getElementById('qqNum').innerText = setting[hostname].qq;
    }
    else {
        document.getElementById('foot').style.display = 'none';
    }

    if (setting[hostname].reward) {
        document.getElementById('rewardNum').innerHTML = '点击领取<span style="color:#b93d39">' + setting[hostname].reward + '元</span>';
    }

    var mySide = isIP ? ipToUrl : location.hostname.split('.').slice(-2).join('.');

    if (params.has('test')) {
        mySide = params.get('test');
    }

    document.getElementById('mySide').innerText = mySide.toUpperCase();


})();

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
                        modify = (Math.abs(slideProgress) - .7) * 0.4 + .6;
                    }
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


