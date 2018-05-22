//Not best practice 
$("#contact-methods").css({border: "2px solid red"}).next().css({border:"2px solid green"}).closest("section").css({border: "2px solid blue"});

//Best Practice 
$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"}); 