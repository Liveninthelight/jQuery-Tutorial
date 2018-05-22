/*global $*/
// SOME CODE TO PULL IN MY LATEST TWEET //
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>";

$("#tweets div p").after(tweet);
$("#tweets div").html(tweet);
$("#tweets div p").text(tweet);

// ADDING & CHANGING CONTENT

/* 
.append() adds content to bottom of the element
.prepend() adds content to top of element
.before() adds content before element
.after() adds content after element
.html() changes the whole html of the element
.text() changes the text of an element 
*/