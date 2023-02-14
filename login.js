
function validate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( username == "lalit@gmail.com" && password == "1234"){
        alert ("Login successfully");
        window.location = "home.html";
        return false;
    }
    else{
        
        alert("Invalid Credentials");
       
    }
}