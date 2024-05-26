let formData = document.querySelector('.form');
let submitButton = document.querySelector('.button');
let errorMessages = document.querySelectorAll('.error-message');
let emptyFields = document.querySelectorAll('.empty-field');
let showPwdButton = document.querySelector('.btn')

let firstName, lastName, email, password;
let fnTarget, lnTarget, eTarget, pwdTarget;
let field;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let emptyField of emptyFields){
    emptyField.classList.add("d-none");
}


formData.addEventListener("keyup", (e) => {
    e.preventDefault();
    field=e.target.dataset.key;
    switch(field){
        case "firstName":
            firstName=e.target.value;
            fnTarget = e.target;
            break;
        case "lastName":
            lastName=e.target.value;
            lnTarget = e.target;
            break;
        case "email":
            email=e.target.value;
            eTarget = e.target;
            break;
        case "password":
            password=e.target.value;
            pwdTarget = e.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);

    if (firstName){
        emptyFields[0].classList.add("d-none")
        if (!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none")
            fnFlag = false;
        }
        else{
            fnTarget.classList.remove("error")
            errorMessages[0].classList.add("d-none")
            fnFlag = true;
        }
    }
    else {
        emptyFields[0].classList.remove("d-none")
        fnFlag = false;
    }

    if (lastName){
        emptyFields[1].classList.add("d-none")
        if (!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none")
            lnFlag = false;
        }
        else{
            lnTarget.classList.remove("error")
            errorMessages[1].classList.add("d-none")
            lnFlag = true;
        }
    }
    else {
        emptyFields[1].classList.remove("d-none")
        lnFlag = false;
    }

    if (email){
        emptyFields[2].classList.add("d-none")
        if (!emailRegex.test(email)){
            eTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none")  
            eFlag = false  
        }
        else{
            eTarget.classList.remove("error")
            errorMessages[2].classList.add("d-none")
            eFlag = true
        }
    }
    else {
        emptyFields[2].classList.remove("d-none")
        eFlag = false
    }

    if (password){
        emptyFields[3].classList.add("d-none")
        if (!pwdRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none")   
            pwdFlag = false; 
        }
        else{
            pwdTarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
            pwdFlag = true
        }
    }
    else{
        emptyFields[3].classList.remove("d-none")
        pwdFlag = false
    }

    if (fnFlag && lnFlag && eFlag && pwdFlag){
        fnTarget.value = lnTarget.value = eTarget.value = pwdTarget.value = ""
        window.location.href = "/success.html"
    }
})



showPwdButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    }
    else{
        pwdTarget.setAttribute("type", "text")
    }
})
