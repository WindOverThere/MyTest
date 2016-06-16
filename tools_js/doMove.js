
	function doMove(obj,attr,target,speed){
		var current = parseInt(getStyle( obj,attr));
		var timer = null;

		if (current < target) {
			speed = Math.abs(speed);
		} else {
			speed = -Math.abs(speed);
		}

		clearInterval(obj.timer);
		obj.timer = setInterval(function (){
			current += speed;
			if( current >= target && speed  > 0 || current <= target && speed < 0 ){
				clearInterval(obj.timer);
				current = target;
			};
			obj.style[attr] = current + "px";
		},30)		
	};
