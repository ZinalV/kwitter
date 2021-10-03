
function addUser() {

  var user_name = document.getElementById("username_textinputid").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

