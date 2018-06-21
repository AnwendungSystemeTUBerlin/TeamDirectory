$(document).ready(function() {

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 300
    });

    ApiService.User.getUsers().done(function(data){
        processData(data);
    });

    let navbarHeight = $("#navbar").css("height").split("px")[0];

    $("#usersSection").css("margin-top", (navbarHeight * 1.5) + "px");
    $("#navbar").css("background-color", "rgba(0,123,255, 0.95)");

    setupCopySymbol();

    linkSmoothScrolling();
    navbarAnimation();

    $('body').on('click', 'table tr', function() {
        let id = $(this).children()[5].innerHTML;
        setupProfile(id);

        $('html,body').animate({
            scrollTop: $("#currentUserSection").offset().top},'slow');
    });

});
