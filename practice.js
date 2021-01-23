
//ADD YOUR FIREBASE LINKS

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

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "testing database"
      });
  }