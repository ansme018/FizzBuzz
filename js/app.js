//FizzBuzz
//1 to 100.  
//Divisble by 3- "fizz"
//Divisble by 5- "buzz"
//Divisble by 3 and 5 "fizz buzz"
//Neither just print number to DOM 

var number = i;
for (var i=1; i<=100; i++)
	{if (i % 3 ==0 && i % 5 == 0) 
		{console.log("fizzbuzz")};
	else if (i % 3 == 0) 
		{console.log("fizz")};
	else if (i % 5 == 0) 
		{console.log("buzz")};
	else {
		console.log(i);
	}
}

	


