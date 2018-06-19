function sendForm(route, form){
    $.post(route, $(form).serialize());
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
