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

    $('#userComments').append([
        new Comment({ name: commentName, date: commentDate, time: commentTime, text: commentContent }).join(''));
}
