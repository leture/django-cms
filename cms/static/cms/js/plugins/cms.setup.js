/*##################################################|*/
/* #CMS.SETUP# */
(function namespacing() {
	// assign global namespaces
	window.CMS = {
		'$': django.jQuery.noConflict(),
		'Class': Class.$noConflict(),
		'API': {}
	};
})();