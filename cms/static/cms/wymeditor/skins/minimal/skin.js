django.jQuery.fn.selectify = function() {
    return this.each(function() {
        django.jQuery(this).hover(
            function() {
                django.jQuery("h2", this).css("background-position", "0px -18px");
                django.jQuery("ul", this).fadeIn("fast");
            },
		    function() {
		        django.jQuery("h2", this).css("background-position", "");
		        django.jQuery("ul", this).fadeOut("fast");
		    }
        );
    });
};

WYMeditor.SKINS.minimal = {
    //placeholder for the skin JS, if needed

    //init the skin
    //wym is the WYMeditor.editor instance
    init: function(wym) {

        //render following sections as dropdown menus
        django.jQuery(wym._box).find(wym._options.toolsSelector + ', ' + wym._options.containersSelector + ', ' + wym._options.classesSelector)
          .addClass("wym_dropdown")
          .selectify();


    }
};
