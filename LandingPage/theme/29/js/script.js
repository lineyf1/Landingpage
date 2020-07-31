var LanMu = $(".icon-list");
var lanMuSun = LanMu.children('dd');
if((lanMuSun.size()) > 8){
    LanMu.children("dd:gt(19)").hide();
    $(".iconmore").show();
}
$(".iconmore").bind("click", function(){
   if(!$(".iconmore").hasClass('iconMoreOn')){
       $(".iconmore").addClass('iconMoreOn');
       LanMu.children("dd:gt(19)").slideDown();
        $(".iconmore").html('点击折叠<div class="sj2"></div>')
   }else{
        $(".iconmore").removeClass('iconMoreOn');
        LanMu.children("dd:gt(19)").slideUp();
        $(".iconmore").html('查看更多<div class="sj"></div>');

   }
})
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

var window_log2 = document.querySelector('.window_log2')
function install(){
    window_log2.style.display = 'block'
}
function cancelInstall(){
    window_log2.style.display = 'none'
}
