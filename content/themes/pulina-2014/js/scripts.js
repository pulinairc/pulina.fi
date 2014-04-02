jQuery(document).ready(function(){

// jQuery('.somethingsomething').unslider({
//   speed: 500,               //  The speed to animate each slide (in milliseconds)
//   delay: 4000,              //  The delay between slide animations (in milliseconds)
//   complete: function() {},  //  A function that gets called after every slide animation
//   keys: true,               //  Enable keyboard (left, right) arrow shortcuts
//   dots: true,               //  Display dot navigation
//   fluid: false              //  Support responsive design. May break non-responsive designs
// });

// nav for iPhone:
jQuery('.nav li').click(function() {
    jQuery('.navbar-toggle').toggleClass("collapsed");
    jQuery('.navbar-collapse').removeClass("in");
    jQuery('.navbar-collapse').addClass("collapse");
});

// Form
    var validator = jQuery("#contactform").validate({
        rules: {
            contactname: {
                required: true,
                minlength: 2
            },
            email: {
                required: false,
                email: true,
                minlength: 4
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 10
            },
            phone: {
                required: true,
                minlength: 10
            }

// Ei välttämättä tarvita kun PHP:ssa on suojaus myös:
//            ,
//            emailconfirmation: {
//                maxlength: 0
//            }

        },
        messages: {
            nimi: {
                required: "Annathan nimesi",
                minlength: jQuery.format("Nimen täytyy olla yli {0} merkkiä pitkä")
            },
            sahkoposti: {
                required: "Annathan oikean sähköpostiosoitteen",
                minlength: "Annathan oikean sähköpostiosoitteen"
            },
            viesti: {
                required: "Sana on vapaa, kirjoita viesti tähän.",
                minlength: jQuery.format("Viesti voisi olla vähän pidempi. Vähintään sen {0} merkkiä, kiitos!")
            },
            puh: {
                required: "Puhelinnumero on pakollinen.",
                minlength: jQuery.format("Puhelinnumeron pitää olla ainakin {0}-numeroinen.")
            }

// Ei välttämättä tarvita kun PHP:ssa on suojaus myös:

//            ,
//            emailconfirmation: {
//                required: "Älä yritä spämmirobotti!",
//                maxlength: jQuery.format("Älä yritä spämmirobotti!")
//            }

        },
        // set this class to error-labels to indicate valid fields
        success: function(label) {
            label.addClass("checked");
        }
    });

jQuery.extend(jQuery.validator.messages, {
    email: "Annathan oikean sähköpostiosoitteen"
});

});