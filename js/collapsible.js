$(document).ready(function() {
  equalizeHeights();
  assignClickEvents();

  var iv = null;

  $(window).resize(function() {
    if(iv != null) {
      window.clearTimeout(iv);
    }
    iv = setTimeout(function() {
      equalizeHeights();
    }, 5);
  });
});

/*
Called upon page loadup, assigning click listeners to collapsible items
*/

function assignClickEvents() {

  $(".js-coll").each(function() {

    $(this).find(".toggle").click(function() {

      var correspLabel = $("label[for='"+$(this).attr("id")+"']");

      if ($(this).is(":checked")) {
        correspLabel.find(".dropdown-icon").css({
          '-webkit-transform': "rotate(180deg)",
          '-moz-transform': "rotate(180deg)",
          '-ms-transform': "rotate(180deg)",
          '-o-transform': "rotate(180deg)", 
          'transform': "rotate(180deg)",
          '-webkit-transition': "0.2s",
          '-moz-transition': "0.2s",
          '-ms-transition': "0.2s",
          '-o-transition': "0.2s",
          'transition': "0.2s"});
      } else {
        correspLabel.find(".dropdown-icon").css({
          '-webkit-transform': "rotate(0deg)",
          '-moz-transform': "rotate(0deg)",
          '-ms-transform': "rotate(0deg)",
          '-o-transform': "rotate(0deg)", 
          'transform': "rotate(0deg)",
          '-webkit-transition': "0.2s",
          '-moz-transition': "0.2s",
          '-ms-transition': "0.2s",
          '-o-transition': "0.2s",
          'transition': "0.2s",
          '-webkit-transition-delay': "0.1s",
          '-moz-transition-delay': "0.1s",
          '-ms-transition-delay': "0.1s",
          '-o-transition-delay': "0.1s",
          'transition-delay': "0.1s"});
      }
    });
  });
}

function equalizeHeights() {
  var heights = new Array();

  $(".banner-header").each(function() {

    if($(this).find(".text").css("margin-bottom") != "0px") {
      $(this).find(".text").css("margin-bottom", "0px");
    }

    heights.push($(this).outerHeight(true));

  });

  var maxHeight = Math.max.apply(Math, heights);

  $(".banner-header").each(function() {

  	var outerheight = $(this).outerHeight(true);

  	if(maxHeight > outerheight) {
  		$(this).find(".text").css("margin-bottom", (maxHeight - outerheight) + "px");
  	}
  });
}