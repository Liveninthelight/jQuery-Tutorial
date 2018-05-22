/*global $*/


$(document).ready(function(){
    $(".slide-button-up").on("click", function(){ 
    
        $("#lead-banner").slideUp(400);
        
        $("#lead-banner").slideToggle(1000, function(){
            alert("animation complete");
        });
    });
    
   
   
    // $(".slide-button-down").on("click", function(){ 
    
    //     $("#lead-banner").slideDown(4000, function(){
    //         alert("animation complete");
            
    //     });
    //  });
     
});