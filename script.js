$("body").addClass("bodystyle");
$("h2").css("color","#D82148");
let i= 0;
$(document).on("keypress",function(e){
  console.log(e.key);
  $("h2").text(e.key);
  if(i<1){
     $("h2").after("<h1>Click on Text</h1>");
  setTimeout(function() {
    $("h1").remove();
  },1000);
    i++;
  }
});

  $("h2").on("click",function () {
  $("h2").css("color","#085E7D");
  $(".bodystyle").css('background-color',"#B4CFB0");
  $("h2").slideUp().slideDown().animate({opacity:0.6});
});
