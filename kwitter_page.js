var firebaseConfig = {
    apiKey: "AIzaSyCW0hxLtH_bMoJHWr_zOEZHjqbwY-8F2d4",
    authDomain: "fairy-488d8.firebaseapp.com",
    databaseURL: "https://fairy-488d8-default-rtdb.firebaseio.com",
    projectId: "fairy-488d8",
    storageBucket: "fairy-488d8.appspot.com",
    messagingSenderId: "713411018288",
    appId: "1:713411018288:web:bbdef056ede80cea6f37f5"
    };
   
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room");

    function sendMSG(){
        msg=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
            messages:msg,
            name:user_name,
            likes:0
        });
        document.getElementById("message").value="";
    }
    function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;childData=childSnapshot.val();if(childKey!="purpose"){
        firebase_message_id=childKey;
        message_data=childData;
        Name=message_data["name"];
        msg=message_data["messages"];
        like=message_data["likes"];
        nameWithTag="<h4>"+Name+"<img class='userTick' src='check.png'><br>"+msg+"</h4>";
        likeBTN="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        spanWithTag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span></button><hr>";   
row=nameWithTag+likeBTN+spanWithTag;
document.getElementById("output").innerHTML+=row;
     }
       });});}
   getData();

   function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
    likes:update_likes
});
   }