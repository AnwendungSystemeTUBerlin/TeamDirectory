$( document ).ready(function() {
	$( "#showButton" ).on("click", listUsers );
});

function listUsers() {
    ApiService.Comment.getComment().byPosterId(123).done(data => {
        console.log(data);
    });
}

function onUserResult(userData) {
	$.each(userData, function (i, item) {
		$("#content").append("<p>Admin: "+item.name+"</p>");
	});
}