let form=document.querySelector("#registration-form");

let storedName="";
let storedUsername="";
let storedEmail="";
let storedPhone="";
let storedPassword="";
let storedC_Password="";
let storedGender;

function getUserData(){

    let username=form.querySelector("#username").value;
    let name=form.querySelector("#name").value;
    let email=form.querySelector("#email").value;
    let phone=form.querySelector("#phone").value;
    let password=form.querySelector("#password").value;
    let c_password=form.querySelector("#c-password").value;

    storedUsername=username;
    storedName=name;
    storedEmail=email;
    storedPhone=phone;
    storedPassword=password;
    storedC_Password=c_password;

}
let isChecked=true;

function checkData(){
    isChecked=true;
    document.querySelectorAll(".error-message").forEach(err => {
    err.innerText = "";
});

    if(storedUsername===""){
        document.querySelector("#username-error").innerText="Enter a valid username";
        isChecked=false;
    }
    if(storedPhone.length!=10){
        document.querySelector("#phone-error").innerText="10-digits expected";
        isChecked=false;
    }
    if(storedC_Password!=storedPassword){
        document.querySelector("#c-password-error").innerText="Password must be same";
        isChecked=false;
    }
    if(storedEmail.length>0&&!storedEmail.includes("@gmail.com")){
        document.querySelector("#email-error").innerText="correct - example@gmail.com";
        isChecked=false;
    }
    if(storedEmail.length==0){
        document.querySelector("#email-error").innerText="Email required";
        isChecked=false;
    }
    if(storedName.length==0){
        document.querySelector("#name-error").innerText="Enter your name";
        isChecked=false;
    }
    if(storedPassword.length==0){
        document.querySelector("#password-error").innerText="Password expected";
        isChecked=false;
    }

    if (!document.querySelector('input[name="gender"]:checked')) {
    document.querySelector("#gender-error").innerText = "Please select a gender";
    isChecked=false;
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    getUserData();

    checkData();

    if(isChecked){
        window.location.href="login.html";
    }
});
