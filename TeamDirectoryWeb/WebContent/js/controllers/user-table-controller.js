const UserTableController = (() => {
    const UserRowTemplate = ({ name, surname, age, studyCourse, university, id}) => `
        <tr class="user-row">
            <td class="user-data">${name}</td>
            <td class="user-data">${surname}</td>
            <td class="user-data">${age}</td>
            <td class="user-data">${studyCourse}</td>
            <td class="user-data">${university}</td>
            <td class="user-data">${id}</td>
            <td class="copySymbol" onmouseout="outFunc()"><span class="tooltip">Copy</span><i class="fas fa-copy fa-lg"></i></td>"
        </tr>
    `;

    return {
        init() {
            $(document).ready(() => {
                (function initDOM () {
                    $('body').scrollspy({
                        target: ".navbar",
                        offset: 300
                    });

                    setupCopySymbol();
                    linkSmoothScrolling();
                    navbarAnimation();
                })();

                (function initVM () {
                    ApiService.User.getUsers().done(users => {
                        users.forEach(user => {
                            $('#theTable').append([user].map(UserRowTemplate).join(''));
                        });
                    });
                })();
            });
        }
    };
})();