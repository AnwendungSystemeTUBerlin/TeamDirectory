const ApiService = (() => {
    const api = 'http://localhost:8080/TeamDirectoryWeb/api'
    
    function $request (type, url, data) {
    	if (!!data) {
    		data = JSON.stringify(data);
    	}
    	
    	return $.ajax({
            type,
            dataType: 'json',
            contentType: 'application/json',
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
                let url = `${api}/comments`;
                return $request('POST', url, comment);
            },
            getComments() {
                let url = `${api}/comments`;

                return {
                    byReceiverId(receiverId) {
                        url += `?receiverID=${receiverId}`;

                        return $request('GET', url, null);
                    },
                    byPosterId(posterId) {
                        url += `?posterID=${posterId}`;

                        return $request('GET', url, null);
                    }
                }
            }
        }
    };
})();