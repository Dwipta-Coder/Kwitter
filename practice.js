var firebaseConfig = {
    apiKey: "AIzaSyCyCc83MuHfKKJz4L5NcQgqb9O-k-8CnPo",
    authDomain: "kwitter-2765.firebaseapp.com",
    databaseURL: "https://kwitter-2765-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kwitter-2765",
    storageBucket: "kwitter-2765.appspot.com",
    messagingSenderId: "641801491752",
    appId: "1:641801491752:web:1d974f0271404e0cc32c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}