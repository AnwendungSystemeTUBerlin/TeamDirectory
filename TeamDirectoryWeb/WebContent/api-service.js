const ApiService = (() => {
    const api = 'https://private-d2efc-teamdirectory.apiary-mock.com/api'

    function $request (type, url, data) {
        return $.ajax({
            type,
            dataType: 'json',
            url,
            data
        });
    }

    return {
        User: {
            getUsers() {
                let url = `${api}/users`;

                return $request('GET', url, null);
            },
            getById(id) {
                let url = `${api}/users/${id}`;

                return $request('GET', url, null);
            }
        },
        Comment: {
            postComment(comment) {
                let url = `${api}/comments/`;

                return $request('POST', url, comment);
            },
            getComment() {
                let url = `${api}/comments`;

                return {
                    byReceiverId(receiverId) {
                        url += `?receiverId=${receiverId}`;

                        return $request('GET', url, null);
                    },
                    byPosterId(posterId) {
                        url += `?posterId=${posterId}`;

                        return $request('GET', url, null);
                    }
                }
            }
        }
    };
})();
