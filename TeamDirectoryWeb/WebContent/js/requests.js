function sendForm(route, form){
    $.post(route, $(form).serialize());
}

function setupAlumniCsv(){
    console.log("wjat");
    $.ajax({
        type: "GET",
        url: "/alumniCsv",
        dataType: "text",
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
