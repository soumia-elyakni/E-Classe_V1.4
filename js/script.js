const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nameInput = document.getElementById('name');
const form = document.getElementById('form');
const messageName = document.getElementById('messageName');
const messageEmail = document.querySelector('.messageEmail');
const messagePass = document.querySelector('.messagePass');



form.addEventListener('submit', (e) => {
    if (emailInput.value == "") {
        e.preventDefault()
        messageEmail.textContent = "Ce Champ est obligatoire";
    } else {
        messageEmail.textContent = "";
    }
    if (passInput.value == "") {
        e.preventDefault()
        messagePass.textContent = "Ce Champ est obligatoire";
    } else {
        messagePass.textContent = "";
    }
    if(nameInput.value == ""){
        e.preventDefault()
        messageName.textContent = "Ce Champ est obligatoire";
    } else {
        messageName.textContent = "";
    }
})


