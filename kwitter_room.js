
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA-EdUWL3zXEY1zbJ2MupqRzdcEsxJKNU0",
  authDomain: "kwitter-24f8a.firebaseapp.com",
  databaseURL: "https://kwitter-24f8a-default-rtdb.firebaseio.com",
  projectId: "kwitter-24f8a",
  storageBucket: "kwitter-24f8a.appspot.com",
  messagingSenderId: "641629153713",
  appId: "1:641629153713:web:301a0cae4a857e8dcb7590",
  measurementId: "G-QQ2PQ4NF17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
