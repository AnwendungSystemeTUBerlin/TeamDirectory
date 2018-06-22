const CommentController = (() => {
    const CommentTemplate = ({ author, date, content, time, id, posterID, receiverID }) => `
        <div class="media d-block d-md-flex mt-4" id= "${id}">
            <img class="commentAuthorPhoto card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image">
            <div class="media-body text-center text-md-left ml-md-3 ml-0">
            <h5 class="font-weight-bold mt-0">
                <p class="commentAuthor">
                    Author: ${author}
                </p>
                <P class="commentDate">
                    Date: ${date}
                </P>
                <P class="commentTime">
                    Time: ${time}
                </P>
            </h5>
            <p class="commentText">
                ${content}
            </p>
            </div>
        </div>
    `;

    return {
        init(id) {
            (function initVM () {
                let commentsNumber = 0;
                
                $('#userComments').text("");

                ApiService.Comment.getComments().byReceiverId(id).done(comments => {
                    console.log(comments);
                    commentsNumber = comments.length;
                    $('#commentsHeader').text(commentsNumber + " comment/s");

                    comments.forEach(comment => {
                    	$('#userComments').append([comment].map(CommentTemplate).join(''));
                    });
                });
            })();

            (function initDOM () {
                $('#writeCommentButton').on('click', event => {
                    let user = AuthService.getCurrentUser(),
                        content = $("#writeCommentText").val();
                        posterID = user.id;
                        receiverID = +($("#currentUserId").text());
                    
                    // Check if content is empty
                    if (!content) {
                        return;
                    }

                    $(event.target).prop('disabled', true);

                    ApiService.Comment.postComment({ content, posterID, receiverID }).done(comment => {
                    	$('#userComments').append([comment].map(CommentTemplate).join(''));

                        $(event.target).prop('disabled', false);
                    });
                });
            })();
        }
    };
})();