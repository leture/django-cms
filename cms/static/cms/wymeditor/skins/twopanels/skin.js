WYMeditor.SKINS.twopanels = {

    init: function(wym) {

        //move the containers panel to the left area
        django.jQuery(wym._box).find(wym._options.containersSelector)
          .appendTo("div.wym_area_left");

        //render following sections as panels
        django.jQuery(wym._box).find(wym._options.classesSelector + ', ' +
          wym._options.containersSelector)
          .addClass("wym_panel");

        //render following sections as buttons
        django.jQuery(wym._box).find(wym._options.toolsSelector)
          .addClass("wym_buttons");

        // auto add some margin to the main area sides if left area
        // or right area are not empty (if they contain sections)
        django.jQuery(wym._box).find("div.wym_area_right ul")
          .parents("div.wym_area_right").show()
          .parents(wym._options.boxSelector)
          .find("div.wym_area_main")
          .css({"margin-right": "155px"});

        django.jQuery(wym._box).find("div.wym_area_left ul")
          .parents("div.wym_area_left").show()
          .parents(wym._options.boxSelector)
          .find("div.wym_area_main")
          .css({"margin-left": "115px"});

        //make hover work under IE < 7
        django.jQuery(wym._box).find(".wym_section").hover(function(){
          django.jQuery(this).addClass("hover");
        },function(){
          django.jQuery(this).removeClass("hover");
        });
    }
};
