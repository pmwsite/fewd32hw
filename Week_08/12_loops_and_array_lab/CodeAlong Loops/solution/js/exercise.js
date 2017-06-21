

var listOfDesserts = ['Chocolate Pie', 'Lemon Custart', 'Honey Cakes','Devil\'s Food Cake'];

var listOfExercises = ['Running','Sit Up','Push Up','Side Lunge'];

var theSchedule = {
                    "exercise":["monday","wednesday"],
                    "dessert":["saturday","sunday","monday"]
                    };


jQuery(document).ready(function(){

    // Use a For Loop to add desserts to .theForLoop
    for (i=0; i<listOfDesserts.length;i++){
        jQuery('.theForLoop').append('<li>'+listOfDesserts[i]+'</li>')
    }

    // Use the jQuery each function to add exercises to .thejQueryForEachLoop
    jQuery(listOfExercises).each(function(index,value){
        jQuery('.thejQueryForEachLoop').append('<li>'+value+'</li>');
    });


    // Use the jQuery each function to loop through the object theSchedule and add the days to the right day boxes



            jQuery(theSchedule['exercise']).each(function(index,value){
                jQuery('.exerciseDays ul').append('<li>'+value+'</li>');
            });

            jQuery(theSchedule['dessert']).each(function(index,value){
                jQuery('.dessertDays ul').append('<li>'+value+'</li>');
            });


});