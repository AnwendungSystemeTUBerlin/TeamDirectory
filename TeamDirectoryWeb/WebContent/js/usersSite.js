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

    $("#usersSection").css("margin-top", (navbarHeight * 1.1) + "px");
    // setupFormIds();
    setupCopySymbol();

    linkSmoothScrolling();
    navbarAnimation();

    $('body').on('click', 'table tr', function() {
        setupUser($(this).children());
        setupComments($(this).children()[5].innerHTML);
        $("#currentUserSection").css("display", "block");
    });

});

function setupComments(id){
    ApiService.Comment.getComment().byReceiverId(id).done(function(data){
        $.each(data, function(i, item){
            addComment(item);
        });
    });
}

function addComment(comment){

    let commentName = comment.author;
    let commentDate = comment.date;
    let commentTime = comment.time;
    let commentContent = comment.content;

    $('#userComments').append(
        new Comment({ name: commentName, date: commentDate, time: commentTime, text: commentContent })
        .join('')
    );
}
