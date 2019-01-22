var coll = document.getElementsByClassName("js-coll");

//console.log(document.getElementsByTagName("body")[0]);
$("#js-container-1").ready(function(){
  	console.log($("#js-container-1").outerHeight())
});
//document.getElementsByTagName("body")[0].onresize = resetSizes();

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //this.classList.toggle("active");

    var content = this.childNodes[5];
    if (content.style.maxHeight){
      	content.style.maxHeight = null;
    } else {
    	this.style.alignSelf = "flex-start";
      	content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/*
function resetSizes() {
	for(var f = 0; f < coll.length; f++) {
		var x = document.getElementById("js-container-1").scrollHeight;

		console.log(coll[f].childNodes[5]);

		if(!coll[f].childNodes[5].style.maxHeight) {
			coll[f].height = x + "px";
		}
	}
}
*/