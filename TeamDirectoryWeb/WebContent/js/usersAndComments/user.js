const userIdLabel = "User-ID: ";
const ageLabel = "Age: ";
const studyCourseLabel = "Study Course: ";
const universityLabel = "University: ";

function setupProfile(id){

    ApiService.User.getUser().byId(id).done(function(user){
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
    let imgPath = "../img/"+user.imgPath;

    $("#currentUserName").text(firstName + " " + surname);
    $("#currentUserAge").text(ageLabel + age);
    $("#currentUserStudyCourse").text(studyCourseLabel + studyCourse);
    $("#currentUserUniversity").text(universityLabel + university);
    $("#currentUserPhoto").attr("src", imgPath);
}
