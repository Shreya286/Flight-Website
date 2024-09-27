// let form = document.querySelector(".form");

// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let phone = document.querySelector("#mobile");
// let password = document.querySelector("#password");

// let nameError = document.querySelector("#name-error");
// let emailError = document.querySelector("#email-error");
// let mobileError = document.querySelector("#mobile-error");
// let passwordError = document.querySelector("#password-error");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   clearErrors();

//   let myName = name.value.trim();
//   let myEmail = email.value.trim().toLowerCase();
//   let myPhone = phone.value.trim();
//   let myPassword = password.value.trim();

//   if (
//     nameValidation(myName) &&
//     emailValidation(myEmail) &&
//     phoneValidation(myPhone) &&
//     passwordValidation(myPassword)
//   ) {
//     alert("form submitted successfully");
//     clearInput();
//     console.log((myName, myEmail, myPhone, myPassword));
//   }
// });

// function clearErrors() {
//   nameError.textContent = "";
//   emailError.textContent = "";
//   mobileError.textContent = "";
//   passwordError.textContent = "";
// }

// //  clear Input feild
// function clearInput() {
//   name.value = "";
//   email.value = "";
//   phone.value = "";
//   password.value = "";
// }

// // name validation
// const nameValidation = (input) => {
//   if (input.length < 2) {
//     nameError.innerHTML = "name must be 2 char long";
//     return false;
//   }
//   return true;
// };

// // password validation
// const passwordValidation = (input) => {
//   if (input.length < 6) {
//     passwordError.innerHTML = "password must be 6 char";
//     return false;
//   }
//   const hasNumber = /\d/;
//   const hasUpperCase = /[A-Z]/;
//   if (!hasNumber.test(input) && !hasUpperCase.test(input)) {
//     passwordError.innerHTML = "Enter valid Mobile Number";
//     return false;
//   }
//   return true;
// };

// // email validation
// const emailValidation = (input) => {
//   let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//   if (!emailRegex.test(input)) {
//     emailError.innerHTML = " Enter Valid Email";
//     return false;
//   }
//   return true;
// };

// // phone validation
// const phoneValidation = (input) => {
//   let phoneRgex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
//   if (!phoneRgex.test(input)) {
//     mobileError.innerHTML = "enter valid mobile no.";
//     return false;
//   }
//   return true;
// };
let form = document.querySelector(".form-container");

let name = document.querySelector("#naam");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let mobile = document.querySelector("#contact");

/////////////////////////////////////////////////////////

let nameError = document.querySelector("#name-error");

let lastError = document.querySelector("#last-error");

let emailError = document.querySelector("#email-error");

let mobileError = document.querySelector("#contact-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrors();

  let myName = name.value.trim();
  let mylastName = lastName.value.trim();
  let myEmail = email.value.trim().toLowerCase();
  let myPhone = mobile.value.trim();

  if (
    nameValidation(myName) &&
    lastValidation(mylastName) &&
    emailValidation(myEmail) &&
    phoneValidation(myPhone) 
    

  )
    {
    alert("Form Submitted");
    clearInputs();
    console.log({ myName, myEmail, myPhone });
  }
});

//Clear Error€
function clearErrors() {
  nameError.textContent = "";
  lastError.textContent = "";
  emailError.textContent = "";
  
  mobileError.textContent = "";
}

function clearInputs() {
  name.value = "";
  lastName.value = "";
  email.value = "";
  mobile.value = "";
}

//Name Validation

const nameValidation = (input) => {
  if (input.length < 2) {
    nameError.innerHTML = " First Name must be atleast 2 character long";
    return false;
  }
  return true;
};

const lastValidation = (input) => {
  if (input.length < 6) {
    lastError.innerHTML = "Last Name must be atleast 6 character long";
    return false;
  }
  return true;
};



// //PASSWOERD VALIDATION
// const passwordValidation = (input) => {
//   if (input.length < 6) {
//     passwordError.innerHTML = "Password must be atleast 6 character long";
//     return false;
//   }
//   const hasNumber = /\d/;
//   const hasUpperCase = /[A-Z]/;

//   if (!(hasNumber.test(input) && hasUpperCase.test(input))) {
//     passwordError.innerHTML =
//       "Password must Contain One NUmber & One Capital  Alpha Character";
//     return false;
//   }
//   return true;
// };

//EMAIL VALIDTAION
const emailValidation = (input) => {
  let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!emailRegex.test(input)) {
    emailError.innerHTML = "Enter valid email";
    return false;
  }
  return true;
};

//PHONE VALIDATION
const phoneValidation = (input) => {
  let phoneRegex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  if (!phoneRegex.test(input)) {
    mobileError.innerHTML = "Enter valid mobile number";
    return false;
  }
  return true;
};

// let reset=document.querySelector("r");
// form.addEventListener("reset", (event) => {
//   event.preventDefault();
// clearErrors();
// });
// function clearErrors() {
//   nameError.textContent = "";
//   lastError.textContent = "";
//   emailError.textContent = "";
  
//   mobileError.textContent = "";
// }


// function chkcontrol(j){
//   total=0;
//   for(i=0;i<document.form.ckb.length; i++){
//     if(document.form.ckb[i].checked){
//       total=total+1;
//     }
//   }
//   if(total>1){
//     alert("reached limit")
//   }
// }