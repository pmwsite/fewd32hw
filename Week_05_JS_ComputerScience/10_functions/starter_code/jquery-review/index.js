jQuery(document).ready(function() {


function changeColor() {
jQuery(".box").css("background", "pink");
}
jQuery(".box").click(changeColor)


function addText() {
	jQuery(".box").text("Pam's Boxes");
}
	jQuery(".box").click(addText);


function changeSize() {
	jQuery(this).css(
		{"height": "500px",
		 "width":"500px"}
		 );
}
	jQuery(".box").click(changeSize);

});

