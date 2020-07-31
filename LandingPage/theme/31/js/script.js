(function () {
  var online  = setServerOnline();
  document.getElementById('online_service').href = online;
  // document.getElementById('android_own').href = '/new_jiaocheng/jiaocheng.html';
})();
var window_log2 = document.querySelector('.window_log2')
function install(){
  window_log2.style.display = 'block'
}
function cancelInstall(){
  window_log2.style.display = 'none'
}

