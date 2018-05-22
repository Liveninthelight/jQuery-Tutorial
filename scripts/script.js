 // FIrst and last
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});
 // First-Child and Last-child 
$("#contact ul:first").css({border: "2px solid red"});
$("#contact ul:last").css({border: "2px solid red"});
 //even
$("header nav li:even").css({border: "2px solid blue"});
 //Odd
$("header nav li:odd").css({border: "2px solid yellow"});
 
 
 //not
$("section:not('#contact')").css({border: "2px solid green"});
//Less than
$("#social-nav li:lt(3)").css({border: "2px solid blue"});
//Greater than
$("#social-nav li:gt(2)").css({border: "2px solid blue"});

$("div[class]").css({border: "2px solid pink"});
$("img[alt=quote]").css({border: "2px solid purple"});