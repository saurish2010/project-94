var firebaseConfig = {
    apiKey: "AIzaSyDpHucZF6sR1dcs-3miW2Ivj9PPNSb_5jo",
    authDomain: "project-chatter-a3dae.firebaseapp.com",
    databaseURL: "https://project-chatter-a3dae-default-rtdb.firebaseio.com",
    projectId: "project-chatter-a3dae",
    storageBucket: "project-chatter-a3dae.appspot.com",
    messagingSenderId: "160217299244",
    appId: "1:160217299244:web:bfe37e1230155373445489"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
