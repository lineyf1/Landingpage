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
