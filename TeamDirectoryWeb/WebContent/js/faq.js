function setupFaq(){
    $("#faqSection button").on('click', function(){
        $("#faqSection button").not(this).each(function() {
            $(this).children("i").removeClass('rotate-icon');
        });
        $(this).children("i").toggleClass('rotate-icon');
    });
}
