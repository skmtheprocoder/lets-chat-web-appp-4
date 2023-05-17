
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBqphXhhwYVxFjzPZvwaF6rksRQ-f8ed-4",
    authDomain: "kwitter-57ea2.firebaseapp.com",
    databaseURL: "https://kwitter-57ea2-default-rtdb.firebaseio.com",
    projectId: "kwitter-57ea2",
    storageBucket: "kwitter-57ea2.appspot.com",
    messagingSenderId: "555520655336",
    appId: "1:555520655336:web:1e995a890dab94bd752e5d",
    measurementId: "G-RM84PZ25PS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";   

  function addRoom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding Room"
    });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name -" + Room_names);
    row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html"
}

function logout(){
    window.location = "index.html";
}
