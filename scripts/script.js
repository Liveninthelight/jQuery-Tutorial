/*global $*/


$(document).ready(function(){

    $("section > h2").on("click", function(){ 
        $(this).fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8);
        $(this).fadeOut().fadeIn();
        $(this).animate({"opacity" : "0.5"});
     });
 });
 