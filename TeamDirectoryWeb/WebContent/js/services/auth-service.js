const AuthService = (() => {
    return {
        login(name, surname) {
        	//window.alert("auth-service: "+name +"," + surname);
            return ApiService.User.getUser().byName(name, surname);
        },
        getCurrentUser() {
            return JSON.parse(localStorage.getItem('user'));
        },
        setCurrentUser(user) {
            return localStorage.setItem('user', JSON.stringify(user));
        },
        removeCurrentUser() {
            localStorage.removeItem('user');
        }
    };
})();