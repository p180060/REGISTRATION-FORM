function validation(){
    var form = document.getElementById('form');
    var name = document.getElementById('name').value.trim();
    var email = document.student.email;
    var password = document.student.password;
    var checkboxes = document.student.courses;
    var semester = document.student.semester;
    var letters = /^[A-Za-z]+$/;
    var pass =  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+$/;
    var selected = [];
    if (name.length < 25 && name.match(letters)){
        const inputField = name.parentElement;
        inputField.className = 'input-field success';
    
        //setSuccessFor(document.getElementById('name'));
        //alert("invalid");
    }else{
        setErrorFor(name , 'username is invalid');
        alert("invaliddddddddddddd");
    }
    
    if ((/^[\S]+@nu.edu.pk/).test(email.value)){

    }else{
        alert("Email is not valid please enter @nu.edu.pk ");
        return false;
    }
    if (password.value.length > 7 || password.value.match(pass)){

    }else{
        alert("Your password is not valid");
        return false;
    }
    if (document.getElementById("male").checked || document.getElementById("female").checked){

    }else{
        alert("Please your gender")
        return false;
    }
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          selected.push(checkboxes[i].value);
    }
    if ( selected.length > 0 && selected.length <= 3){

    }else{
        alert("please select three courses");
        return false;
    }

 /*   if (semester == "semester1" || semester == "semester2" || semester == "semester3" || semester == "semester4" || semester == "semester5" || semester == "semester6" || semester == "semester7" || semester == "semester8"){

    }else{
        alert("please select semester");
        return false;
    }*/
    var selectedoutput = document.querySelector("#Semesters").value;
    if (selectedoutput == "semester1" || selectedoutput == "semester2" || selectedoutput == "semester3" || selectedoutput == "semester4" || selectedoutput == "semester5" || selectedoutput == "semester6" || selectedoutput == "semester7" || selectedoutput == "semester8"){
        
            
    }else{
        document.getElementById("semester_result").innerHTML = "Please select your semester";
            document.querySelector("#SubmitButton").style.display = "none";
            return false;
        }
}
}
/*const name = document.student.name;
var email = document.student.email;
var password = document.student.password;
var checkboxes = document.student.courses;
var semester = document.student.semester;
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkinputs(){
    const namesvalue = name.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const checkboxesvalue = checkboxes.value.trim();
    const semestervalue = semester.value.trim();
    var letters = /^[A-Za-z]+$/;
    var pass =  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+$/;
    var selected = [];

    if (namesvalue.length < 25 && namesvalue.match(letters)){
        setSuccessFor(name);

    }else{
        setErrorFor(name , 'username is invalid');
        
    }

    
}*/
function setSuccessFor(input){
    const inputField = input.parentElement;
    inputField.className = 'input-field success';
}
function setErrorFor(input , message){
    const inputField = input.parentElement
    const small = inputField.querySelector('small');
    small.innerHTML = message;
    inputField.className = 'input-field error';
}
$(document).ready(function(){
    $(".mul-select").select2({
            placeholder: "select courses", //placeholder
            tags: true,
            tokenSeparators: ['/',',',','," "] 
        });
    })