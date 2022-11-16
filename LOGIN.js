var firebaseConfig = {
    apiKey: "AIzaSyA7qC9la1G8PrFBOFHI8jUNnQT5zPp1lUQ",
    authDomain: "hello-world-96d28.firebaseapp.com",
    databaseURL: "https://hello-world-96d28-default-rtdb.firebaseio.com",
    projectId: "hello-world-96d28",
    storageBucket: "hello-world-96d28.appspot.com",
    messagingSenderId: "463446225596",
    appId: "1:463446225596:web:6fdb275ef59168b29556b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("hello")
function addUser(){
    console.log("hello")
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Roomscreen.html";
};