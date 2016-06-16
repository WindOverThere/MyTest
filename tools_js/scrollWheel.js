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