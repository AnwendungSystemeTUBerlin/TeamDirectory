(function LoginController () {
    $(document).ready(() => {
        $('#login-btn').click((event) => {
            let name = $('#name').val(),
                surname = $('#surname').val();
            
            if (!name || !surname) {
                return;
            }

            $(event.target).prop('disabled', true);

            AuthService.login(name, surname).done(user => {
                AuthService.setCurrentUser(user);

                window.location.href = '/';
            });
        });
    })
})();