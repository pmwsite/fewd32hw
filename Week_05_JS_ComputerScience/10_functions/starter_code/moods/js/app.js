//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

	jQuery("#submit-btn").click(function(e) {
		e.preventDefault();
		var myMood = jQuery("#mood").val();
		jQuery("#mood").val("");
		myMood = myMood.toLowerCase().trim();
		




		if(myMood == 'excited' || myMood == "ecstatic" || myMood == "fantastic"){
			jQuery(".moodring div").attr("class", "excited");
		} else if (myMood == "happy" || myMood == "good" || myMood == "great") {
			jQuery(".moodring div").attr("class", "happy");

		};



	});








});

   // Create a function that runs whenever the submit button is clicked

        //prevent the submit button from refreshing the page


        //Create a variable called moodvalue and get the value of the #mood input


        //Correct for capitalization

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

    // Listen for user interaction on the submit button.
