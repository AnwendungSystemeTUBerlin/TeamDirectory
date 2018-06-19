function setupUser(trChildren){

    let firstName = trChildren[0].innerHTML;
    let surname = trChildren[1].innerHTML;
    let age = trChildren[2].innerHTML;
    let studyCourse = trChildren[3].innerHTML;
    let university = trChildren[4].innerHTML;

    $("#currentUserName").text(firstName + " " + surname);
    $("#currentUserAge").append(age);
    $("#currentUserStudyCourse").append(studyCourse);
    $("#currentUserUniversity").append(university);

}
