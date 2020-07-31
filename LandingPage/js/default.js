var openInstall = undefined;
var selfUrl =  'https://opendownload.7thfdk.com/user/app/downloadurl/';

(function () {
  var name = setting[hostname].name + '游戏';
  keywords = document.querySelector('meta[name=keywords]');
  keywords.setAttribute('content', name);
  description = document.querySelector('meta[name=description]');
  description.setAttribute('content', name + ',斗地主,炸金花,牛牛,老虎机,超级四合一,让你根本停不下来');
  //document.title = name;
  document.title = 'Document';
  var link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = setting[hostname].icon ? 'special/' + hostname + '/favicon.ico' : 'special/default/favicon.ico';
  document.head.appendChild(link);
  var myAppNames = document.getElementsByClassName('myAppName');
  for (var i = 0; i < myAppNames.length; i++) {
    myAppNames[i].innerText = name;
  }
})();



(function () {
  if (agent == '000000') {
    return;
  }
  Fingerprint2.get(function (components) {
    var murmur = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    console.log(murmur);
    var formData = new FormData();
    formData.append('agent_id', agent);
    formData.append('pid', setting[hostname].finger);
    formData.append('fp', murmur);
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

  }
  document.body.removeChild(textArea);
}



function toDownload(n) {
  if (n === void 0) {
    n = 0;
  }

  if (agent && !onlyFinger) {
    if (newcopyText) {
      copyTextToClipboard('AgentId_' + agent + '_' + setting[hostname].finger);
    } else {
      copyTextToClipboard('AgentId_' + agent);
    }

  }

  if (n == 0) {
    n = isIos() ? 2 : 1;
  }

  if (n == 1) {
    if (!setting[hostname].android || setting[hostname].android == 'open') {
      return;
    }

    if (setting[hostname].android == 'self') {
      MySelfInstall();


    } else {
      window.location = setting[hostname].android;
    }

  }



  if (n == 2) {
    if (!setting[hostname].ios || setting[hostname].ios == 'open') {
      return;
    }

    if (setting[hostname].ios.indexOf(',') > -1) {
      window.location = '/description/' + location.search;
    } else {
      window.location = setting[hostname].ios;
    }
  }


}

function toHtmlGame() {
  window.location = setting[hostname].h5 + '?token=guest&agent_id=' + agent;
}

function firm(m, s, n) {
  if (setting[hostname].confirm) {
    if (confirm('要进入下载' + s + '吗？您的系统是' + m)) {
      toDownload(n)
    }
  }
  else
  {
    toDownload(n);
  }

}

function downloadGame(n) {
  if (isIos() && 1 == n) {
  firm('苹果', '安卓', n)
  }
  else if (isAndroid() && 2 == n) {
  firm('安卓', '苹果', n)
  }
  else if (1 == n && setting[hostname].android == 'self') {
  setTimeout(function() {
  $('.toast-message').show();
  },0)
  toDownload(n);
  }
  else {
  toDownload(n);
  }
  }

function DownSoft(n) {
  downloadGame(n)
}


var timerId = undefined;

function clearId() {
  if (timerId) {
    clearTimeout(timerId);
  }
}

function MySelfInstall() {
  clearId();
  timerId = setTimeout(function () {
    clearId();
    if (openInstall) {
      openInstall.wakeupOrInstall();
    }

  }, 10000);
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      clearId();
      var data = JSON.parse(this.responseText);
      console.log(data);
      if(data && data.apk) {
          setTimeout(function() {
            $('.toast-message').hide();
          },2000);
          window.location = data.apk;
        }
    }
  };

  selfUrl = setting[hostname].selfUrl || selfUrl;
  request.open('GET', selfUrl + "?platform=" + setting[hostname].finger + "&agent=" + agent, true);
  request.send(null);

}



function getUrlVars() {
  var params = {};
  if (!params.channelCode) {
    params.channelCode = agent.toString();
  }
  return params;
}

function onMyOpenReady() {
  var m = this;
  var userSelection = document.getElementsByClassName('myd_btn');
  for (var i = 0; i < userSelection.length; i++) {
    (function (index) {
      userSelection[index].addEventListener('click', function () {
        if (!isIos()) {
          if (!setting[hostname].android || setting[hostname].android == 'open') {
            m.wakeupOrInstall();
          }
        } else {
          if (!setting[hostname].ios || setting[hostname].ios == 'open') {
            m.wakeupOrInstall();
          }
        }

        return false;
      })
    })(i);
  }
}

function InitMyOpenInstall(key) {
  OpenInstall.parseUrlParams = getUrlVars;
  var data = OpenInstall.parseUrlParams();
  openInstall = new OpenInstall({
    appKey: key,
    onready: onMyOpenReady
  }, data);
}
//以下四个是赋值客服地址
function find(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}

function insertStr(soure, start, newStr) {
  return soure.slice(0, start) + newStr + soure.slice(start);
}

function sum(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num
}

function createCode() {
  var code = ''
  var codeLength = sum(6, 25) // 验证码的长度
  var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z') // 随机数
  for (var i = 0; i < codeLength; i++) { // 循环操作
    var index = Math.floor(Math.random() * 36) // 取得随机数的索引（0~35）
    code += random[index] // 根据索引取得随机数加到code上
  }
  return code // 把code值赋给验证码
}

function setServerOnline() {
  var idx = 0;
  var surl = undefined;
  if (params.has('kf')) {
    idx =  params.get('kf') - 1;
  }
  else if(params.has('kfurl'))
  {
    surl =  params.get('kfurl');
  }
  var onlineArr  = setting[hostname].online.split('|');
  var online = surl || onlineArr[idx]||onlineArr[0];;//setting[hostname].online;
 
  var newOnline = null;
  var pos = online.indexOf("?");
  if (pos > 0) {
    var par = online.slice(pos)
    var firstNum = find(par, '&', 1)
    if (firstNum > 0) {
      var first = '&' + createCode() + '&' + createCode()
      var firstPar = insertStr(par, firstNum, first)
      var lastPat = '&' + createCode()
      newOnline = online.substring(0, pos) + firstPar + lastPat
    } else {
      newOnline = online
    }
  } else {
    newOnline = online
  }
 
  return newOnline
}

InitMyOpenInstall(setting[hostname].appKey)