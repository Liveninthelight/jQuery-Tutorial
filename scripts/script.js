/*global $*/


$(document).ready(function(){
    
    function complete() {
        alert('Animation Complete');
    }
    $("section > h2").on("click", function(event){
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "swing", complete);
    });                                                                //linear
});