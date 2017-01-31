var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var correctGuessMade = false;
var incorrect = 0;
var p1inputEl = $("#p1 .input");
var p2inputEl = $("#p2 .input");
var gameNum = 0;

$(".head").hide();
$(".leftarm").hide();
$(".body1").hide();
$(".rightarm").hide();
$(".body2").hide();
$(".leftleg").hide();
$(".rightleg").hide();

$("#p1 .button").on("click", function(){
	//Refresh Blanks on p1 button click
	$(".fill").html("");
		var p1input = p1inputEl.val();
		//Add Blanks equal to string length of p1input
		for (var i = 1; i <= p1input.length; i++){ 
			$(".fill").append("<div class='blank'></div> ");
		}
	gameNum++;
});

$("#p2 .button").on("click", function(){
var p1input = p1inputEl.val();
var p2input = p2inputEl.val();
//Fill Blanks With Correct Guess, and keep correctGuessMade = true
  	for (var i = 0; i < p1input.length; i++){
  		if 	(p1input[i] == p2input){  
  		$(".fill .blank").eq(i).html(p2input);
  		correctGuessMade = true;
  		}
  	}
  	//Add Body Parts Based on value of incorrect guesses, and end game after more than 6 incorrect guesses
  	if 	(correctGuessMade == false){
  		incorrect++;
  		}
  	if (incorrect == 1){
		$(".head").show(1000);  		
  		}
  	if (incorrect == 2){
		$(".leftarm").show(1000);
		}
  	if (incorrect == 3){
		$(".body1").show(1000);  		
  		}  		
  	if (incorrect == 4){
		$(".rightarm").show(1000);
		}
	if (incorrect == 5){
		$(".body2").show(1000);
		}	
	if (incorrect == 6){
		$(".leftleg").show(1000);
		}  		
	if (incorrect == 7){
		$(".rightleg").show(1000);
		}  		
  	if (incorrect > 7){
  		alert("you lose!");
  		}			

//alphabet strikethroughs (TO REFACTOR USE A LOOP)
  	if (alphabet[0] == p2input){
		$(".a").css("text-decoration", "line-through");
	}
	if (alphabet[1] == p2input){
		$(".b").css("text-decoration", "line-through");
	}
	if (alphabet[2] == p2input){
		$(".c").css("text-decoration", "line-through");
	}
	if (alphabet[3] == p2input){
		$(".d").css("text-decoration", "line-through");
	}
	if (alphabet[4] == p2input){
		$(".e").css("text-decoration", "line-through");
	}
	if (alphabet[5] == p2input){
		$(".f").css("text-decoration", "line-through");
	}
	if (alphabet[6] == p2input){
		$(".g").css("text-decoration", "line-through");
	}
	if (alphabet[7] == p2input){
		$(".h").css("text-decoration", "line-through");
	}
	if (alphabet[8] == p2input){
		$(".i").css("text-decoration", "line-through");
	}
	if (alphabet[9] == p2input){
		$(".j").css("text-decoration", "line-through");
	}
	if (alphabet[10] == p2input){
		$(".k").css("text-decoration", "line-through");
	}
	if (alphabet[11] == p2input){
		$(".l").css("text-decoration", "line-through");
	}
	if (alphabet[12] == p2input){
		$(".m").css("text-decoration", "line-through");
	}
	if (alphabet[13] == p2input){
		$(".n").css("text-decoration", "line-through");
	}
	if (alphabet[14] == p2input){
		$(".o").css("text-decoration", "line-through");
	}
	if (alphabet[15] == p2input){
		$(".p").css("text-decoration", "line-through");
	}
	if (alphabet[16] == p2input){
		$(".q").css("text-decoration", "line-through");
	}
	if (alphabet[17] == p2input){
		$(".r").css("text-decoration", "line-through");
	}
	if (alphabet[18] == p2input){
		$(".s").css("text-decoration", "line-through");
	}
	if (alphabet[19] == p2input){
		$(".t").css("text-decoration", "line-through");
	}
	if (alphabet[20] == p2input){
		$(".u").css("text-decoration", "line-through");
	}
	if (alphabet[21] == p2input){
		$(".v").css("text-decoration", "line-through");
	}
	if (alphabet[22] == p2input){
		$(".w").css("text-decoration", "line-through");
	}
	if (alphabet[23] == p2input){
		$(".x").css("text-decoration", "line-through");
	}
	if (alphabet[24] == p2input){
		$(".y").css("text-decoration", "line-through");
	}
	if (alphabet[25] == p2input){
		$(".z").css("text-decoration", "line-through");
	}
	correctGuessMade = false;
});