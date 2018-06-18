$(document).ready(function() {

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 300
    });

    setupAlumniCsv();
    setupFormIds();
    setupCopySymbol();

    linkSmoothScrolling();
    navbarAnimation();

    $("#sendContactButton").on('click', function(){
        validateContactForm();
    });
    $("#sendAlumniButton").on('click', function(){
        validateAddAlumniForm();
    });
});
