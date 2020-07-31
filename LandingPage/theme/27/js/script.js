function downloadGame(n) {
  if (isIos() && 1 == n) {
      firm('苹果', '安卓', n)
  }
  else if (isAndroid() && 2 == n) {
      firm('安卓', '苹果', n)
  }
  else if(isAndroid() && 0 == n){
    toDownload(1);
    return
  }{
      toDownload(n);
  }
}
function firm(m, s, n) {
    if (confirm('要进入下载' + s + '吗？您的系统是' + m)) {
        toDownload(n)
    }
}


var clipboard = new ClipboardJS('.copyBtn',{
  text: function(){
    return window.location.href;
  }
});

clipboard.on('success', function (e) {
  alert('复制成功, 请前往浏览器粘贴打开!')
  e.clearSelection();
});

document.getElementsByClassName("closeBaiduIOs")[0].onclick = function(e) {
  document.getElementsByClassName('baiduIOs')[0].style.display = "none";
  e.cancelBubble = true;
};

var window_log2 = document.querySelector('.window_log2')
function install(){
    window_log2.style.display = 'block'
}
function cancelInstall(){
    window_log2.style.display = 'none'
}
