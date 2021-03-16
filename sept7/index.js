function validateUsername() {
    var username = document.getElementById('username')
    if (username.value.length == 0) {
        document.getElementById('errusr').innerHTML = "please do not leave the username empty"
    } else if (username.value.length < 8) {
        document.getElementById('errusr').innerHTML = "username must have atleast 8 characters"
    } else if (/[^a-zA-Z0-9_]/.test(username.value)) {
        document.getElementById('errusr').innerHTML = "you are allowed to use letters and numbers "
    }



}

function passwordlength() {
    var password1 = document.getElementById('password1')

    if (password1.value.length == 0) {
        document.getElementById('errpwd1').innerHTML = "please do not leave password empty"
    } else if (password1.value.length < 8) {
        document.getElementById('errpwd1').innerHTML = "password must be atleast 8 characters"
    }
}

function validatePassword() {
    var password1 = document.getElementById('password1')
    var password2 = document.getElementById('password2')
    
    if (password1.value.length == 0) {
        document.getElementById('errpwd1').innerHTML = "please do not leave password empty"
    } else if (password1.value.length < 8) {
        document.getElementById('errpwd1').innerHTML = "password must be atleast 8 characters"
    }else if (password2.value.length == 0) {
        document.getElementById('errpwd2').innerHTML = "please do not leave password empty"
    } else if (password2.value.length < 8) {
        document.getElementById('errpwd2').innerHTML = "password must be atleast 8 characters"
    } else if (password2.value != password2.value)
        document.getElementById('errpwd2').innerHTML = "Password did not match"
    return false

}

function validateEmail() {

    var email = document.getElementById('email')
    if (email.value.length == 0) {
        document.getElementById('erremail').innerHTML = "please do not leave the email empty"
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.getElementById('erremail').innerHTML = "valid "
    } else {
        document.getElementById('erremail').innerHTML = " please leave a valid email "
    }
}

function validateEmail2() {

    var email = document.getElementById('email')
    if (email.value.length == 0) {
        document.getElementById('erremail2').innerHTML = "please do not leave the email empty"
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.getElementById('erremail2').innerHTML = "valid "
    } else {
        document.getElementById('erremail2').innerHTML = " please leave a valid email "
    }
}

function mailSubscribe() {
    if (document.getElementById('labelone').checked) {

        document.getElementById('labeltwo').style.display = "inline"
        document.getElementById('labelthree').setAttribute('required', true)

    } else {
        document.getElementById('labelthree').removeAttribute('required')
        document.getElementById('labeltwo').style.display = "none"

    }
}