
function valid(){
    var pwd = document.getElementById("password");
    var cpwd = document.getElementById("cpassword");

    
    if(pwd.value >= 8 || cpwd.value >=8){
        alert("Password must be minimum of 8 characters");
        return false;
    }


    else if(pwd.value != cpwd.value){
        alert("Passwords don't Match");
        return false;
    }
    return true;
      
}