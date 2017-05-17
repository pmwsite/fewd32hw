//Create Variable and Set Initial Value
var theScore = 0



// Functions

	// Add 5
	function add5(){
		theScore = 5 + theScore;
		jQuery('#result').text(theScore);
	}


	// Add 10
	function add10(){
		theScore = 10 + theScore;
		jQuery('#result').text(theScore);
	}


	// Minus 1
	function minus1(){
		theScore = theScore - 1
		jQuery('#result').text(theScore);
	}


	// Set Zero
	function setZero(){
		theScore = 0;
		jQuery('#result').text(theScore);
	}

// Actions

	// Click Add 5
	jQuery ('#add5').click(add5);

	//Click Add 10
	jQuery('#add10').click(add10);

	// Click Minus 1
	jQuery('#sub1').click(minus1);

	// Set Zero
	jQuery ('#zero').click(setZero);


