//FizzBuzz
//Rules: 1 to 100; Divisble by 3:fizz; Divisble by 5: "buzz"; Divisble by 3 and 5 "fizz buzz"


	


//
//Loop through numbers

$(document).ready(function() {
	function countNumbers(maxValue){
		for (var i = 1; i <=maxValue; i++)
			{if (i % 3 ==0 && i % 5 == 0){ 
				$('#fizzbuzz ul').append("FizzBuzz ");
			} else if (i % 3 == 0){
				$('#fizzbuzz ul').append("Fizz ");
			}else if (i % 5 == 0) {
				$('#fizzbuzz ul').append("Buzz ");
			}else{
				$('#fizzbuzz ul').append(i + " ");
			}
		}		
	}

	$('#SubmitButton').on('click', function(e) {
		var fizznumber =$('#fizznumber').val();
			
		if (fizznumber % 1 ==0 && fizznumber <= 100) {
			$('#fizzbuzz ul').empty();
			countNumbers(fizznumber);
			$('#fizznumber').val("");
		}else {
			alert("Type only numbers between 1 and 100.");
			$("fizznumber").val("");
		}
	});

});	


