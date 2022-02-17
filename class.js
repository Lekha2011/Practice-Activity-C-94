var firebaseConfig = {
    apiKey: "AIzaSyCDgXEw79krpFX14HVZOxWqEGupwvIHJDs",
    authDomain: "chat-app-b7514.firebaseapp.com",
    databaseURL: "https://chat-app-b7514.firebaseio.com",
    projectId: "chat-app-b7514",
    storageBucket: "chat-app-b7514.appspot.com",
    messagingSenderId: "623330425119",
    appId: "1:623330425119:web:a18fa9a75b458b7a48582a"
  };
  
 firebase.initializeApp(firebaseConfig);

  function addUser(){
var username = document.getElementById("Username");
firebase.database().ref("/").child(username).update({
    purpose:"Lekha"});
  }