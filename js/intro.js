//resource link: https://www.w3schools.com/jquery/default.asp

$("#cat-img").hide();
$("#secret-text").hide();
$("#super-secret").hide();
$("#shiba").hide();
$("#popup").hide();
$("#person4").hide();
$("#person3").hide();
$("#person2").hide();
$("#person1").hide();
$("#speech-bubble").hide();
$("#qr-code").hide();
$("#welcome-text2").hide();



$("#welcome-text").click(function(){

    $("#welcome-text2").show();
    $("#welcome-text").hide();
    
});

$("#welcome-text2").click(function(){

    $("#welcome-text").show();
    $("#welcome-text2").hide();
    
});

$("#person5").click(function(){

    $("#person4").fadeIn(1000).delay(500);
    
});

$("#person4").click(function(){

    
    $("#person3").fadeIn(1000).delay(500);
    
});

$("#person3").click(function(){

    
    $("#person2").fadeIn(1000).delay(500);
    
});

$("#person2").click(function(){

    
    $("#person1").fadeIn(1000).delay(500);
    
});

$("#person1").click(function(){

    $("#speech-bubble").fadeIn(1000).delay(500);
    $(".speech").addClass("animate-img");

        setTimeout(function(){

        $(".speech").removeClass("animate-img");

        },5000 );
    $("#qr-code").show();

    // $(".speech").addClass("animate-img");

    // setTimeout(function(){

    //     $(".speech").removeClass("animate-img");

    //     },5000 );

    // $("#super-secret").slideToggle();

    
});


// $("#happy-img").click(function(){

// $("#happy-img").hide();
// $("#cat-img").show();

// });


// $("#cat-img").click(function(){

//     $("#cat-img").hide();
//     $("#happy-img").show();
    
// });


// $("#toggle-text").click(function(){

// $("#secret-text").toggle();

// });

// $("#change-bg-color").click(function(){

//     $("#home-screen").css("background-color","khaki");

    
// });

// $("#secret-text").click(function(){

//     $(".main-img").addClass("animate-img");

//     setTimeout(function(){

//         $(".main-img").removeClass("animate-img");

//         },5000 );

//     $("#super-secret").slideToggle();

    
// });

// $("#super-secret").click(function(){

//     $("#shiba").fadeIn(1000).delay(500).slideUp();

// });

// $(".main-img").mouseenter(function(){

//     $(".main-img").css("filter","invert(100%)")


// });

// $(".main-img").mouseleave(function(){

//     $(".main-img").css("filter","invert(0%)")


// });

// $(document).keydown(function(event){

//     if(event.which == 65){
//     console.log("Key code: " + event.which);
    
//     $("#popup").toggle();

//     }

    

// });