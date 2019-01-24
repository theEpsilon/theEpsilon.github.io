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

    $(this).click(async function() {
      var content = $(this).find(".collapsible-content");

      if(content.css("max-height") != "0px") {
        content.css("max-height", "0px");
        await sleep(260);
        console.log("resizing");
        equalizeHeights();
      } else {
        $(this).css("height", "auto");
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
      console.log("entered if condition");
      $(this).css("height", "auto");

      heights.push($(this).height());
    }
  });

  var maxHeight = Math.max.apply(Math, heights);

  console.log(maxHeight);

  $(".js-coll").each(function() {
    if($(this).find(".collapsible-content").css("max-height") == "0px") {
      $(this).css("height", maxHeight + "px");
    }
  });
}