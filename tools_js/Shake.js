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
}
