const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:first-Child");
const loginSubmit = document.querySelector(".login-form input:last-child");
const greeting = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}    
function paintGreetings(username){
    greeting.innerText = `안녕 ${username} 반가워`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.onsubmit = onLoginSubmit;
}else{
    paintGreetings(savedUsername);
}
    