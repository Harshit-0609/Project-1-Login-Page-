let form=document.querySelector("#registration-form");

let storedName="";
let storedUsername="";
let storedEmail="";
let storedPhone="";
let storedPassword="";
let storedC_Password="";

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

function checkData(){
    
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    getUserData();

    checkData();
});
