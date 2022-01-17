function seterror(id, error) {
    //sets error inside tag of ID
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML = error;
}
function clearErrors() {
    errors = document.getElementsByClassName('formError');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function toggle() {
    var blur = document.getElementById('formSection');
    blur.classList.toggle('active')
    var popUp = document.getElementById('popUp');
    popUp.classList.toggle('active')
}



function validateForm() {
    var returnVal = true;
    clearErrors();

    var name = document.forms['myForm']["name"].value;
    if (name.length > 20) {
        seterror("name", "*Length of Name should not exceed 20!");
        returnVal = false;
    }
    if (name.length == 0) {
        seterror("name", "*This is a Required Field!");
        returnVal = false;
    }
    var pass = document.forms['myForm']["pword"].value;
    if (pass.length < 8 || pass.search(/[0-9]/) == -1 || pass.search(/[a-z]/) == -1 || pass.search(/[A-Z]/) == -1) {
        seterror("password", "*Must contain atleast 8 Letters, 1 number, 1 Uppercase and 1 lowercase character!");
        returnVal = false;
    }
    var phone = document.forms['myForm']["number"].value;
    if (phone.length != 10) {
        seterror("phone", "*Please Enter a Valid Number!");
        returnVal = false;
    }
    var email = document.forms['myForm']["mail"].value;
    if (email.length != 34) {
        seterror("email", "*Enter a Valid Student BITS Mail!");
        returnVal = false;
    }
    var id = document.forms['myForm']["id"].value;
    if (id.length != 13) {
        seterror("id", "*Please Enter a Valid BITS ID!");
        returnVal = false;
    };
    if(returnVal==true){
        toggle();
    }

    return returnVal;
};
