function selectPet(petType){
    var thisPetData = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPetData.displayName);

    // Empty the specification data
    jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight, trainability
    var listData = "";
    listData += "<dt>Size</dt><dd>"+thisPetData.size+"</dd>";
    listData += "<dt>Weight</dt><dd>"+thisPetData.weight+"</dd>";
    listData += "<dt>Space Required</dt><dd>"+thisPetData.spaceRequired+"</dd>";

    if(thisPetData.trainability == true){
        listData += "<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    }else{
        listData += "<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    if(thisPetData.fitsOnLap == true){
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    }else{
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    jQuery(".petsDataSpecs").append(listData);

    // Add the foods
    var foods = "<dt>Foods</dt><dd><ul>";
    for(var i=0;i<thisPetData.foods.length;i++){
        foods += "<li>"+thisPetData.foods[i]+"</li>";
    }
    foods += "</ul></dd>";
    jQuery(".petsDataSpecs").append(foods);


    // Update the images
    
        // Create a variable to hold the thumbnailHTML
        var thumbnailsHTML = "";

        // Loop through the thumbnails and add the html to the variable
        for(var i=0;i<thisPetData.images.length;i++){
            thumbnailsHTML += "<img class=\"photoThumb\" src=\""+thisPetData.images[i].img+"\" alt=\""+thisPetData.images[i].alt+"\"/>";
        }

        // Empty the Thumbnails
        jQuery(".thumbHaus").empty();

        // Append to the page
        jQuery(".thumbHaus").append(thumbnailsHTML);



    // Empty the ideal for
    jQuery(".idealFor").empty();

    // Insert the ideal for
    var idealOwner = "";
    for(var i=0;i<thisPetData.idealOwner.length;i++){
        idealOwner += "<li>"+thisPetData.idealOwner[i]+"</li>";
    }
    jQuery(".idealFor").append(idealOwner);

    // Empty the Adoption Groups
    jQuery(".adoptionGroups").empty();

    // Add the adoption groups
    var adoptionGroups = "";
    for(var i=0;i<thisPetData.adoption.length;i++){
        adoptionGroups += "<li><a href=\""+thisPetData.adoption[i].url+"\" target=\"_blank\">"+thisPetData.adoption[i].name+"</a></li>";
    }
    jQuery(".adoptionGroups").append(adoptionGroups);




}// end selectPet



jQuery(document).ready(function(){

    // Initial value
    selectPet(jQuery("#petType").val());

    //Update whenever a new value is picked
    jQuery("#petType").on('change',function(){
        var petType = jQuery(this).val();
        selectPet(petType);
    });
});