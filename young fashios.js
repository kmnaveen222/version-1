//---------------------collapse-------------------------------
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
//------------------------------collapse END------------------------------
//----------------------------auto slideshow---------------------------------
var count=1;
setInterval(function(){
  document.getElementById('radio'+count).checked=true;
  count++;
  if(count>6){
    count=1;
  }
},3000);
//----------------------------auto slideshow END---------------------------------


//-------------------------------offer timing-------------------------------------------

var countDownDate = new Date("oct 29,2022").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "SALE IS LIVE";
  }
}, 1000);
//-------------------------------offer timing END-------------------------------------------

//-------------------------------login-btn Start-------------------------------------------
let loginform = document.querySelector('.login-form-container');
document.querySelector('#login-btn12').onclick = () =>{
  loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginform.classList.remove('active');
}

//-------------------------------login-btn END-------------------------------------------

//-------------------------------sign-btn Start-------------------------------------------
let signform = document.querySelector('.sign-form-container');
document.querySelector('#new-account').onclick = () =>{
  signform.classList.toggle('active');
  loginform.classList.remove('active');
}
document.querySelector('#old-account').onclick = () =>{
  loginform.classList.toggle('active');
  signform.classList.remove('active');
}
document.querySelector('#close-sign-btn').onclick = () =>{
  signform.classList.remove('active');
}
//-------------------------------sign-btn END-------------------------------------------

//-------------------------------validation Start-------------------------------------------
function validate()
    {
        
var name= document.getElementById("fname").value;
var lastname= document.getElementById("lname").value;
var emailid= document.getElementById("email").value;
var password= document.getElementById("pwd").value;
var conpassword= document.getElementById("cpwd").value;
if(name == "")
{
    alert("Enter Your Details");
    return false;
}
if(!isNaN(name))
{
alert("FirstName should be in Characters Only");
return false;
}
if(lastname == "")
{
    alert("Enter Your Last Name");
    return false;
}
if(!isNaN(lastname))
{
alert("Last Name should be in Characters Only");
return false;
}
var at=emailid.indexOf("@");
var dot=emailid.lastIndexOf(".");
if(at<1||dot<at+2||dot+2>=emailid.length)
{
alert("enter valid email id");
return false;
}
if(password == "")
{
alert("Enter a password");
return false;
}

if(conpassword == "")
{
alert("Enter a confirm password");
return false;
}

if(password!=conpassword){
alert("Password does not match");
return false;
}
alert('you have successfully created an account, then go to login');
// stored data from the register-form
localStorage.setItem('name', fname.value);
localStorage.setItem('lastname', lname.value);
localStorage.setItem('emailid', email.value);
localStorage.setItem('password', pwd.value);

}

function validatelogin()
    {

var email= document.getElementById("emaillogin").value;
var password= document.getElementById("pwdlogin").value;

var at=email.indexOf("@");
var dot=email.lastIndexOf(".");
if(at<1||dot<at+2||dot+2>=email.length)
{
alert("enter valid email id");
return false;
}
if(password == "" )
{
alert("Enter a password");
return false;
}

// entered data from the login-form
var storedfirstName = localStorage.getItem('name');
var storedlastName = localStorage.getItem('lastname');
var storedName = localStorage.getItem('lastname'+'lastname');
var storedemail = localStorage.getItem('emailid');
    var storedPw = localStorage.getItem('password');
// check if stored data from register-form is equal to data from login form

if (emaillogin.value == storedemail  && pwdlogin.value == storedPw) {
    alert('You are logged in ' + storedName);
    location.replace("/register page.html");

} else {
    alert('Access denied. Valid username and password is required.');
}
}







// const form=document.getElementById('form');
// const lname=document.getElementById('lname').value;
// const email=document.getElementById('email').value;
// const password=document.getElementById('pwd').value;
// const cpassword=document.getElementById('cpwd').value;

// function validateName(){
  
// var fname=document.getElementById('fname').value;
//   if(fnmae===''){
    
//     alert("enter a name");
//     return false;
//   // document.getElementById('fnameError').innerHTML='Enter a first name';
//   // document.getElementById('exclamation-circle').innerHTML='<i class="fa fa-exclamation-circle"></i>';
//   // return false;
// }
// else{
//   document.getElementById('check-circle').innerHTML='<i class="fa fa-check-circle"></i>';
//   return true;
// }
// }
// // form.addEventListener('submit',e =>{
// //   e.preventDefault();
// //   checkInput();
// // });

// // function checkInput(){
// //   const fnamevalue=fname.value.trim();
// //   const lnamevalue=lname.value.trim();
// //   const emailvalue=email.value.trim();
// //   const passwordvalue=password.value.trim();
// //   const cpasswordvalue=cpassword.value.trim();

// //   if(fnamevalue===''){
// //     setError(fname,'First name cannot be blank');
// //   }
// //   else{
// //     setSuccess(fname);
// //   }
// //   if(lnamevalue===''){
// //     setError(lname,'Last name cannot be blank');
// //   }
// //   else{
// //     setSuccess(lname);
// //   }
// //   if(emailvalue===''){
// //     setError(ename,'Email id cannot be blank');
// //   }
// //   else if(!isEmail(emailvalue)){
// //     setError(email,'Not a valid email');
// //   }
// //   else{
// //     setSuccess(email);
// //   }
// //   if(passwordvalue===''){
// //     setError(password,'password cannot be blank');
// //   }
// //   else if(password.length<8){
// //     setError(password,'password should be 8 character');
// //   }
// //   else{
// //     setSuccess(password);
// //   }
// //   if(cpasswordvalue===''){
// //     setError(cpassword,'confirm password cannot be blank');
// //   }
// //   else if(password!==cpassword){
// //     setError(cpassword,'password does not a valid match');
// //   }
// //   else{
// //     setSuccess(cpassword);
// //   }
// // }

// // function setError(input,message){
// //   const formcontrol=input.parentElement;
// //   const errormes = document.querySelector('.error-mes');
// //   formcontrol.className = '.sign-form-container form error';
// //   errormes.innerText = message;
// // }
// // function setSuccess(input,message){
// //   const formcontrol = input.parentElement;
// //   formcontrol.className = '.sign-form-container form success';
// // }
// function isEmail(email){
//   return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
// }

//-------------------------------validation END-------------------------------------------

//-------------------------------server side validation start-------------------------------------------




//-------------------------------server side validation END-------------------------------------------