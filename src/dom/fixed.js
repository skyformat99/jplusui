/** * @author  */include("dom/base.js");Dom.fixed = navigator.isQuirks ? function(id){	id = Dom.get(id);	if(id.getStyle('position') !== 'fixed'){		return;	}		var pos = id.getOffset();	var elem = id.node;	elem.runtimeStyle.position = 'absolute';		if(elem.currentStyle.right == 'auto'){		elem.style.right = elem.currentStyle.left;		id.addClass('ie6-fixed-left');	} else if(elem.currentStyle.left == 'auto'){		elem.style.right = elem.currentStyle.right;		id.addClass('ie6-fixed-right');	}		if(elem.currentStyle.bottom == 'auto'){		elem.style.bottom = elem.currentStyle.top;		id.addClass('ie6-fixed-top');	} else if(elem.currentStyle.top == 'auto'){		elem.style.bottom = elem.currentStyle.bottom;		id.addClass('ie6-fixed-bottom');	}		elem.runtimeStyle.right = elem.runtimeStyle.bottom = 'auto';		} : Function.empty;