$( document ).ready(function() {
	$( "#showButton" ).on("click", listUsers );
});

function listUsers() {
    console.log("fetching users.");
    var pathname = window.location.pathname;
    //console.log("http://localhost:8080"+pathname+"api/user");
    $.getJSON("http://localhost:8080"+pathname+"api/user", null, onUserResult);
}

function onUserResult(userData) {
	$.each(userData, function (i, item) {
		$("#content").append("<p>Admin: "+item.name+"</p>");
	});
}