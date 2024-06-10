var btnLogout = document.getElementById("Logout");
var boxMsg = document.getElementById("boxMsg");

var userName = "";

if (localStorage.getItem("sessionUserName") !== null) {
    localStorage.getItem(
    (userName = JSON.parse(localStorage.getItem("sessionUserName")))
  );
}
boxMsg.innerHTML += userName;

btnLogout.addEventListener("click", function () {
  // alert("helllo");
  btnLog()
});

function btnLog() {
  localStorage.removeItem('sessionUserName')
  window.location="./index.html"
}