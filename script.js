const form = document.querySelector('#Create-account-form');
const UsernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmpasswordInput = document.querySelector('#confirmpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
})

function validateForm(){

    // Username
    if (UsernameInput.value.trim()=='') {
        setError(UsernameInput, 'Name cannot be empty');
    }else if(UsernameInput.value.trim().length <5 || UsernameInput.value.trim().length >15){
        setError(UsernameInput, 'Name must be min 5 and max 15 characters');
    }else{
        setSuccess(UsernameInput);
    }

    // Email
    if (emailInput.value.trim()=='') {
        setError(emailInput, 'Provide e-mail address');
    }else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

    // Password
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password cannot be empty');
    }else if (passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20) {
      setError(passwordInput, 'Password must be min 6 and max 20 characters');
    }else{
        setSuccess(passwordInput);
    }

    //  Confirm password
    if(confirmpasswordInput.value.trim()==''){
        setError(confirmpasswordInput, 'password cannot be empty');
    }else if(confirmpasswordInput.value !== passwordInput.value){
        setError(confirmpasswordInput, 'password does not match');
    }else{
        setSuccess(confirmpasswordInput);
    }
}


function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element,) {
    const parent = element.parentElement;
    
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');

}


function isEmailValid(email) {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return reg.test (email);
}
