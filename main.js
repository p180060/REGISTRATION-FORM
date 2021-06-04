const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
//const courses = document.getElementById('testSelect1');
//const Gender = document.getElementById('gender');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
    semestercheck();
    coursescheck();

});
function coursescheck(){
    var count=0;
    var option = document.querySelector('#testSelect1').options;
    for (var i=0; i < option.length; i++) {
        if (option[i].selected) count++; 
       }
    if(count == 0 || count > 3){
        setErrorFor(testSelect1,'please select your course');
    }
    else{
        setSuccessFor(testSelect1);
    }  
}

function semestercheck(){
    var selectedoutput = document.querySelector("#semester").value;
        if (selectedoutput == "Semester" ){
            setErrorFor(semester,'Please select your semester');
        }else{
            setSuccessFor(semester);
        }
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    //const GenderValue = Gender.value;
    var letters = /^[A-Za-z]+$/;
    var pass =  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+$/;
    if(usernameValue.length < 25 && usernameValue.match(letters)){
        setSuccessFor(username);
	}else{
        setErrorFor(username, 'Username is invalid');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if (passwordValue.length > 7 || passwordValue.match(pass)){
        setSuccessFor(password);
	} else {
		setErrorFor(password, 'Password is invalid');
	}
	if (document.getElementById("male").checked || document.getElementById("female").checked){
        
    }else{
       // setErrorFor(Gender,'select gender');
    }  
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return (/^[\S]+@nu.edu.pk/).test(email);
}


