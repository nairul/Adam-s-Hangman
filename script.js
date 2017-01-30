var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var correctGuessMade = false;
//$(".alphabet").html(alphabet);

$("#p2 .button").on("click", function(){

var p1input = $("#p1 .input").val();
var p2input = $("#p2 .input").val();	
//Nayana recommends use nested if/else statements here...
	if (p1input[0] == p2input){  
  		$(".fill #blank0").html(p2input);
  		correctGuessMade = true;
  	}

  	if (p1input[1] == p2input){  
  		$(".fill #blank1").html(p2input);
  		correctGuessMade = true;
  	}

  	if (p1input[2] == p2input){  
  		$(".fill #blank2").html(p2input);
  		correctGuessMade = true;
  	}

  	if (p1input[3] == p2input){  
  		$(".fill #blank3").html(p2input);
  		correctGuessMade = true;
  	}
  	//WHY DID THIS NEED TO BE "==" ?
  	if (correctGuessMade == false){
  		console.log("false!");
  		$(".head").css("text-decoration", "line-through");		
  		
  	}
 
  //HERE'S THE javascript TO START HANGING THE MAN ONCE YOU FIGURE OUT WHERE TO PUT IT!	
 //$(".pole .head").css("text-decoration," "line-through");
  					

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