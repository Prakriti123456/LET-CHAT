
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA-z_Z7awqezTIZBc3QYn0pLjujhrNiZR0",
      authDomain: "lets-chat-4c3c0.firebaseapp.com",
      databaseURL: "https://lets-chat-4c3c0-default-rtdb.firebaseio.com",
      projectId: "lets-chat-4c3c0",
      storageBucket: "lets-chat-4c3c0.appspot.com",
      messagingSenderId: "855798776097",
      appId: "1:855798776097:web:739b3c46424f757b72fe60"
    };
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}