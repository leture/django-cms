WYMeditor.SKINS.compact = {

    init: function(wym) {

        //move the containers panel to the top area
        django.jQuery(wym._options.containersSelector + ', ' +
            wym._options.classesSelector, wym._box)
          .appendTo( django.jQuery("div.wym_area_top", wym._box) )
          .addClass("wym_dropdown")
          .css({"margin-right": "10px", "width": "120px", "float": "left"});

        //render following sections as buttons
        django.jQuery(wym._options.toolsSelector, wym._box)
          .addClass("wym_buttons")
          .css({"margin-right": "10px", "float": "left"});

        //make hover work under IE < 7
        django.jQuery(".wym_section", wym._box).hover(function(){
          django.jQuery(this).addClass("hover");
        },function(){
          django.jQuery(this).removeClass("hover");
        });

        var postInit = wym._options.postInit;
        wym._options.postInit = function(wym) {

            if (postInit) {
                postInit.call(wym, wym);
            }
            var rule = {
                name: 'body',
                css: 'background-color: #f0f0f0;'
            };
            wym.addCssRule( wym._doc.styleSheets[0], rule);
        };
    }
};
