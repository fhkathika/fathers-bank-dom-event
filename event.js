
document.getElementById('submit').addEventListener('click',function(){
    const inputField=document.getElementById('input-mail');
     const userEmail=inputField.value;

const passwordField=document.getElementById('input-password');
const userPassword=passwordField.value;
if( userEmail == 'fhkathika@gmail.com' && userPassword == 'kathika'){
window.location.href='banking.html';
    }
    else{
        console.log('user not valid')  
    }

})
