function clickbutton(){
    document.getElementById("btn").style.color='green';
}

function myfunction(){
    var text1="Hello"
    var text2="Citizens"
    var text3= text1+" "+text2

    document.getElementById("demo").innerHTML=text3
}

function loggedinside(){
    var greeting1="Welcome back,"
    var greetingname="Olga"

    document.getElementById("loggedin").innerHTML=greeting1+" "+greetingname
}

// show/hide login and signup forms

// document.getElementById('switchlogin').addEventListener('click',()=>{
//     document.getElementById('signupform').style.display='none'
//     document.getElementById('loginform').style.display='block'
// })

// document.getElementById('switchsignup').addEventListener('click',()=>{
//     document.getElementById('loginform').style.display='none'
//     document.getElementById('signupform').style.display='block'
// })