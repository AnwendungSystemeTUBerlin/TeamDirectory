function validateContactForm() {

    var nameId = "nameContact";
    var emailId = "emailContact";
    var subjectId = "subjectContact";
    var messageId = "messageContact";

    if(!validateName(nameId)){
        return false;
    }

    if(!validateEmail(emailId)){
        return false;
    }

    if(!validateSubject(subjectId)){
        return false;
    }

    if(!validateMessage(messageId)){
        return false;
    }

    $("#contactForm").addClass("invisibleElement");
    $("#contactSubmitDiv").addClass("invisibleElement");
    $("#emailSentDiv").removeClass("invisibleElement");
    sendForm('/contact', '#contactForm');
}

function validateName(nameId){
    var name = document.getElementById(nameId).value;
    if (name == "") {
        showInvalidInput("#" + nameId);
        return false;
    }else{
        hideInvalidInput("#" + nameId);
        return true;
    }
}

function validateEmail(emailId){
    var email = document.getElementById(emailId).value;
    if (email == "") {
        showInvalidInput("#" + emailId);
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            showInvalidInput("#" + emailId);
            return false;
        }
        hideInvalidInput("#" + emailId);
        return true;
    }
}

function validateSubject(subjectId){
    var subject = document.getElementById(subjectId).value;
    if (subject == "") {
        showInvalidInput("#" + subjectId);
        return false;
    }else{
        hideInvalidInput("#" + subjectId);
        return true;
    }
}

function validateMessage(messageId){
    var message = document.getElementById(messageId).value;
    if (message == "") {
        showInvalidInput("#" + messageId);
        return false;
    }else{
        hideInvalidInput("#" + messageId);
        return true;
    }
}

function showInvalidInput(id){
    $(id).siblings(".invalidInput").addClass("visibleInvalidInput");
    $(id).siblings(".validInput").removeClass("visibleValidInput");
}
function hideInvalidInput(id){
    $(id).siblings(".invalidInput").removeClass("visibleInvalidInput");
    $(id).siblings(".validInput").addClass("visibleValidInput");
}
