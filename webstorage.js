function func() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (name && password) {
        if (name == "captain" && password == 123) {
            sessionStorage.setItem("username", name);
            window.location = "welcomeuser.html";
        }
        else {
            document.getElementById("error").innerText = "username or password is inccorect";
        }
    }
    else {
        document.getElementById("error").innerText = "username or password cann't be empty";
    }
}