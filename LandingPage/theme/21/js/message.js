
;(function(global,$){
	var cssMap={
	 '.toast-message':'{position:fixed;left:50%;  max-width:720px;top:10%;text-align:center;transform:translateX(-50%);width:90%;transition:top .3s ease-out;opacity .3s ease-out;padding:45px 45px 45px 50px;z-index:2000; color:#fff}',
	 '.toast-message--success':'{background:rgba(0,0,0,.6);}',

 }
 function generateCss(map){
	 if(document.querySelector('#message_style')){
		 return
	 }
	 var str='';
	 for(var item in map){
		 str += item+map[item]
	 }
	 var st=createEle('style',{attrs:{id:'message_style'},props:{innerHTML:str}});
	 document.querySelector('head').appendChild(st);
	 updateIECss()
 }
 generateCss(cssMap);
 function createEle(tag,option,children){
	 var ele=document.createElement(tag);
	 if(option.attrs){
		 for(var i in option.attrs){
			 ele.setAttribute(i,option.attrs[i])
		 }
	 }
	 if(option.props){
		 for(var i in option.props){
			 ele[i]=option.props[i]
		 }
	 }

	 if(children&&children.length){
		 for(var i=0;i<children.length;i++){
			 if(children[i]){
				 ele.appendChild(children[i])
			 }
		 }
	 }
	 return ele
 }
 function closeEle(cb){
	 return function(){
		 !isIE()?window.event.target.closest(".toast-message").remove():window.event.target.parents(".toast-message").removeNode();
		 typeof cb=='function'&&cb();
	 }
 }
 function updateIECss(){
	 if(isIE()){
		 var str='.toast-icon--success:after{left:-5px;}.toast-icon--warning:after{left:-8px;}.toast-icon--error:after{left:-6px;}';
		 document.querySelector('#message_style').innerHTML+=str;
	 }
 }
 function isIE(){
	 return /(MSIE)|(Trident)|(Edge)/.test(navigator.userAgent)
 }
 $.message=function(options){
	 if(options){
		 options=typeof options=='string'?{type:'info',message:options}:options;
		 options.type=options.type||'info';
		 var ele=createEle('div',{attrs:{
			 class:"toast-message "+(options.type?'toast-message--'+options.type:''),
		 }},[options.type?createEle('i',{attrs:{
			 class:"toast-icon "+(options.type?'toast-icon--'+options.type:''),
		 }},[]):null,createEle('div',{attrs:{
			 class:"toast-message__content"
		 },props:{innerHTML:options.message}}),options.showClose?createEle('i',{attrs:{
			 class:"toast-message__closeBtn"
		 },props:{onclick:closeEle(options.onClose)}}):null]);
		 var currentEle=document.querySelector('.toast-message');
		 if(currentEle){
			 !isIE()?currentEle.remove():currentEle.removeNode();
		 }
		 ele.style.top=options.center?"40%":"0";
		 ele.style.opacity=".3";
		 document.body.appendChild(ele);
		 setTimeout(function(){
			 ele.style.top="60px";
			 ele.style.opacity="1";
			 if(options.center){
				 ele.style.top="50%";
				 ele.style.transform="translate(-50%)";
			 }
		 },isIE()?10:5);
		 if(options.duration!=0){
			 setTimeout(function(){
				 !isIE()?(ele&&ele.remove()):(ele&&ele.removeNode())
			 },options.duration||5000)
		 }

	 }
 }
 $.message.version="1.0";
})(this,typeof jQuery!='undefined'?jQuery:this);
