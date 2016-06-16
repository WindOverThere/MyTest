
	function $(selector,content){
	    if( selector.charAt(0) === "#" ){
	        return document.getElementById(selector.substring(1))
	    }else{
	        content = content || document;
	        return  content.getElementsByTagName(selector);
	    };
	};
