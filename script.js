function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Please enter your username and password.");
    } else if (username == "admin" && password == "password") {
      alert("Welcome, " + username + "!");
    } else {
      alert("Incorrect username or password.");
    }
  }
  