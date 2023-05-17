//YOUR FIREBASE LINKS
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
  room_name = localStorage.getItem("room_name")
  
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

firebase.database().ref("room_name").child(message_id).update({
    like:updated_likes
});
