document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");

    let button = document.querySelector('#inputBtn');
    let inputUsername = document.querySelector('input[name="uname"]');
    let inputPass = document.querySelector('input[name="psw"]');

    button.addEventListener('click', () => {
        console.log('Button pressed');
        console.log('inputUsername ', inputUsername.value)
        console.log('inputPass ', inputPass.value)

        if(inputUsername.value === 'Froggo' && inputPass.value === 'Password123') {
            alert("You're now logged in!");
        } else {
            alert("Wrong password! Hint: it's definitely not Password123")
        }
    });
  });