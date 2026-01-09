let form=document.querySelector("#login-form");

let storedUsername="";
let storedPassword="";

function getData(){

    storedUsername=document.querySelector("#username").value;
    storedPassword=document.querySelector("#password").value;
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
    if(storedPassword===""){
        document.querySelector("#password-error").innerText="Enter a valid password";
        isChecked=false;
    }
}

form.addEventListener("submit", function (e){
    e.preventDefault();
    getData();
    checkData();
    if(isChecked){
        window.location.href="successful.html";
    }
});