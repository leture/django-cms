/*##################################################|*/
/* #CMS.SETUP# */
(function namespacing() {
	// assign global namespaces
	window.CMS = {
		'$': window.django.jQuery.noConflict(),
		'Class': Class.$noConflict(),
		'API': {}
	};
})();