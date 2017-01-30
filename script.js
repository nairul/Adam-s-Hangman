var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
$(".alphabet").html(alphabet);

$(".player .button").on("click", function(){
	var p1input = $("#p1 .input").val();
	var p2input = $("#p2 .input").val();
  
  	$(".fill #blank1").html(p2input[0]);
  	$(".fill #blank2").html(p2input[1]);
  	$(".fill #blank3").html(p2input[2]);
  	$(".fill #blank4").html(p2input[3]);
  
  	if (p1input[0] == p2input) {
  		console.log("match!");
  	}
  	else {
  		console.log("no match!");
  	}
});

$("#strike .button").on("click", function(){
	var input = $("#strike .input").val();

	if (alphabet[0] == input){
		$(".alphabet").css("text-decoration", "line-through");
	}
});


//var chars = "overpopulation".split('');
//console.log(chars);
//console.log(chars[1]);