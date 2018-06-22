(function init () {
    let currentUser = AuthService.getCurrentUser();
    
    if (!currentUser) {
        window.location.href = 'http://localhost:8080/TeamDirectoryWeb/html/login.html';
    }
}());