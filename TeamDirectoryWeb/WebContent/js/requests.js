function sendForm(route, form){
    $.post(route, $(form).serialize());
}

function getUsers(){
    console.log("what");
    $.ajax({
        type: "GET",
        url: "/usersJSON",
        dataType: "application/json",
        success: function(data) {
            processData(data);
        }
    });
}

function getComments(){
    console.log("what");
    $.ajax({
        type: "GET",
        url: "/usersJSON",
        dataType: "application/json",
        success: function(data) {
            processData(data);
        }
    });
}

function setupFormIds(){
    $.ajax({
        type: "GET",
        url: "/formIds",
        dataType: "json",
        success: function(data) {
            useFormIds(data);
        }
    });
}
