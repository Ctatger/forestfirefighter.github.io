function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="INSA" && password=="Zilly")
    {
        window.open("coord.html");
        return false;
    }
    else
    {
        alert("login failed");
    }
}