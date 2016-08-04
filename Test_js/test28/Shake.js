
function fnShake(obj,attr,rate){
	if( obj.timer ) return;
	var cur = parseInt(getStyle(obj,attr));
	var arr = [];
	var n = 0;
	for (var i = rate; i > 0; i-=5) {
		arr.push(-i,i);
	}
	arr.push(0);
	obj.timer = setInterval(function (){
		obj.style[attr] = arr[n]+cur + "px";
		n++;
		if ( n >= arr.length) {
			clearInterval(obj.timer);
			obj.timer = null;
		}			
	},30)
}
