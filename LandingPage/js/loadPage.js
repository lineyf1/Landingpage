var myTheme = setting[hostname].theme || themeName;

var defaultJS = ['lazysizes.min', 'fingerprint2', 'ls.bgset.min', 'default'];
var otherJS = ['http://pv.sohu.com/cityjson?ie=utf-8'];
var manifest;

function get(url) {
    return new Promise(function (succeed, fail) {
        var req = new XMLHttpRequest();
        req.open('GET', 'theme/' + myTheme + '/' + url + '?ver=' + ver, true);
        req.addEventListener('load', function () {
            if (req.status < 400)
                succeed(req.responseText);
            else
                fail(new Error('Request failed: ' + req.statusText));
        });
        req.addEventListener('error', function () {
            fail(new Error('Network error'));
        });
        req.send(null);
    });
}

function addManifest(data) {
    manifest = JSON.parse(data);

    for (var index = 0; index < manifest.css.length; index++) {
        loadCss(manifest.css[index]);
    }

    for (var index = 0; index < otherJS.length; index++) {
        loadScript(otherJS[index], 2);
    }

    for (var index = 0; index < defaultJS.length; index++) {
        loadScript(defaultJS[index], 1);
    }

    for (var index = 0; index < manifest.js.length; index++) {
        loadScript(manifest.js[index]);
    }



}

function loadCss(n) {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'theme/' + myTheme + '/css/' + n + '.css?ver=' + ver;
    document.head.appendChild(l);
}

function loadScript(n, id = 0) {
    var jsPath = undefined;
    switch (id) {
        case 0:
            jsPath = 'theme/' + myTheme + '/' + 'js/' + n + '.js?ver=' + ver;
            break;
        case 1:
            jsPath = 'js/' + n + '.js?ver=' + ver;
           
            break;
        case 2:
            jsPath = n;
            break;
    }
    var s = document.createElement('script');
    s.async = false;
    s.src = jsPath;
    document.head.appendChild(s);
}

function imgSet(myImg, getAgrs) {
    var imgFor = getAgrs.imgFor;
    var imgType = getAgrs.imgType;
    var imgFolder = getAgrs.imgFolder;
    var getStr = imgFor + '-' + imgType;
    var setStr = 'data-' + imgType;
    var currentSrc = imgFor + '/' + imgFolder + '/' + myImg.getAttribute(getStr) + '?ver=' + ver;

    myImg.setAttribute(setStr, currentSrc);
    myImg.removeAttribute(getStr);
}

function imgFilter(myImg) {

    var imgFor = ['theme', 'special'];
    var imgType = ['src', 'bg'];

    var getAgrs = function (a, b) {
        var imgFolder = a == 0 ? myTheme + '/images' : hostname + '/' + myTheme;
        return {
            imgFor: imgFor[a],
            imgType: imgType[b],
            imgFolder: imgFolder
        };

    }

    if (myImg.hasAttribute(imgFor[0] + '-' + imgType[0])) {
        imgSet(myImg, getAgrs(0, 0));
    } else if (myImg.hasAttribute(imgFor[0] + '-' + imgType[1])) {
        imgSet(myImg, getAgrs(0, 1));
    } else if (myImg.hasAttribute(imgFor[1] + '-' + imgType[0])) {
        imgSet(myImg, getAgrs(1, 0));
    } else if (myImg.hasAttribute(imgFor[1] + '-' + imgType[1])) {
        imgSet(myImg, getAgrs(1, 1));
    }

}

function addHtml(data) {
    // console.log(document.getElementById('setPage').innerHTML)
    document.body.innerHTML = data;
    // // document.getElementById('setPage').innerHTML
    // document.getElementById("setPage").innerHTML = data;
    var imgs = document.getElementsByClassName('lazyload');
    for (var i = 0; i < imgs.length; i++) {
        var myImg = imgs[i];
        imgFilter(myImg);

    }
    get('manifest.json').then(addManifest);
    var url = ['https://s9.cnzz.com/z_stat.php?id=1278832976&web_id=1278832976', 'https://v1.cnzz.com/z_stat.php?id=1278761958&web_id=1278761958', 'https://s9.cnzz.com/z_stat.php?id=1278761961&web_id=1278761961', 'https://s9.cnzz.com/z_stat.php?id=1278761964&web_id=1278761964']
    setScript(url)


}

function setScript(url) {
    for (var i = 0; i < url.length; i++) {
        var new_element = document.createElement("script"); //创建新的script节点
        new_element.setAttribute("type", "text/javascript");
        new_element.setAttribute("src", url[i]);
        document.body.appendChild(new_element); //head加入
    }
}

function loadPage() {
    // get('index.html').then(addHtml);
    get('index.txt').then(addHtml)
}
