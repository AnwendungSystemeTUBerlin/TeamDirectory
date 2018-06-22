const ApiService = (() => {
    const api = 'http://localhost:8080/TeamDirectoryWeb/api'
    
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
                let url = `${api}/user`;

                return $request('GET', url, null);
            },
            getUser() {
                return {
                    byId(id) {
                        let url = `${api}/user/${id}`;

                        return $request('GET', url, null);   
                    },
                    byName(name, surname) {
                        let url = `${api}/user?name=${name}&surname=${surname}`;
                        window.alert("api-service: "+JSON.stringify($request('GET', url, null)));
                        return $request('GET', url, null);
                    }
                }
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