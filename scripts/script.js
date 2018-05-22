/*global $*/

    
$("#lead-banner").click(function(){
    alert("You double clicked me");
});

$("#lead-banner").on("dblclick", function(){
    alert("You double clicked me");
});

$("#lead-banner").dblclick( function(){
    alert("You double clicked me");
    $("#lead-banner").off("dblclick");
});

$("#lead-banner").dblclick(function(){
    alert('you double clicked me');
    $("#lead-banner").off("dblclick");
});






// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)




var button = $("#lead-banner a");
 
button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
}

