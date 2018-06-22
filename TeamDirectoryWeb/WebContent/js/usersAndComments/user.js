const userIdLabel = "User-ID: ";
const ageLabel = "Age: ";
const studyCourseLabel = "Study Course: ";
const universityLabel = "University: ";

function setupProfile(id){

    ApiService.User.getById(id).done(function(user){
        setupProfileData(user);
    });

    setupComments(id);

    $("#currentUserSection").css("display", "block");
}

function setupProfileData(user){
    let firstName = user.name;
    let surname = user.surname;
    let age = user.age;
    let studyCourse = user.studyCourse;
    let university = user.university;

    $("#currentUserName").text(firstName + " " + surname);
    $("#currentUserAge").text(ageLabel + age);
    $("#currentUserStudyCourse").text(studyCourseLabel + studyCourse);
    $("#currentUserUniversity").text(universityLabel + university);
}
