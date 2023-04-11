const passwordInput = document.querySelector(".password-field input");
const eyeIcon = document.querySelector(".password-field i");

const validationList = document.querySelectorAll(".validation-list li");

//password requirements
const requirements =[
    {regex: /.{8,}/, index: 0}, //8 characters min
    {regex: /[0-9]/, index: 1}, //at least 1 number
    {regex: /[a-z]/, index: 2}, // at least 1 lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3}, // at least one special case character
    {regex: /[A-Z]/, index: 4}, // at least 1 uppercase letter
]


eyeIcon.addEventListener("click", ()=> {
    //toggle the input type for password field as password and text
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //TOGGLE THE ICON
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});


passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        //password validation check with regex
        const isValid = item.regex.test(e.target.value);
        const validationItem = validationList[item.index];

        //updating icons according to requirements matched or not
        if(isValid) {
            validationItem.firstElementChild.className = "fa-solid fa-check";
            validationItem.classList.add("valid");
        } else {
            validationItem.firstElementChild.className = "fa-solid fa-circle";
            validationItem.classList.remove("valid");
        }
    });
});