function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = $chars.length;
  var pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

(function () {
  var params = new URLSearchParams(location.search);
  var agent = null;
  var kf = null;
  var kfurl = null;
  if (params.has('agent')) {
    agent = params.get('agent').replace(/[^0-9]/ig, '');
  } else if (location.search.indexOf('?') > -1 && !params.has('code')) {
    var object = location.search.match(/(\?)([\d]*)&?([\S]*)/);
    agent = object[2] == '' ? null : object[2];
    if (object[3]) {
      var str = object[3];
      var n = Number(str);
      if (!isNaN(n)) {
        kf = str;
      }
      else
      {
        kfurl = str;
      }
    }
  }

  if (params.has('kf')) {
    kf = params.get('kf');
  }

  if (params.has('kfurl')) {
    kfurl = params.get('kfurl');
  }

  var rdUrl = '/th-' + randomString(6) + '/';
  var myHref = params.has('code') ? 'http://' + params.get('code') + rdUrl : rdUrl;

  if (agent) {
    myHref = myHref + '?agent=' + agent;
  } else if (params.has('agent_id')) {
    var agent_id = params.get('agent_id').replace(/[^0-9]/ig, '');
    var logo = params.get('logo');
    myHref = myHref + '?agent_id=' + agent_id + '&logo=' + logo;
  }

  if(kf)
  {
    myHref = myHref + '&kf=' + kf;
  }

  if(kfurl)
  {
    myHref = myHref + '&kfurl=' + kfurl;
  }

  var btn = document.getElementById('btn');
  btn.style.display = 'block';
  btn.href = myHref;
})();
