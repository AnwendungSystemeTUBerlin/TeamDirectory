$(document).ready(function() {

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 300
    });

    getUsers();
    setupFormIds();
    setupCopySymbol();

    linkSmoothScrolling();
    navbarAnimation();

});
