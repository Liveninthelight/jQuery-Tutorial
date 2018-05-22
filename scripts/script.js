/*global $*/

//function myFunction(){}
    


var mylis = $("#points-of-sale li");

mylis.on("click", function(){
    $(this).css({"background" : "pink"});
    mylis.off("click");
});


// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)




var button = $("#lead-banner a");
 
button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
}

