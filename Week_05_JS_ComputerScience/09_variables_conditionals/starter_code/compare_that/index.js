jQuery(document).ready(function(){

	//Compare function
	function compareValues(){

		//Get values of inputs
		 var a = jQuery("#a").val();
		 var b = jQuery("#b").val();
		 var displayValue; 




		// Turn inputs into numbers
		a = parseFloat(a);
		b = parseFloat(b);


		//If inputs ARE numbers

			 // if A > B, display = ">"
			 if(a > b){
			 	displayValue = ">";
			 }else if(b > a){

			 // if A < B, display = "<"
			 displayValue = "<";
			}else if (b == a){

			 // if A = B, display = "=="
			 displayValue = "==";
			}else{
				displayValue = "N/A";

			}

			 // Else, display "n/a"


		// Put display to output span
		jQuery("#comparison").text(displayValue);

}

		//Submit Click
		jQuery("submit").click(compareValues);




});