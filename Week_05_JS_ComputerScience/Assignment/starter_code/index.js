//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

//prevent the update button from refreshing the page
	jQuery('#submit-btn').click(function(e){
		e.preventDefault();

//get the value of the #city-type input and correct for capitalization
var citySkyline = jQuery('#city-type').val();
    jQuery('#city-type').val('');
    citySkyline = citySkyline.toLowerCase().trim();

 // if the user inputs austin change the CSS class to 'austin'
    if(citySkyline == 'austin') {
      jQuery('body').attr('class','austin');
    }

// if the user inputs los angeles change the CSS class to 'la'
    else if(citySkyline == 'los angeles') {
      jQuery('body').attr('class','la');
    }  

// if the user inputs new york city change the CSS class to 'nyc'
    else if(citySkyline == 'new york city' || 'new york') {
      jQuery('body').attr('class','nyc');
    }

// if the user inputs san francisco change the CSS class to 'sf '
    else if(citySkyline == 'san francisco') {
      jQuery('body').attr('class','sf');
    }

// if the user inputs sydney change the CSS class to 'sydney'
    else if(citySkyline == 'sydney') {
      jQuery('body').attr('class','sydney');
    }  

	});
})