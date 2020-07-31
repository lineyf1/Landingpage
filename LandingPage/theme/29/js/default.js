
var params = new URLSearchParams(location.search);
var agentstr = params.get("agent") || location.search.replace("?", "") || "1524330";
var agent = agentstr.replace(/[^0-9]/ig, "");


var mydata;


(function () {
  Fingerprint2.get(function (components) {
    var murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
    console.log(murmur);
    var formData = new FormData();
    formData.append("agent_id", agent);
    formData.append("pid", "yf");
    formData.append("fp", murmur);
    var url = 'https://fingerprint.th099.vip/agentsign/save_agent_sign/';
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    request.open('POST', url, true);
    request.send(formData);
  });
})();

// 复制文本到剪贴板
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
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

  }
  document.body.removeChild(textArea);
}

// 判断是否是安卓设备
function isAndroid() {
  let u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}

// 判断是否是IOS设备
function isIos() {
  let u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1;
}

function downloadGame(n) {
  if (isIos() && 1 == n) {
    firm("苹果", "安卓", n)
  }
  else if (isAndroid() && 2 == n) {
    firm("安卓", "苹果", n)
  }
  else {
    toDownload(n);
  }
}
