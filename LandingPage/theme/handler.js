
var isIP = location.hostname.match(/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/g);

var hostname = isIP ? ipToUrl : location.hostname.split('.').slice(-2).join('.');
var agent;
var extension;
var params = new URLSearchParams(location.search);
var showFixTool = true;
var onlyFinger = false;
var newcopyText = true;

// 判断是否是安卓设备
function isAndroid() {
  var u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}

// 判断是否是IOS设备
function isIos() {
  var u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1;
}


function getRouter() {
  if (router[hostname]) {
    hostname = router[hostname];
    getExtension();
    if (router[hostname]) {
      hostname = router[hostname];
    }
  }
}

function getExtension() {
  if (typeof (extensions) != 'undefined' && extensions[hostname]) {
    extension = extensions[hostname];
  }
}

(function () {

  if (typeof (cnzz) != 'undefined') {
    var cnzzFor = isIP || location.hostname.split('.').slice(-2).join('.');
    var cnid = cnzz[cnzzFor];
    if (cnid) {

      var s = document.createElement('script');
      s.src = 'https://s4.cnzz.com/z_stat.php?id=' + cnid + '&web_id=' + cnid;
      document.head.appendChild(s);
    }
  }

  if (params.has('test')) {
    hostname = params.get('test');
  }

  if (params.has('only')) {
    onlyFinger = true;
  }

  if (params.has('new')) {
    newcopyText = true;
  }


  getExtension();

  if (typeof (router) != 'undefined') {
    getRouter();

  }

  if (!setting[hostname]) {
    hostname = configName;
  }


  if (extension) {
    for (var key in extension) {
      if (extension.hasOwnProperty(key)) {
        var element = extension[key];
        setting[hostname][key] = element;
      }
    }
  }

  if (params.has('agent_id')) {
    agent = params.get('agent_id').replace(/[^0-9]/ig, '');
    showFixTool = false;
  }
  else if (params.has('agent')) {
    agent = params.get('agent').replace(/[^0-9]/ig, '');
  }
  else if (location.search.indexOf('?') > -1) {
    var object = location.search.match(/(\?)([\d]*)/);
    //console.log(object);
    agent = object[2] == '' ? setting[hostname].agent : object[2];
  }
  else {
    agent = setting[hostname].agent;
  }

  if (params.has('theme')) {
    setting[hostname].theme = params.get('theme');
  }


})();

console.log(themeName);
console.log(hostname);
console.log(agent);
console.log(setting[hostname]);
