//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCW0hxLtH_bMoJHWr_zOEZHjqbwY-8F2d4",
  authDomain: "fairy-488d8.firebaseapp.com",
  databaseURL: "https://fairy-488d8-default-rtdb.firebaseio.com",
  projectId: "fairy-488d8",
  storageBucket: "fairy-488d8.appspot.com",
  messagingSenderId: "713411018288",
  appId: "1:713411018288:web:bbdef056ede80cea6f37f5"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
room="<div class='room_names' id="+Room_names+" onclick='DisplayRoomName(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=room;
    //End code
    });});}
getData();

function logOut(){
  localStorage.removeItem("user_name");
    window.location="index.html";//remove the local storage variable
}

function Load(){
  un=localStorage.getItem("user_name");
document.getElementById("userName").innerHTML="Welcome "+un+" !";
}
function addRoom(){
rn=document.getElementById("roomName").value;
localStorage.setItem("room",rn);
firebase.database().ref("/").child(rn).update({
  purpose:"adding room name"
});
window.location="kwitter_page.html";
}

function DisplayRoomName(name){
  localStorage.setItem("room",name);
  window.location="kwitter_page.html";
}