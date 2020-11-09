// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBg1lt_lMOQblYFIdD8am4Xore3FYu6Wew",
    authDomain: "music-545466.firebaseapp.com",
    databaseURL: "https://music-545466.firebaseio.com",
    projectId: "music-545466",
    storageBucket: "music-545466.appspot.com",
    messagingSenderId: "765643827348",
    appId: "1:765643827348:web:0183de8fade17ee75cac81",
    measurementId: "G-5FQFX6GWQ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ref = firebase.database().ref();

var title = document.getElementById("csp");
var uname = document.getElementById("rbn");
var thumb = document.getElementById("thumb");
var prf = document.getElementById("prf");
var cst = document.getElementById("cst");

title.style.display = "none";
uname.style.display = "none";
thumb.style.display = "none";
prf.style.display = "none";

ref.once('value', function (snapshot) {

    var flag = snapshot.child("flag").val();
    if (flag == "true") {
        console.log(snapshot.child("thumb").val());
        title.innerHTML = snapshot.child("title").val();
        uname.innerHTML = "Added By " + snapshot.child("uname").val().bold();
        thumb.src = snapshot.child("thumb").val();
        prf.src = snapshot.child("uavurl").val();
        title.style.display = "block";
        uname.style.display = "block";
        thumb.style.display = "block";
        prf.style.display = "block";
    } else {
        cst.innerHTML = "Nothing is Playing currently";
    }
});


function reveal_menu() {
    var brand = document.getElementById("navbar-brand");
    var button = document.getElementById("btn");
    var list = document.getElementById("list");
    var bottom_list = document.getElementById("bottom_list");

    list.classList.toggle("shown");
    bottom_list.classList.toggle("shown");

    if (list.classList.contains("shown")) {
        button.innerHTML = "close";
        button.style.color = "white";
        brand.style.color = "white";
    }
    else {
        button.innerHTML = "menu";
        button.style.color = "white";
        brand.style.color = "white";
    }
}

const questions = document.getElementsByClassName('accordion-title')//Gets all the questions (plus icon)

for (const question of questions) {
    const answer = question.parentElement.querySelector('.accordion-content')
    const remove = question.parentElement.querySelector(".remove")
    const add = question.parentElement.querySelector(".add")
    let open = false //Variable to check if the answer is visible or not

    function openAnswer() {
        if (open == true) { //If you click the question while the answer is visible it will stop being visible and open will change it's value to false
            add.style.display = "block";
            remove.style.display = "none";
            answer.style.overflow = "hidden";
            answer.style.maxHeight = '0';
            open = false;
        } else { //If you click the question while the answer is not visible it will start being visible and open will change it's value to true
            add.style.display = "none";
            remove.style.display = "block";
            answer.style.maxHeight = "300px";
            answer.style.overflow = "visible";
            open = true;
        }
    }

    question.addEventListener('click', openAnswer)
}