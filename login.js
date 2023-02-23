const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const nextButton = document.getElementById('next');
const otpconfirmButton = document.getElementById('otp-confirm')
const container = document.getElementById('container');
var otp_input =document.querySelectorAll(".otp-boxs  input");


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
nextButton.addEventListener('click',()=>{
    container.classList.add("right-otp-active");
});
otpconfirmButton.addEventListener('click',() =>{
    container.classList.add("right-pass-active")
})

function Nextitem(values,nextinput){
if(values.value.length=values.getAttribute('maxlength')){
    otp_input[nextinput].focus();
}
}

function myFunction() {
    var x = document.getElementById("showpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var y = document.getElementById("showpass2");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }



let timerOn = true;
function timer(remaining) {
var m = Math.floor(remaining / 60);
var s = remaining % 60;
        
m = m < 10 ? '0' + m : m;
s = s < 10 ? '0' + s : s;
document.getElementById('timer').innerHTML = m + ':' + s;
remaining -= 1;
        
if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
}

if(!timerOn) {
    // Do validate stuff here
    return;
}   
// Do timeout stuff here
alert('Timeout for otp');
}
timer(120);