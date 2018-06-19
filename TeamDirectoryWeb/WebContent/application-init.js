(function init () {
    let currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
        window.location.href = '/login.html';
    }
}());