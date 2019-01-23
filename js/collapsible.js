/*var coll = document.getElementsByClassName("js-coll");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //this.classList.toggle("active");

    var content = this.childNodes[5];
    if (content.style.maxHeight){
      	content.style.maxHeight = null;
    } else {
        $(this).css('height', 'auto');
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
*/

$(document).load(function() {
  assignClickEvents();
});

function assignClickEvents() {

  var collapsibles = new Array();

  $(".js-coll").each(function() {
    collapsibles.push($(this));

    $(this).click(function() {
      var content = $(this).find(".collapsible-content");

      if(content.css("max-height") != "0px") {
        content.css("max-height", "0px");
      } else {
        $(this).css('height', 'auto');
        content.css("max-height", content.prop("scrollHeight") + "px");
      }
    });
  });
}

function equalizeHeights() {
  var heights = new Array();

  $(".js-coll").each(function() {

    console.log($(this).find(".collapsible-content").css("max-height"));

    if($(this).find(".collapsible-content").css("max-height") == "0px") {
    $(this).css('height', 'auto');

      heights.push($(this).height());
    }
  });

  var maxHeight = Math.max.apply(Math, heights);

  $(".js-coll").each(function() {
    if($(this).find(".collapsible-content").css("max-height") == "0px") {
      $(this).css("height", maxHeight + "px");
    }
  });
}