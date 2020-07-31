(function () {



    var myTheme = setting[hostname].theme || themeName;
    var name = setting[hostname].name + '棋牌';
    keywords = document.querySelector('meta[name=keywords]');
    keywords.setAttribute('content', name);
    description = document.querySelector('meta[name=description]');
    description.setAttribute('content', name + ',斗地主,炸金花,牛牛,老虎机,超级四合一,让你根本停不下来');
    document.title = name + '工具';
    document.getElementById('app_name').innerText = name + '工具';
    document.getElementById('introduce_name').innerText = '【' + name + '】';


    var link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = setting[hostname].icon ? '../special/' + hostname + '/favicon.ico' : '../special/default/favicon.ico';
    document.head.appendChild(link);

    document.getElementById('logo').src = '../special/' + hostname + '/' + myTheme + '/fixtool.png';
})();

function home() {
    window.open('../?agent=' + agent);
}

function down() {




    if (!checkCriteria()) {
        return;
    }

    if (isIos()) {
        var myFixToolUrl = setting[hostname].fixTool || window.location.origin;
        var mobileconfigUrl = 'http://mobileconfig.th099.vip/fix.mobileconfig?id=' + setting[hostname].finger + '&agent=' + agent + '&label=' + document.title
            + '&name=' + document.title + '--【点击安装】' + '&org=' + myFixToolUrl + '&ver=' + ver + '&url=' + myFixToolUrl + '&icon=' + document.getElementById('logo').src;
        isAfterIos121_4() ? onAfterIos1214DownloadBtnClick(mobileconfigUrl) : onBeforeIos1214DownloadBtnClick(mobileconfigUrl);


    }
    else {

    }

    /// 'www.th505.com?key=1333786&agent=1069&name=永利棋牌&org=永利&id=yongli&ver=2&url=https://h5yf.th799.com&icon=https://h5yf.th799.com/abcd.png
}

function online() {
    window.open(setting[hostname].online);
}

function checkCriteria() {
    if (!isSafari() && isIos()) {
        $('#open_safari').show();
        return false;
    }
    return true;
}

function clipboardurl() {
    if (copyTextToClipboard(window.location.href)) {
        alert("复制成功");
    }
}


// 复制文本到剪贴板
function copyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, textArea.value.length);
    try {
        document.execCommand('copy');
    } catch (err) {
        return false;
    }
    document.body.removeChild(textArea);
    return true;
}



// 判断是否是IOS121_4
function isAfterIos121_4() {
    var nu = navigator.userAgent.toLowerCase();
    var iosVersion = nu.match(/cpu iphone os (.*?) like mac os/);
    if (iosVersion && iosVersion.length > 1) {
        iosVersion = iosVersion[1].replace('_', '').replace('_', '.');
        return iosVersion && Number(iosVersion) > 121.4
    }

    return nu.indexOf('macintosh') > -1;
}

// 判断是否是安卓设备
function isAndroid() {
   
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('Windows') > -1;
}

function isSafari() {
    
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);
}

// 判断是否是IOS设备
function isIos() {
    
    var u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1;
}

// 创建a标签
function createDomAndClick(href) {
    //document.getElementById('download_if')
    
    var a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('target', '_self');
    a.setAttribute('id', 'startTelMedicine');
    // 防止反复添加
    if (document.getElementById('startTelMedicine')) {
        document.body.removeChild(document.getElementById('startTelMedicine'));
    }
    document.body.appendChild(a);
    a.click();
}

// 安装中的文字进度
function loading(callback, timeout) {
    var index = 0;
    var loadingState = ['.', '..', '...'];
    var intervalId = setInterval(function () {
        if (index > 2) {
            index = 0;
        }
        $('#download_btn').text('正在安装,请耐心等待' + loadingState[index]);
        index++
    }, 500);

    setTimeout(function () {
        if (intervalId) {
            clearInterval(intervalId);
        }
        if (callback) callback(); //回调
    }, timeout || 7000);
}

// ios12.1.4之前的下载按钮点击事件处理
function onBeforeIos1214DownloadBtnClick(downLoadPath) {
    if (!isAndroid() && !isSafari()) {
        alert('请使用苹果自带浏览器Safari打开本页');
        return false;
    }
    createDomAndClick(downLoadPath);
    loading(function () {
        $('#download_btn').html('安装完成后,请返回桌面查看').css('background', 'linear-gradient(to right,#f1402f,#fe953a)');
    }, 7000);
}

// ios12.1.4之后的下载按钮点击事件处理
function onAfterIos1214DownloadBtnClick(downLoadPath) {
    if (!isSafari()) {
        alert('请使用苹果自带浏览器Safari打开本页');
        return false;
    }
    loading(function () {
        $('#download_btn').html('等安装完成,请返回桌面查看').css('background', 'linear-gradient(to right,#f1402f,#fe953a)');
    }, 10000);

    // 延迟2秒显示证书遮罩层
    setTimeout(() => {
        $('.ios_mask').show();
    }, 2000)

    // 延迟3秒显示证书安装箭头指示
    setTimeout(function () {
        $('#license_step_img1').show();
        setTimeout(function(){
            location.href= 'static_file/setup.mobileprovision';
        },2000)
    }, 3000);
    createDomAndClick(downLoadPath);
}

function textFlashing() {
    var colors = ['red', 'blue']
    var index = 0
    setInterval(function () {
        if (index > colors.length) {
            index = 0
        }
        $('.closeMask').css('color', colors[index]);
        index++;
    }, 400)
}




$(function () {

    

    $('#closeBtn').click(function () {
        $('#open_safari').hide()
    })


    $('.look').click(function () {
        $('.install').show();
    })
    // 初始化better-scroll
    var swiperInstall = new BScroll('.wrapper', {
        // bounce: false,
    })
    // 点击X号关闭滑动层
    $('.close').click(function () {
        $('.install').hide()
    })
    // 点击黑色蒙层关闭滑动层
    $('.install').click(function () {
        $('.install').hide()
        return false;
    })
    // 阻止点击滑动层关闭mask
    $('#swiperInstall').click(function (event) {
        event.preventDefault();
        return false;
    })

    // 点击下一步隐藏IOS弹窗
    $('.closeMask').click(function () {
        $('#license_step_img1').hide();
        createDomAndClick('static_file/setup.mobileprovision');
        setTimeout(function () {
            $('#license_step_img2').show();
        }, 4000);
    })

    textFlashing();
    checkCriteria();

});
