const CommentController = (() => {
    const CommentTemplate = ({ author, authorImg, date, content, time, id, posterID, receiverID }) => `
        <div class="media d-block d-md-flex mt-4" id= "${id}">
            <img class="commentAuthorPhoto card-img-64 d-flex mx-auto mb-3" src="${authorImg}" alt="Generic placeholder image">
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
                    commentsNumber = comments.length;
                    
                    $('#commentsHeader').text(commentsNumber + " comment/s");

                    comments.forEach(c => {
                    	let comment = c[0];                	
                    	
                    	comment['author'] = `${c[1]['name']} ${c[1]['surname']}`;
                    	comment['authorImg'] = `../assets/img/${c[1]['imgPath']}`;
                    	
                    	$('#userComments').append([comment].map(CommentTemplate).join(''));
                    });
                });
            })();

            (function initDOM () {
                $('#writeCommentButton').on('click', event => {
                    let user = AuthService.getCurrentUser(),
                        content = $("#writeCommentText").val();
                        posterID = user.id;
                        receiverID = +($("#currentUserId").text()),
                        author = `${user.name} ${user.surname}`
                        authorImg = `../assets/img/${user.imgPath}`;
                    
                    if (!content) {
                        return;
                    }

                    $(event.target).prop('disabled', true);

                    ApiService.Comment.postComment({ content, posterID, receiverID }).done(comment => {
                    	comment['author'] = author;
                    	comment['authorImg'] = authorImg;
                    	
                    	$('#userComments').append([comment].map(CommentTemplate).join(''));

                        $(event.target).prop('disabled', false);
                    });
                });
            })();
        },
        destroy() {
        	$('#writeCommentButton').off();
        }
    };
})();