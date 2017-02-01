var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var correctGuessMade = false;
var incorrect = 0;
var correct = 0;
var p1inputEl = $("#p1 .input");
var p2inputEl = $("#p2 .input");
var wrongLettersEl = $(".wrong_letters");
var gameNum = 0;
var array = [];
/*
$(".head").hide();
$(".leftarm").hide();
$(".body1").hide();
$(".rightarm").hide();
$(".body2").hide();
$(".leftleg").hide();
$(".rightleg").hide();
*/
$("#p1 .button").on("click", function(){
	//Refresh Blanks on p1 button click
	$(".fill").html("");
	var p1input = p1inputEl.val().toUpperCase();
	//Refresh array
	array = [];
	//Refresh Win Condition
	correct = 0;
	//Refresh Pole
	incorrect = 0;
	$(".head").css("display", "none");
	$(".leftarm").css("display", "none");
	$(".body1").css("display", "none");
	$(".rightarm").css("display", "none");
	$(".body2").css("display", "none");
	$(".leftleg").css("display", "none");
	$(".rightleg").css("display", "none");
	//Refresh wrong letters
	$(".alphabet").html("");
	//Refresh P2 input
	p2inputEl.val("");

	//Add Blanks equal to string length of p1input
	for (var i = 1; i <= p1input.length; i++){ 
		$(".fill").append("<div class='blank'></div> ");
	}
	gameNum++;
});

$("#p2 .button").on("click", function(){
var p1input = p1inputEl.val().toUpperCase();
var p2input = p2inputEl.val().toUpperCase();
//Fill Blanks With Correct Guess, and keep correctGuessMade = true
  	for (var i = 0; i < p1input.length; i++){
  		if 	(p1input[i] == p2input){  
  		$(".fill .blank").eq(i).html(p2input);
  		correctGuessMade = true;
  		correct++;
  		}
  	}
  	if (correct == p1input.length){
  		alert("you win!")
  	}

  	//When incorrect guess is made
  	if 	(correctGuessMade == false){
  		incorrect++;
  		/*alphabet strikethroughs NEW
  		//make p2input into an array 
  		//if inputted letter does not match any letters in wrongLettersEl do this code:
  		wrongLettersEl.append(p2input);
  		wrongLettersEl.css("text-decoration", "line-through");
  		wrongLettersEl.css("letter-spacing", "3px");
  		//console.log(wrongLetters);
  		*/
  	if (array.includes(p2input)){
  		alert("You already guessed this letter! A new body part has been added")
  	}	
  		else {
  			array.push(p2input);
  			$(".alphabet").show();
  			$(".alphabet").html(array); 	
  			$(".alphabet").css("text-decoration", "line-through");
  			$(".alphabet").css("letter-spacing", "8px");
  		}
  	console.log(array);
  	
  	//add body parts one by one	
  	if (incorrect == 1){
		$(".head").show(1000);
		$(".head").css("display", "inline");  		
  		}
  	if (incorrect == 2){
		$(".leftarm").show(1000);
		$(".leftarm").css("display", "inline");
		}
  	if (incorrect == 3){
		$(".body1").show(1000);
		$(".body1").css("display", "inline");  		
  		}  		
  	if (incorrect == 4){
		$(".rightarm").show(1000);
		$(".rightarm").css("display", "inline");
		}
	if (incorrect == 5){
		$(".body2").show(1000);
		$(".body2").css("display", "inline");
		}	
	if (incorrect == 6){
		$(".leftleg").show(1000);
		$(".leftleg").css("display", "inline");
		}  		
	if (incorrect == 7){
		$(".rightleg").show(1000);
		$(".rightleg").css("display", "inline");
		alert("One more incorrect guess and the man hangs!")
		}  		
  	if (incorrect > 7){
  		alert("you lose!");
  		}



	//alphabet strikethroughs OLD (TO REFACTOR USE A LOOP. BUT HOW?)
	/*$(".alphabet").show();
  	if (alphabet[0] == p2input){
  		$(".a").css("display", "inline");
		$(".a").css("text-decoration", "line-through");
	}
		else if (alphabet[0] !== p2input){
			$(".a").css("display", "none");
		}
	if (alphabet[1] == p2input){
		$(".b").css("display", "inline");
		$(".b").css("text-decoration", "line-through");
	}
	if (alphabet[2] == p2input){
		$(".c").css("display", "inline");
		$(".c").css("text-decoration", "line-through");
	}
	if (alphabet[3] == p2input){
		$(".d").css("display", "inline");
		$(".d").css("text-decoration", "line-through");
	}
	if (alphabet[4] == p2input){
		$(".e").css("display", "inline");
		$(".e").css("text-decoration", "line-through");
	}
	if (alphabet[5] == p2input){
		$(".f").css("display", "inline");
		$(".f").css("text-decoration", "line-through");
	}
	if (alphabet[6] == p2input){
		$(".g").css("display", "inline");
		$(".g").css("text-decoration", "line-through");
	}
	if (alphabet[7] == p2input){
		$(".h").css("display", "inline");
		$(".h").css("text-decoration", "line-through");
	}
	if (alphabet[8] == p2input){
		$(".i").css("display", "inline");
		$(".i").css("text-decoration", "line-through");
	}
	if (alphabet[9] == p2input){
		$(".j").css("display", "inline");
		$(".j").css("text-decoration", "line-through");
	}
	if (alphabet[10] == p2input){
		$(".k").css("display", "inline");
		$(".k").css("text-decoration", "line-through");
	}
	if (alphabet[11] == p2input){
		$(".l").css("display", "inline");
		$(".l").css("text-decoration", "line-through");
	}
	if (alphabet[12] == p2input){
		$(".m").css("display", "inline");
		$(".m").css("text-decoration", "line-through");
	}
	if (alphabet[13] == p2input){
		$(".n").css("display", "inline");
		$(".n").css("text-decoration", "line-through");
	}
	if (alphabet[14] == p2input){
		$(".o").css("display", "inline");
		$(".o").css("text-decoration", "line-through");
	}
	if (alphabet[15] == p2input){
		$(".p").css("display", "inline");
		$(".p").css("text-decoration", "line-through");
	}
	if (alphabet[16] == p2input){
		$(".q").css("display", "inline");
		$(".q").css("text-decoration", "line-through");
	}
	if (alphabet[17] == p2input){
		$(".r").css("display", "inline");
		$(".r").css("text-decoration", "line-through");
	}
	if (alphabet[18] == p2input){
		$(".s").css("display", "inline");
		$(".s").css("text-decoration", "line-through");
	}
	if (alphabet[19] == p2input){
		$(".t").css("display", "inline");
		$(".t").css("text-decoration", "line-through");
	}
	if (alphabet[20] == p2input){
		$(".u").css("display", "inline");
		$(".u").css("text-decoration", "line-through");
	}
	if (alphabet[21] == p2input){
		$(".v").css("display", "inline");
		$(".v").css("text-decoration", "line-through");
	}
	if (alphabet[22] == p2input){
		$(".w").css("display", "inline");
		$(".w").css("text-decoration", "line-through");
	}
	if (alphabet[23] == p2input){
		$(".x").css("display", "inline");
		$(".x").css("text-decoration", "line-through");
	}
	if (alphabet[24] == p2input){
		$(".y").css("display", "inline");
		$(".y").css("text-decoration", "line-through");
	}
	if (alphabet[25] == p2input){
		$(".z").css("display", "inline");
		$(".z").css("text-decoration", "line-through");
	}
	*/
}
	correctGuessMade = false;
});