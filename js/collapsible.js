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

function assignClickEvents() {

  var collapsibles = new Array();

  $(".js-coll").each(function() {
    collapsibles.push($(this));

    $(this).click(function() {
      var content = $(this).find(".collapsible-content");

      if(content.css("max-height") != "0px") {
        content.css("max-height", "0px");

        content.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
          equalizeHeights();
          content.off();
        });

      } else {
        content.css("max-height", content.prop("scrollHeight") + "px");
        $(this).css("height", "auto");
      }
    });
  });
}

function equalizeHeights() {
  var heights = new Array();

  $(".js-coll").each(function() {

    //console.log($(this).find(".collapsible-content").css("max-height"));

    if($(this).find(".collapsible-content").css("max-height") == "0px") {
      $(this).css("height", "auto");
      $(this).find(".text").css("margin-bottom", "0px");

      heights.push($(this).outerHeight(true));
    }
  });

  var maxHeight = Math.max.apply(Math, heights);

  console.log(maxHeight);

  $(".js-coll").each(function() {
    if($(this).find(".collapsible-content").css("max-height") == "0px") {
      var outerheight = $(this).outerHeight(true);
      console.log("Max-height: " + maxHeight);
      console.log("Outer-height: " + outerheight);
      console.log("Margin to set: " + (maxHeight - outerheight));
      console.log(maxHeight > outerheight);
      if(maxHeight > outerheight) {
        $(this).find(".text").css("margin-bottom", (maxHeight - outerheight) + "px");
      }
    }
  });
}
















