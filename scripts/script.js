/*global $*/

 console.log($("#social-nav").css("position")); // checking value
 console.log($("#social-nav").css("top"));
 console.log($("#social-nav").css("top", "-200px")).css("left", "100px");

var myObject = {
    
    "height" : "40",
    "speed" : "100"
}
 
 
 ("#social-nav").css({
    "top" : "-400px",
    "left" : "150px",
    "opacity" : "0.5",
    "border-top" : "4px solid red"
    
});