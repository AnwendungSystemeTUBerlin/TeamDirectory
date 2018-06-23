const AuthService = (() => {
    return {
        login(name, surname) {
            ApiService.User.getUser().byName(name, surname).done(user => {
            	localStorage.setItem('user', JSON.stringify(user));

                window.location.href = '/TeamDirectoryWeb';
            });
        },
        getCurrentUser() {
            return JSON.parse(localStorage.getItem('user'));
        },
        removeCurrentUser() {
            localStorage.removeItem('user');
        }
    };
})();