const Comment = ({ name, date, time, text, id }) => `
  <div class="media d-block d-md-flex mt-4" id= "${id}">
    <img class="commentAuthorPhoto card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image">
    <div class="media-body text-center text-md-left ml-md-3 ml-0">
      <h5 class="font-weight-bold mt-0">
        <p class="commentAuthor">
            Author: ${name}
        </p>
        <P class="commentDate">
            Date: ${date}
        </P>
        <P class="commentTime">
            Time: ${time}
        </P>
      </h5>
      <p class="commentText">
          ${text}
      </p>
    </div>
  </div>
`;

function addComment(comment){

    let commentName = comment.author;
    let commentDate = comment.date;
    let commentTime = comment.time;
    let commentText = comment.content;
    let commentAuthorId = comment.posterId;
    let commentId = comment.id;

    $("#userComments").append([
        {name: commentName, date: commentDate, time: commentTime, text: commentText, id: commentAuthorId + "-" + commentId}
        ].map(Comment).join('')
    );
}

function addLinkToCommentAuthor(){
    $(".commentAuthor").on('click', function(){
        let commentAuthorId = $(this).parent().parent().parent().attr('id').split("-")[0];
        setupProfile(commentAuthorId);
    });
    $(".commentAuthorPhoto").on('click', function(){
        let commentAuthorId = $(this).parent().attr('id').split("-")[0];
        setupProfile(commentAuthorId);
    });
}

function setupComments(id){
    let commentsNumber = 0;
    $("#userComments").text("");
    ApiService.Comment.getComment().byReceiverId(id).done(function(data){
        console.log(data);
        commentsNumber += 1;
        $('#commentsHeader').text(commentsNumber + " comment/s");
        addComment(data);

        addLinkToCommentAuthor();
    });
}

function commentValidation(){
    let commentText = $("#writeCommentText").val();

    console.log(commentText);
    if(commentText !== ""){
        return true;
    }else{
        return false;
    }
}

function saveComment(){
    let comment = createComment();
    addComment(comment);
    ApiService.Comment.postComment(comment);
}

function createComment(){
    let content = $("#writeCommentText").val();
    let author = "Ivan Doe";
    let id = 5; // needs to be unique for each comment
    let posterId = 123;
    let receiverId = $("#currentUserId").text().split(" ")[1];
    let date = currentDate();
    let time = currentTime();

    let comment = {
        "author": author,
        "content": content,
        "id": id,
        "posterId": posterId,
        "receiverId": receiverId,
        "date": date,
        "time": time
    }

    return comment;

}

function currentDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    let yyyy = today.getFullYear();
    if(dd<10){
        dd = '0' + dd;
    }
    if(mm<10){
        mm = '0 '+ mm;
    }
    return dd+'/'+mm+'/'+yyyy;
}

function currentTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes =  today.getMinutes();

    if(hours<10){
        hours = '0'+ hours;
    }
    if(minutes<10){
        minutes = '0' + minutes;
    }

    return hours + ":" + minutes;
}
