(function LoginController () {
    $(document).ready(() => {
        (function initDOM () {
            $('#login-btn').on('click', event => {
                let name = $('#name').val(),
                    surname = $('#surname').val();
                
                if (!name || !surname) {
                    return;
                }

                $(event.target).prop('disabled', true);
                
                
                AuthService.login(name, surname);
            });
        })();
    });
})();