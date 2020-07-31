function setAnchors() {
    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
    var ua = navigator.userAgent.toLowerCase(),
        iphoneos = (ua.match(/iphone os/i) == "iphone os") || (ua.match(/iph os/i) == "iph os") || (ua.match(/ipad/i) == "ipad"),
        android = (ua.match(/android/i) == "android") || (ua.match(/adr/i) == "adr") || (ua.match(/android/i) == "mi pad");

    var a_list = document.getElementsByTagName("a"),
        i = 0,
        len = a_list.length,
        get_par = "",
        get_par = function get_par(par) {
            var local_url = document.location.href;
            var get = local_url.indexOf(par + "=");
            if (get == -1) {
                return false;
            }
            var get_par = local_url.slice(par.length + get + 1);
            var nextPar = get_par.indexOf("&");
            if (nextPar != -1) {
                get_par = get_par.slice(0, nextPar);
            }
            return get_par;
        };

    place = get_par("place") || "626";

    for (i = 0; i < len; i++) {
        (function (index) {
            a_list[index].addEventListener('click', function () {
                DownSoft();
            }, false);
        })(i)
    }

    if (is_weixin()) {
        loadHtml();
        loadStyleText();
    }

    

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return r[2];
        }
        return null;
    }


    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    function loadHtml() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android缁堢
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios缁堢

        var div = document.createElement('div');
        div.id = 'weixin-tip';
        if (isiOS) {
            div.innerHTML = '<p><img src="images/live_weixin_ios.png" alt="" style="max-width: 100%; height: auto;"/></p>';
        } else {
            div.innerHTML = '<p><img src="images/live_weixin.png" alt="" style="max-width: 100%; height: auto;"/></p>';
        }
        console.log(div)
        document.body.appendChild(div);
    }

    function loadStyleText() {
        var style = document.createElement('style');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        try {
            style.appendChild(document.createTextNode(cssText));
        } catch (e) {
            style.styleSheet.cssText = cssText;
        }
        var head = document.getElementsByTagName("head")[0]; 
        head.appendChild(style);
    }

    function is_baiduapp() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/baiduboxapp/i)) {
            return true;
        } else {
            return false;
        }
    }

    

    function DownSoft() {
        if (is_baiduapp() && iphoneos){
            $('#open_safari').css('display','block');
            $('#copyBtns').attr('data-clipboard-text',window.location.href);
            $('#copyBtns').click(function(){
                var clipboard = new ClipboardJS('#copyBtns');
                var tmpss = 1;
                clipboard.on('success', function(e) {
                    if(tmpss==1){
                        tmpss = 0;
                        alert('复制成功!请在safari浏览粘贴打开');
                    }
                    
                });
                clipboard.on('error', function(e) {
                    alert('复制成功！如果没有复制成功，请再手动复制!');
                });
            });
            return false;
        }
        if(autocopy){
           cnum = 0;
            $('.copybtn').click();
            cnum = 1; 
        }
        if(iphoneos) {
            if(typeof isCompany != 'undefined') {
                if(isCompany === '1') {
                    window.location.href = './instructions.html?channelid='+channelid;
                    // window.location.href = 'https://app.youwangda.top/supersign/install.html?appid=90';
                    return;
                }
            }
        }
		
        /*var fr = getQueryString('fr')
        var s = 'https:' == document.location.protocol ? true : false;
        var pid = iphoneos ? iosplace : androidplace;
        if (typeof fr != 'undefined' && fr == 'code') {
            if (iphoneos){
                if(typeof iosplacecode != 'undefined') {
                    pid = iosplacecode;
                }
            } else {
                if(typeof androidplacecode != 'undefined') {
                    pid = androidplacecode;
                }
            }
        }
        var url = rurl + '?pid=' + pid + (s ? '&s=1' : '');
		*/
		
		var url = iphoneos ? iosplace : androidplace;
		
        console.log(url);
        window.location.href = url;
    }

}



window.addEventListener('DOMContentLoaded', setAnchors, false);