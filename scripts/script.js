$(document).ready(function() {
   alert('jQuery loaded');
}); 

$("img[alt=quote]").css({border: "2px solid purple"});

/* Console Example Below

>  document.getElementById("page-title");
<     <h2 id="page-title">Kung Fu Your Net Skills!</h2>

> $("#page-title");
< [   <h2 id="page-title">Kung Fu Your Net Skilld!</h2>]

> var heading = $("page-title");
< undefined 

> heading.css({position: "relative});
< [  <h2 id="page-title">Kung Fu Your Net Skills!</h2>]

> heading.animate({left: 100});
< [  <h2 id="page-title" style="position: relative; left: < 100px;">Kung Fu Your Net Skills!</h2>]

> heading[0].animate({left:20});
< Animation {}
> 