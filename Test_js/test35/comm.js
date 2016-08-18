function $(selector,content){
	if( selector.charAt(0) === "#" ){
		return document.getElementById(selector.slice(1))
	}else{
		content = content || document;
		return 	content.getElementsByTagName(selector);
	};
};
function getStyle( obj,attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];		
};
function doMove(obj,attr,target,speed,callBack){
	var cur = parseInt( getStyle(obj,attr) );
	speed = cur < target ? Math.abs(speed) : -Math.abs(speed);
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		cur += speed;
		if(  cur >= target && speed > 0 ||  cur <= target && speed < 0){
			clearInterval(obj.timer);
			obj.timer = null;
			cur = target;
			obj.style[attr] = cur + "PX";
			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";	
		}
	},30);
}
function fnShake(obj,attr,rate,callBack){
	//console.log( obj.timer1 );
	if( obj.timer1 ) return;
	var cur = parseInt(getStyle(obj,attr));
	var arr = [];
	var n = 0;

	for (var i = rate; i > 0; i-=5) {
		arr.push(-i,i);
	}
	arr.push(0);
	obj.timer1 = setInterval(function (){
		obj.style[attr] = arr[n]+cur + "px";
		n++;
		if ( n >= arr.length) {
			clearInterval(obj.timer1);
			callBack && callBack();
			obj.timer1 = null;
		}			
	},30)
}