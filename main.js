function AddUser(){
    console.log("Add user function is called");
    userName=document.getElementById("userInput").value;
    localStorage.setItem("user_name",userName);
    window.location="kwitter_room.html";
 }
 
