$(".player .button").on("click", function(){
  var p1input = $("#p1 .input").val().split('');
  var p2input = $("#p2 .input").val().split('');
  $(".fill #blank1").html(p1input[0]);
  $(".fill #blank2").html(p1input[1]);
  $(".fill #blank3").html(p1input[2]);
  $(".fill #blank4").html(p1input[3]);
  console.log(p1input);
  console.log(p2input);
});

//var chars = "overpopulation".split('');
//console.log(chars);
//console.log(chars[1]);