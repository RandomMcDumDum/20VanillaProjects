const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input Error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success outline
function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else {
        showError(input, 'Email is not valid')
    }
}

// Check Required fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
       if(input.value.trim() == ''){
        //    console.log(input.id)
           showError(input, `${getFieldName(input)} is required`);
       } else {
           showSuccess(input);
       }
    });
}

// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`)
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`)
    }else {
        showSuccess(input)
    }
}

// Check Passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

// Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listners
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(username.value);
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2)

});