$(document).ready(function(){ 
    $(".hvr-fade").click(function(){
    	let val = $(this).text();
    	if (val === "AC"){
    		clearScreen();
    	}
    	else if (val === "CE"){
    		backSpace();
    	}
    	else if (val === "="){
    		evalScreen();
    	}
    	else if (val === "x"){
    		updateScreen("*");
    	}
    	else{
    		updateScreen(val);
    	}
    });

    function updateScreen(x){
		let screen = document.getElementById('screen')
		if (screen.value === "0" || screen.value === "ERROR"){
			screen.value = x;
		}
		else if (screen.value.includes("=")){
			let parts = screen.value.split('=');
			let answer = parts[parts.length - 1];
			screen.value = answer + x;
		}
		else{
			screen.value += x;
		}
	}

	function clearScreen(){
		let screen = document.getElementById('screen')
		screen.value = 0;
	}

	function evalScreen(){
		let screen = document.getElementById('screen')
		let expression = screen.value
		try{
			let answer = eval(expression)
			screen.value += " = " + answer
		}
		catch(error){
			screen.value = "ERROR"
		}
	}

	function backSpace(){
		let screen = document.getElementById('screen');
		let expression = screen.value;
		if (expression.length === 1 || expression.includes("=") || expression.includes("ERROR")){
			screen.value = 0;
		}
		else{
			let newexpression = expression.substring(0,expression.length-1);
			screen.value = newexpression;
		}
	}

});





