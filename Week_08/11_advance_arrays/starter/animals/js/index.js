//Create variables to store images, increment variables, set our max images variable.
var images = ['images/animal1.jpg', 'images/animal2.jpg', 'images/animal3.jpg', 'images/animal4.jpg', 'images/animal5.jpg', 'images/animal6.jpg', 'images/animal7.jpg'];

var i = 0;

var maxImages = images.length-1;


jQuery(document).ready(function(){
	//Next Image clikc
	jQuery("#next").on("click",nextImage);
	//Previous Image Click
	jQuery("#back").on("click",previousImage);
});


//Next Image function
function nextImage() {
	// console.log("Next Button Works!");
if (i < maxImages) {
    i++;
} else {
	i = 0;
}
jQuery("#carousel-image").attr("src",images[i]);

}



//Previous Image function
function previousImage() {
	// console.log("Previous Button Works!");
	if (i >0) {
    i--;
} else {
	i = maxImages;
}
	changeImage();

}

function changeImage() {
	jQuery("#carousel-image").attr("src",images[i]);
}