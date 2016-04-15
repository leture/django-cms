(function($){ // block scope
	$.fn.log = function (msg) {
		if (!window.console || !console) return;
		if (window.console || console.firebug){
			msg = msg || '';
			if(msg !== '') msg += ': ';
			console.log("%s%o", msg, this);
		}
		return this;
	};
	$.extend({
		log : function (msg) {
			if (!window.console || !console) return;
			if (window.console || console.firebug) {
				console.log("%s", msg);
			}
		}
	});
})(django.jQuery);