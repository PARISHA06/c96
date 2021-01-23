
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCM3Nwzx8zxg4MgedHH-o65wb18uIpOk9g",
      authDomain: "kwitter-66750.firebaseapp.com",
      databaseURL: "https://kwitter-66750-default-rtdb.firebaseio.com",
      projectId: "kwitter-66750",
      storageBucket: "kwitter-66750.appspot.com",
      messagingSenderId: "893860300763",
      appId: "1:893860300763:web:a0b2f0c0f28c0636cf49fe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name  + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"a new room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "  + Room_names);
row="<div class='roon_name' id= "+ Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}



