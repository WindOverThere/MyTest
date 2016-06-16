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
			cur = target;
			obj.style[attr] = cur + "PX";
			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";	
		}
	},30);
};
function shake(obj,attr,speed,callBack){
	if( obj.timer ) return;
	var cur = parseInt(getStyle(obj,attr));
	var arr = [];
	for( var i = speed; i > 0 ; i-=3 ){
		arr.push(-i,i);
	}
	arr.push(0);
	var n = 0;
	obj.timer = setInterval(function (){
		obj.style[attr] = arr[n]+cur + "px";
		n++;
		if( n >= arr.length ){
			clearInterval(obj.timer);
			obj.timer = null;
			if(typeof callBack === "function"){
				callBack();
			}
		}
	},30)	
};
function wheelDirection(obj,upFn,downFn){
	obj.onmousewheel = fn;
	if( obj.addEventListener ){
		obj.addEventListener("DOMMouseScroll",fn,false);
	};
	function fn(ev){
		var e = ev || event;
		var direction = true;
		if( e.wheelDelta ){
			direction = e.wheelDelta > 0 ? true : false; //IE & chrome
		}else{
			direction = e.detail < 0 ? true : false;	//FF
		};
		if ( direction ) {
			typeof upFn === "function" && upFn(e);
		} else {
			typeof downFn === "function" && downFn(e);
		};
		if( e.preventDefault ){
			e.preventDefault();
		};
		return false;
	};
};