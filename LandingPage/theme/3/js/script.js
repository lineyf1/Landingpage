

(function () {
    document.getElementById('online_service').href = setServerOnline();
})();

var hideTc = function() {
    $('.tc').hide();
};
var window_log2 = document.querySelector('.window_log2')
function install(){
window_log2.style.display = 'block'
}
function cancelInstall(){
window_log2.style.display = 'none'
}
