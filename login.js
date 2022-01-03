
var login = new Boolean(false);

function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    

    if(username=="INSA" && password=="Zilly"){
        alert("login ui");
        login=true;
        window.location.href = "gps.html";
        return true;
    }

    else{
        window.location.href = "login.html";
        return false;
    }
}

function verify(){
    if(login==false){
        window.location.href = "login.html";
    }
}