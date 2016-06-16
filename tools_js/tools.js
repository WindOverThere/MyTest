function $( selector,content ){
	var firstChar = selector.substring(0,1);

	content = content || document;

	if( firstChar === "#" ){
		return document.getElementById( selector.slice(1) );
	}else if( firstChar === "." ){
		//现获取还指定范围的所有的元素
		var allElment = content.getElementsByTagName("*");
		var arr = [];
		//循环每一个元素
		for( var i = 0; i < allElment.length; i++ ){
			//从每个元素身上获取到className
			var classNames = allElment[i].className;
			//把元素身上的class用空格分割成数组
			var classArr = classNames.split(" ");

			//循环这个classArr，看一下每一项是否跟传进来的class匹配，如果匹配那么就把元素放在数组中，停止for循环
			for( var j = 0; j < classArr.length; j++ ){
				if( classArr[j] === selector.slice(1) ){
					arr.push( allElment[i] );
					break;
				}
			}
		}
		return arr;

	}else{
		return content.getElementsByTagName(selector);
	}
}
function getStyle( obj,attr ){
	if( obj.currentStyle ){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj)[attr];
	};
};
function addZero(time){
	return time<10 ? "0"+time:time;
}
function doMove(obj,attr,speed,target,callBack){
	if(obj.timer) return;
	var num = parseFloat(getStyle( obj,attr )); 
	speed = num > target ? -Math.abs(speed) : Math.abs(speed);
	obj.timer = setInterval(function (){
		num += speed;
		if( speed > 0 && num >= target || speed < 0 && num <= target  ){
			num = target;

			clearInterval(obj.timer);
			obj.timer = null; //设置保存定时器的的值为null
			obj.style[attr] = num + "px";

			(typeof callBack === "function") && callBack();

		}else{
			obj.style[attr] = num + "px";
		}
		

	},30)	
};

function shake( obj,attr,speed ,callBack){
	//6. 如果定时器已经在开启，移入的时候，就不向下执行
	if(obj.timer) return;
	// 1.
	var arr = [],
		l = parseFloat(getStyle(obj,attr)); //获取一下元素最开始的位置。
	//2.
	for( var i = speed; i > 0; i-=3 ){
		arr.push(-i,i);
	};
	//4. 始终保持最后一个数为0；
	arr.push(0);
	//3.开定时器，变换left值
	var n = 0;
	obj.timer = setInterval(function(){
		obj.style[attr] = l + arr[n] + "px";
		n++;
		// 5. 清掉定时器
		if( n > arr.length - 1 ){
			clearInterval(obj.timer);
			obj.timer = null;
			if(typeof callBack === "function"){
				callBack();
			}
		}
	},30)	
};

function first(element){
	var firstElement = element.firstElementChild || element.firstChild;

	if( !firstElement || firstElement.nodeType !== 1 ){
		return null
	}else{
		return firstElement;
	}
};
function last(element){
	var lastElement = element.lastElementChild || element.lastChild;
	if( !lastElement || lastElement.nodeType !== 1 ){
		return null
	}else{
		return lastElement;
	}
}
function next(element){
	var nextElement = element.nextElementSibling || element.nextSibling;
	if( !nextElement || nextElement.nodeType !== 1 ){
		return null
	}else{
		return nextElement;
	}
};
function prev(element){
	var prevElement = element.previousElementSibling || element.previousSibling;
	if( !prevElement || prevElement.nodeType !== 1 ){
		return null
	}else{
		return prevElement;
	}
}

function getOffset( obj ){
	var left = 0, top = 0;
	//先找到obj到 obj的定位父级的偏移量
	// 然后依次向上找 obj的定位父级的定位父级的偏移量

	//border在ie下的默认值为medium，其余浏览器中 0
	
	//刚上来的时候，先保存一下，要获取offsetLeft的这个元素的边框
	var borderLeft = parseInt( getStyle(obj,"borderLeftWidth") );
	var borderTop = parseInt( getStyle(obj,"borderTopWidth") );
	borderLeft = isNaN( borderLeft )? 0 : borderLeft;
	borderTop = isNaN( borderTop )? 0 : borderTop;

	while( obj ){
		/*var borderL = parseInt( getStyle(obj,"borderLeftWidth") ) || 0;
		var borderT = parseInt( getStyle(obj,"borderTopWidth") ) || 0;*/
		var borderL = parseInt( getStyle(obj,"borderLeftWidth") );
		var borderT = parseInt( getStyle(obj,"borderTopWidth") );

		borderL = isNaN( borderL )? 0 : borderL;
		borderT = isNaN( borderT )? 0 : borderT;

		left += obj.offsetLeft+borderL;
		top += obj.offsetTop+borderT;

		
		obj = obj.offsetParent;

	}

	return {
		left:left-borderLeft,
		top:top-borderTop
	};

}