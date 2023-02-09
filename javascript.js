function init() {
    setPasswordError();
    setEmailError();
}
function setEmailError(){
    const email = document.getElementById("email");

    email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
    });
}
function setPasswordError() {
    const pword = document.getElementById('password');
    const pwordConfirm = document.getElementById('confirmPassword');
    const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{1,32}$/;
    pwordConfirm.addEventListener("input", (a) => {
        if (pword.value != pwordConfirm.value) {
            pwordConfirm.setCustomValidity("Your password must match")
        } else if (pword.validity.tooShort) {
            pword.setCustomValidity("Your password must be eight characters in length");
        } else if (!pword.value.match(regularExpression)) {
            pword.setCustomValidity("Your password must contain one uppercase letter, one lowercase letter, a digit, and a special character");
        } else {
            pwordConfirm.setCustomValidity("");
            pword.setCustomValidity("");
        }
    })
}
init();