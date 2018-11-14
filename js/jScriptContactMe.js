var yourName = document.getElementById('yourName');
var email = document.getElementById('yourEmail');
var emailTitle = document.getElementById('emailTitle');
var textAreaText = document.getElementById('textAreaText');
var btnSubmit = document.getElementById('btnSubmit');

if (sessionStorage.getItem("jezik") === "ENG") {
    yourName.setAttribute("placeholder", "Your name");
    email.setAttribute("placeholder", "Your email address");
    emailTitle.setAttribute("placeholder", "Title");
    textAreaText.setAttribute("placeholder", "Type your message here");
    btnSubmit.innerHTML = "Submit";
} else {
    yourName.setAttribute("placeholder", "Vase ime");
    email.setAttribute("placeholder", "Vasa email adresa");
    emailTitle.setAttribute("placeholder", "Naslov");
    textAreaText.setAttribute("placeholder", "Upisite vasu poruku ovdje");
    btnSubmit.innerHTML = "Posaljite";
}

document.querySelector('.logo').addEventListener('click', function() { window.open('index.html', target="_self") });