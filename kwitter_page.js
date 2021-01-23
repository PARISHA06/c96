//YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}