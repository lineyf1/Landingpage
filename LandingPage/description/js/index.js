(function () {
    var name = setting[hostname].name + '棋牌';
    keywords = document.querySelector('meta[name=keywords]');
    keywords.setAttribute('content', name);
    description = document.querySelector('meta[name=description]');
    description.setAttribute('content', name+',斗地主,炸金花,牛牛,老虎机,超级四合一,让你根本停不下来');
    document.title = name + '安装步骤说明';
    document.getElementById('footname').innerText = name;
    document.getElementById('downname').innerText = '下载' + setting[hostname].name;
    

    var link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = setting[hostname].icon ? '../special/' + hostname + '/favicon.ico' : '../special/default/favicon.ico';
    document.head.appendChild(link);

    var imgs = document.getElementsByTagName('img');

    for (var i = 0; i < imgs.length; i++) {
        var currentSrc = '../special/' + hostname + '/tf/' + imgs[i].getAttribute('data-src') + '?ver=' + ver;
        imgs[i].setAttribute('src', currentSrc);
        imgs[i].removeAttribute('data-src');
    }

})();

var settingUrls = setting[hostname].ios.replace(/\s/g, '').split(',');

window.visibilityState = true;
document.addEventListener('visibilitychange', function () {

    if (document.visibilityState == 'hidden') {
        window.visibilityState = false;
    } else if (document.visibilityState == 'visible') {
        window.visibilityState = true;
    }
});

function downloadGame(code) {

    document.location = 'itms-beta://testflight.apple.com/join/' + settingUrls[code];
    setTimeout(function () {
        if (window.visibilityState) {
            document.location = '//itunes.apple.com/cn/app/testflight/id899247664?mt=8';
        }
        else {

        }

    }, 1500);
};