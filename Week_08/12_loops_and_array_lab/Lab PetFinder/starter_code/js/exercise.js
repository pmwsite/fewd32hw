function selectPet(petType){

    // Get the specific pet data set
    var selectedPet = petData[petType];

    

    // Set the title
    jQuery(".petDisplayName").text(selectedPet['displayName']);

    // Empty the specification data
    jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight
    var listData = "";
    listData += "<dt>Size</dt><dd>"+selectedPet.size+"</dd>";
    listData += "<dt>Weight</dt><dd>"+selectedPet.weight+"</dd>";
    listData += "<dt>Space Required</dt><dd>"+selectedPet.spaceRequired+"</dd>";

   jQuery(".petsDataSpecs").append(listData);


    // Add logic to add the trainability and lap size images
    if(selectedPet['trainability']==true){
        jQuery(".petsDataSpecs").append("<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>");
    }else{
        jQuery(".petsDataSpecs").append("<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>");
    }


    // Add the foods (may require loop)
    var foods = "<dt>Foods</dt><dd><ul>";
    for(i=0;i<selectedPet['foods'].length;i++){
        foods += "<li>"+selectedPet['foods'][i]+"</li>";
}
    foods = foods + "</dd></ul>"
    jQuery(".petsDataSpecs").append(foods);




    // Update the images

        // Create a variable to hold the thumbnailHTML

        // Loop through the thumbnails and add the html to the variable

        // Empty the Thumbnails Div

        // Append to the page



    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run

        // Pick the initial pet

    //Update whenever a new value is picked
jQuery("#petType").on('change',function(){
    selectPet( jQuery(this).val() );

    });


});
// };

// });