function validation(event) {
  event.preventDefault();
  var Email = document.getElementById("email");
  var mobile = document.getElementById("mobile")

  let isvalid = true;

  if (Email.value.length <= 0) {
    Email.focus();
    isvalid = false;
    Email.style.border = "2px solid red";
  }
  
  if (mobile.value.length < 10) {
    mobile.focus();
    isvalid = false;
    mobile.style.border = "solid 2px red";
     
  }
  if (isvalid) {
    
     localStorage.setItem("Email",Email.value);
     localStorage.setItem("Mobile",mobile.value);

     window.location.href="page2.html"
    let messageDiv = document.getElementById("displayMessage");
    messageDiv.innerHTML =
      "Hi " +
      "your " +
      Email.value +
      "and" +
      mobile.value +
      " Thank you for reaching out to us. We will be back!";
    
  }
}
var emailInput = document.getElementById("email");

function emailvalidate(event) {
  let valid = true;
  let emailInputValue = event.target.value;
  if (event.target.value.indexOf("@") <= 0) {
    valid = false;
  }

  if (event.target.value.charAt(emailInputValue.length - 4) != ".") {
    valid = false;
  }

  if (!valid) {
    emailInput.style.border = "2px solid red";
    alert('Please enter valid email')
  } else {
    emailInput.style.border = "2px solid green";
  }
}

var phoneInput = document.getElementById("mobile");



function validMobileCheck(event) {
    let valid = true;

  var phoneInputValue = event.target.value;
  if (isNaN(event.target.value)) {
    event.target.value = "";
    valid= false
  }
  if(phoneInputValue.length < 10){
    valid = false;
  }
  if(phoneInputValue.length > 10){
   valid = false
  }

  if ((phoneInputValue[0] != 9 &&
    phoneInputValue[0] != 8 &&
    phoneInputValue[0] != 7 &&
    phoneInputValue[0] != 6)) {
    valid = false;
  }
  
 
  if (valid) {
    phoneInput.style.border = "2px solid green";
  } else {
    phoneInput.style.border = "2px solid red";
   
    
   
  }
}
