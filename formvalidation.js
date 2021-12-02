function fnameValidate() {
    let first_name = document.getElementById('fname').value;
    if (first_name == "") {
        //call the function
        displayMsg("firstname is required", "fnameMsg", "red")
        return false;
    }
    else if (first_name.length < 3) {
        displayMsg("firstname must be more than two characters", "fnameMsg", "red")
        return false;
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("firstname only contains alphabets","fnamMsg","red")
        return false;
    }
    else {
        displayMsg("valid firstname", "fnameMsg", "green")
        return true
    }
}




function lnameValidate() {
    let last_name = document.getElementById('lname').value;
    if (last_name == "") {
        //call the function
        displayMsg("lasttname is required", "lnameMsg", "red")
        return false;
    }
    else if (last_name.length < 3) {
        displayMsg("lastname must be more than two characters", "lnameMsg", "red")
        return false;
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg("lastname contains only alphabets","lnameMsg","red")
    }
    else {
        displayMsg("valid lastname", "lnameMsg", "green")
        return true
    }
}

function emailValidate() {
    let email= document.getElementById('email').value;
    if (email == "") {
        //call the function
        displayMsg("email is required", "emailMsg", "red")
        return false;
    }
   else if(!email.match(/^([a-zA-Z])[a-z0-9\_]+\@+(([a-z])+\.)+([a-z])+$/)){
    //ram129@gmail.com
    displayMsg("invalid email","emailMsg","red")
   }
    else {
        displayMsg("valid email", "emailMsg", "green")
        return true
    }
}

function passwordValidate() {
    let pass= document.getElementById('password').value;
    if (pass == "") {
        //call the function
        displayMsg("password is required", "passMsg", "red")
        return false;
    }
   else if(!pass.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.[@$!%*#?&]).{8,40}$/)){
    displayMsg("must contain * characters,One Uppercase,one lowercase,one digit and one more special character","passMsg","red")
    return false;
   }

    else {
        displayMsg("valid password", "passMsg", "green")
        return true
    }
}
function displayMsg(msg, id, color) {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}

function validForm(){
    if(fnameValidate() && lnameValidate() && emailValidate() && passwordValidate()){
        return true;
    }
    else{
        return false;
    }
}