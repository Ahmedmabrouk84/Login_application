var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var btnLogin = document.getElementById("Login");
var msgMastac = document.getElementById("msgMastac");
var msgUser = document.querySelector(".d-none");
var UserName="";
clientList = [];
if (localStorage.getItem("clientsContainer") !== null) {
  clientsList = JSON.parse(localStorage.getItem("clientsContainer"));
}

// ==================== addClient() ===================
function getClient() {
  if (isEmpty() == false) {
    msgUser.classList.remove("d-none");
    msgMastac.classList.add('d-none')
    return false;
  } else {
    msgUser.classList.add("d-none");

    for (let i = 0; i < clientsList.length; i++) {
      if (
        signinEmail.value == clientsList[i].clientEmail &&
        signinPassword.value == clientsList[i].clientPassword
      ) {
        window.location = "./home.html";
        UserName =clientsList[i].clientName;
        localStorage.setItem('sessionUserName',JSON.stringify(UserName))
        msgMastac.classList.add('d-none')

      }
      else{
        msgMastac.classList.remove('d-none')
      }
    }
  }
}

// ==================== clearForm() ===================

function clearForm() {
  signinEmail.value = null;
  signinPassword.value = null;
}
// ==================== btnLogin Click ===================

btnLogin.addEventListener("click", function () {
  getClient();
  // moveTabe();
  // clearForm();
});

// ==================== isEmpty ===================
function isEmpty() {
  if (signinEmail.value == "" || signinPassword.value == "") {
    return false;
  } else {
    return true;
  }
}
