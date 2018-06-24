const UserController = (() => {
    const labels = {
        'age': 'Age: ',
        'studyCourse': 'Study course: ',
        'university': 'University: '
    };

    return {
        init() {
            $(document).ready(() => {
                (function initDOM () {
                    $('body').on('click', 'table tr.user-row, .commentAuthor, .commentAuthorPhoto', event => {
                        let id;
                        
                        let $target = $(event.target);
                        
                        switch ($target.attr('class')) {
                            case 'user-data':
                                id = id = $target.parent().children()[5].innerHTML;
                                break;
                            case 'commentAuthor':
                                id = $target.parent().parent().parent().attr('id').split("-")[0];
                                break;
                            case 'commentAuthorPhoto':
                                id = $target.parent().attr('id').split("-")[0];
                                break;
                        }
                
                        ApiService.User.getUser().byId(id).done(user => {
                            $("#currentUserId").text(user.id);
                            $("#currentUserName").text(`${user.name} ${user.surname}`);
                            $("#currentUserAge").text(`${labels.age} ${user.age}`);
                            $("#currentUserStudyCourse").text(`${labels.studyCourse} ${user.studyCourse}`);
                            $("#currentUserUniversity").text(`${labels.university} ${user.university}`);
                            $("#currentUserPhoto").attr("src", `../assets/img/${user.imgPath}`);

                            $("#currentUserSection").css("display", "block");
                            
                            // Destroy the previous instance of the controller
                            CommentController.destroy();
                            // Initialize the new one
                            CommentController.init(id);
                        });

                        $('html,body').animate({ scrollTop: $("#currentUserSection").offset().top },'slow');
                    });
                })();
            });
        }
    };
})();