var signUpName = document.getElementById("signinName");
var signUpEmail = document.getElementById("signinEmail");
var signUpPassword = document.getElementById("signinPassword");
var msgEmail = document.getElementById("msgEmail");
var msgSuccess = document.getElementById("msgSuccess");
var msgUser = document.querySelector(".d-none");
var btnSingUp = document.getElementById("singUp");
clientsList = [];


if (localStorage.getItem("clientsContainer") !== null) {
  clientsList = JSON.parse(localStorage.getItem("clientsContainer"));
}

// ==================== addClient() ===================
function addClient() {
  if (isEmpty() == false) {
    msgUser.classList.remove("d-none");
    msgEmail.classList.add('d-none')
    return false;
  } else {
    msgUser.classList.add("d-none");
  }

  if (isEmailExist() == false) {
    msgEmail.classList.remove("d-none");
    msgSuccess.classList.add('d-none')
    return false;
  } else {
    msgSuccess.classList.remove('d-none')
    msgEmail.classList.add("d-none");
  }

  var client = {
    clientName: signUpName.value,
    clientEmail: signUpEmail.value,
    clientPassword: signUpPassword.value,
  };
  // console.log(client);
  clientsList.push(client);
  localStorage.setItem("clientsContainer", JSON.stringify(clientsList));
  // console.log(localStorage);
}

// ==================== clearForm() ===================
function clearForm() {
  signUpName.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
}
// ==================== addEventListener () ===================
btnSingUp.addEventListener("click", function () {
  addClient();
  // clearForm();
});


// ========= to check inputs is Empty or No =========

function isEmpty() {
  if (
    signUpEmail.value == "" ||
    signUpPassword.value == "" ||
    signUpName == ""
  ) {
    return false;
  } else {
    return true;
  }
}

// ========= to check Email Exist or No =========
function isEmailExist() {
  for (var i = 0; i < clientsList.length; i++) {
    if (
      clientsList[i].clientEmail.toLowerCase() ==
      signUpEmail.value.toLowerCase()
    ) {
      return false;
    }
  }
}


//================= Validation Item =============
// function validationInputs(element) {
//   var text = element.value;
//   regex = {
//     bookmarkName: /^\w{3,35}(\s+\w+)*$/gi,
//     // bookmarkURL:
//     //   /^((?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[a-zA-Z0-9.-]+)\.[a-zA-Z]{2,})(?:[^\s]*)$/g,
//   };

//   if (regex[element.id].test(text) == true) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//     return true;
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//     return false;
//   }
// }