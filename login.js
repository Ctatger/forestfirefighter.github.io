function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="INSA" && password=="Zilly")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}