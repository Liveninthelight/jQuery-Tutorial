/*global $*/


$(document).ready(function(){
    $("*").on("click", function(e){
        console.log(e.target);
        console.log("the event type is: " + e.type);
        console.log("x-coordinate of the event is: " + e.pageX);
        console.log("y-coordinate of the event is: " + e.pageY);
        e.stopPropagation(); 
    });
});